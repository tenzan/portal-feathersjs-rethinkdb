'use strict';

// Initializes the `location` service on path `/locations`
const createService = require('feathers-rethinkdb');
const hooks = require('./location.hooks');
const filters = require('./location.filters');

module.exports = function() {
  const app = this;
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'locations',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/locations', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('locations');

  service.hooks(hooks);

  if(service.filter) {
    service.filter(filters);
  }
};
