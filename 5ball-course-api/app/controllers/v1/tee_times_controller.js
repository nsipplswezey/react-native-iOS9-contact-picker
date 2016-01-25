module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const TeeTime = Nodal.require('app/models/tee_time.js');

  class V1TeeTimesController extends Nodal.Controller {

    index() {



      TeeTime.query()
        .join('user')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ['id','user_id','teetime','created_at',{user: ['id','username','created_at']}]);

        });

    }

    show() {

      TeeTime.find(this.params.id, (err, model) => {

        this.respond(err || model, ['id','user_id','teetime','created_at',{user: ['id','username','created_at']}]);

      });

    }

    create() {

      TeeTime.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      TeeTime.update(this.params.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      TeeTime.destroy(this.params.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1TeeTimesController;

})();
