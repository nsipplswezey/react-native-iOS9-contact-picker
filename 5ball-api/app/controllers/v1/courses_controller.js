module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Course = Nodal.require('app/models/course.js');

  class V1CoursesController extends Nodal.Controller {

    index() {

      Course.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Course.find(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Course.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Course.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Course.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1CoursesController;

})();
