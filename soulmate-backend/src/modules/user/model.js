/* eslint-disable func-names,  no-underscore-dangle */
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { USER_ROLES } = require('../../common/constants');
const { getHmac, verifyPassword, getZodiac } = require('./helper');

const { JWT_KEY = 'jn12jknk12' } = process.env;

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'email is required.'],
      minlength: 1,
      trim: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '"{VALUE}" is not valid.',
      },
    },
    firstName: {
      type: String,
      required: [true, 'firstName is required.'],
      minlength: 1,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required.'],
      minlength: 1,
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'country is required.'],
      minlength: 1,
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'city is required.'],
      minlength: 1,
      trim: true,
    },
    birthday: {
      type: Date,
      required: [true, 'birthday is required.'],
    },
    password: {
      type: String,
      required: [
        true,
        'password is required and must be minimum 6 characters.',
      ],
      minlength: 6,
    },
    zodiac: {
      type: String,
    },
    tokens: [
      {
        access: {
          type: String,
          required: true,
        },
        token: {
          type: String,
          required: true,
        },
      },
    ],
    role: {
      type: Number,
      default: USER_ROLES.REGULAR,
    },
    numberOfEnquire: {
      type: Number,
      default: 0,
    },
    categoryIds: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
      },
    ],
  },
  {
    timestamps: true,
    // necessary for virtual population. In toJson Function it calls this.
    toObject: { virtuals: true },
  }
);

// ----- METHODS -----
schema.methods.generateAuthToken = function () {
  const user = this;
  const access = 'auth';
  const token = jwt
    .sign(
      {
        _id: user._id.toHexString(),
        access,
      },
      JWT_KEY
    )
    .toString();
  user.tokens = user.tokens.concat([{ access, token }]);
  return user.save().then(() => token);
};

schema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, [
    '_id',
    'email',
    'firstName',
    'lastName',
    'birthday',
    'country',
    'city',
    'categoryIds',
    'numberOfEnquire',
    'zodiac',
    'role',
  ]);
};

// ----- STATICS -----
schema.statics.findByCredentials = function (creds) {
  const User = this;
  return User.findOne({ email: creds.email })
    .then(async function (user) {
      if (!user) return Promise.reject(new Error('User not found.'));
      if (verifyPassword(creds.password, user.password)) {
        const token = await user.generateAuthToken();
        return Promise.resolve({ user, token });
      }
      return Promise.reject(new Error('Incorrect password.'));
    })
    .catch((err) => Promise.reject(err));
};

schema.statics.findByToken = function (token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, JWT_KEY);
  } catch (e) {
    return Promise.reject(new Error('Invalid Token'));
  }
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
};

// ----- MIDDLEWARES -----
schema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = getHmac(user.password);
  }
  if (user.isModified('birthday')) {
    user.zodiac = getZodiac(user.birthday);
  }

  next();
});

schema.pre('find', function (next) {
  const user = this;
  user.populate('categoryIds');
  next();
});

schema.pre('findOne', function (next) {
  const user = this;
  user.populate('categoryIds');
  next();
});

const User = mongoose.model('User', schema);

module.exports = { User };
