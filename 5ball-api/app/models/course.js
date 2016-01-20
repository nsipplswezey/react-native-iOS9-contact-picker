module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Course extends Nodal.Model {}

  Course.setDatabase(Nodal.require('db/main.js'));
  Course.setSchema(Nodal.my.Schema.models.Course);

  return Course;

})();
