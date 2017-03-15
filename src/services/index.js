'use strict';

const location = require('./location/location.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(location);
};
