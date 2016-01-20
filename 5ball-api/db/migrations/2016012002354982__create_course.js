module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateCourse extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016012002354982;
    }

    up() {

      return [
        this.createTable("courses", [{"name":"course_id","type":"int"},{"name":"name","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("courses")
      ];

    }

  }

  return CreateCourse;

})();
