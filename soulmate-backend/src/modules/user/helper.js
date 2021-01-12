const crypto = require('crypto');

const { HMAC_KEY = 'dm2jk1m2k22' } = process.env;

module.exports.getHmac = (message) => {
  const hmac = crypto.createHmac('sha256', HMAC_KEY);
  return hmac.update(message).digest('hex');
};

module.exports.verifyPassword = (passwordToVerify, encryptedPassword) => {
  return module.exports.getHmac(passwordToVerify) === encryptedPassword;
};

module.exports.getZodiac = (str) => {
  const date = new Date(str);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const datecode = month * 100 + day; // this will give us a number represent month and day
  if (datecode <= 120) {
    // Jan 20
    return 'Capricorn';
  }
  if (datecode <= 219) {
    // Feb 19
    return 'Aquarius';
  }
  if (datecode <= 320) {
    // Mar 20
    return 'Pisces';
  }
  if (datecode <= 420) {
    // Apr 20
    return 'Aries';
  }
  if (datecode <= 520) {
    // May 20
    return 'Taurus';
  }
  if (datecode <= 621) {
    // Jun 21
    return 'Gemini';
  }
  if (datecode <= 722) {
    // Jul 22
    return 'Cancer';
  }
  if (datecode <= 822) {
    return 'Leo';
  }
  if (datecode <= 921) {
    // Sept 21
    return 'Virgo';
  }
  if (datecode <= 1022) {
    // Oct 22
    return 'Libra';
  }
  if (datecode <= 1121) {
    // Nov 21
    return 'Scorpio';
  }
  if (datecode <= 1221) {
    // Dec 21
    return 'Sagittarius';
  }
  // if we hit this case it means we hava greater date code than Dec 21
  return 'Capricorn';
};
