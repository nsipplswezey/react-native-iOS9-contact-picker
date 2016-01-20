module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTeeTime extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016012006134353;
    }

    up() {

      return [
        this.createTable("tee_times", [{"name":"user_id","type":"int"},{"name":"teetime","type":"datetime"}])
      ];

    }

    down() {

      return [
        this.dropTable("tee_times")
      ];

    }

  }

  return CreateTeeTime;

})();
