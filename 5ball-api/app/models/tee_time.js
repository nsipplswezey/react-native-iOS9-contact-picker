module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const CourseUser = Nodal.require('app/models/user.js');

  class TeeTime extends Nodal.Model {}

  TeeTime.setDatabase(Nodal.require('db/main.js'));
  TeeTime.setSchema(Nodal.my.Schema.models.TeeTime);

  TeeTime.joinsTo(CourseUser, {multiple:true}); //Rails: has_many and belongs_to
  //stricy bottom up joins. Parent ID in child table. Course_User ID in Tee_Time. Never the other way around.

  TeeTime.validates('teetime', 'must be a future date', v => Date.parse(v) > Date.now());

  return TeeTime;

})();
