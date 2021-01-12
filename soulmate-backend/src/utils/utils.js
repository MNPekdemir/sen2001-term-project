/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
const { User } = require('../modules/user/model');
const { Category } = require('../modules/category/model');

const testCategories = [
  'pet',
  'movie',
  'dance',
  'music',
  'gaming',
  'theatre',
  'football',
  'hardware',
  'software',
  'cosmetic',
  'carpentry',
  'gastronomy',
  'environment',
];

const testUsers = [
  {
    email: 'test1@soulmate.com',
    password: '123456',
    firstName: ' Jesus',
    lastName: 'Silva',
    birthday: '1985-01-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Bursa',
  },
  {
    email: 'test2@soulmate.com',
    password: '123456',
    firstName: 'Marcos',
    lastName: 'Morais',
    birthday: '1986-02-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Erzurum',
  },
  {
    email: 'test3@soulmate.com',
    password: '123456',
    firstName: 'Jaap',
    lastName: 'Stam',
    birthday: '1987-03-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Istanbul',
  },
  {
    email: 'test4@soulmate.com',
    password: '123456',
    firstName: 'Alessandro',
    lastName: 'Nesta',
    birthday: '1976-04-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Ankara',
  },
  {
    email: 'test5@soulmate.com',
    password: '123456',
    firstName: 'Paolo',
    lastName: 'Maldini',
    birthday: '1977-05-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Amasya',
  },
  {
    email: 'test6@soulmate.com',
    password: '123456',
    firstName: 'Andrea',
    lastName: 'Pirlo',
    birthday: '1978-06-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Denizli',
  },
  {
    email: 'test7@soulmate.com',
    password: '123456',
    firstName: 'Gennaro',
    lastName: 'Gattuso',
    birthday: '1979-07-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Istanbul',
  },
  {
    email: 'test8@soulmate.com',
    password: '123456',
    firstName: 'Clarence',
    lastName: 'Seedorf',
    birthday: '1980-08-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Burdur',
  },
  {
    email: 'test9@soulmate.com',
    password: '123456',
    firstName: 'Ricardo',
    lastName: 'Leite',
    birthday: '1981-09-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Batman',
  },
  {
    email: 'test10@soulmate.com',
    password: '123456',
    firstName: 'Andriy',
    lastName: 'Shevchenko',
    birthday: '1981-10-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Trabzon',
  },
  {
    email: 'test11@soulmate.com',
    password: '123456',
    firstName: 'Filippo',
    lastName: 'Inzaghi',
    birthday: '1982-11-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Giresun',
  },
  {
    email: 'test12@soulmate.com',
    password: '123456',
    firstName: 'John',
    lastName: 'Doe',
    birthday: '1983-12-27 21:00:00.000Z',
    country: 'Turkey',
    city: 'Istanbul',
  },
  {
    email: 'test13@soulmate.com',
    password: '123456',
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    birthday: '1984-01-10 21:00:00.000Z',
    country: 'Turkey',
    city: 'Van',
  },
  {
    email: 'test14@soulmate.com',
    password: '123456',
    firstName: 'Roberto',
    lastName: 'Carlos',
    birthday: '1985-02-05 21:00:00.000Z',
    country: 'Turkey',
    city: 'Zonguldak',
  },
  {
    email: 'test15@soulmate.com',
    password: '123456',
    firstName: 'Zinedine',
    lastName: 'Zidane',
    birthday: '1986-03-04 21:00:00.000Z',
    country: 'Turkey',
    city: 'Istanbul',
  },
  {
    email: 'test16@soulmate.com',
    password: '123456',
    firstName: 'David',
    lastName: 'Beckham',
    birthday: '1980-07-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'Eskisehir',
  },
  {
    email: 'test17@soulmate.com',
    password: '123456',
    firstName: 'Lionel',
    lastName: 'Messi',
    birthday: '1980-08-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test18@soulmate.com',
    password: '123456',
    firstName: 'Steven',
    lastName: 'Gerard',
    birthday: '1980-04-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test19@soulmate.com',
    password: '123456',
    firstName: 'Frank',
    lastName: 'Lampard',
    birthday: '1980-02-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test20@soulmate.com',
    password: '123456',
    firstName: 'Tierry',
    lastName: 'Henry',
    birthday: '1980-01-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test21@soulmate.com',
    password: '123456',
    firstName: 'Liugi',
    lastName: 'Buffon',
    birthday: '1980-09-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test22@soulmate.com',
    password: '123456',
    firstName: 'Liugi',
    lastName: 'Buffon',
    birthday: '1980-10-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test23@soulmate.com',
    password: '123456',
    firstName: 'Sisman',
    lastName: 'Ronaldo',
    birthday: '1980-11-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test24@soulmate.com',
    password: '123456',
    firstName: 'Fabian',
    lastName: 'Barthez',
    birthday: '1980-12-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
  {
    email: 'test25@soulmate.com',
    password: '123456',
    firstName: 'Ryan',
    lastName: 'Gigs',
    birthday: '1980-08-13 21:00:00.000Z',
    country: 'Turkey',
    city: 'İstanbul',
  },
];

module.exports.initiateMock = () => {
  Category.find().then((docs) => {
    if (!docs.length) {
      testCategories.forEach((c) => {
        const category = new Category({ name: c });
        category.save();
      });
    }
  });

  User.find().then((users) => {
    if (!users.length) {
      Category.find().then((cats) => {
        if (cats.length) {
          testUsers.forEach((u) => {
            const c1 = cats[Math.floor(Math.random() * cats.length)]._id;
            const c2 = cats[Math.floor(Math.random() * cats.length)]._id;
            const user = new User(u);
            user.categoryIds = [c1, c2];
            user.markModified('categoryIds');
            user.save();
          });
        }
      });
    }
  });
};
