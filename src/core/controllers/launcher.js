'use strict';

import Launcher from '../models/launcher';

module.exports = (dao) => {

  return {
    getLaunchers:(req, res) => {
      res.json(dao.getLaunchers());
    },

    getLauncher: (req, res) => {
      res.json(dao.getLauncher(req.params.name));
    },

    updateLauncher: (req, res) => {
      let launcher = new Launcher(req.body.name, req.body.rainstormId, req.body.positions);
      dao.updateLauncher(launcher, req.params.name, function(err) {
        if (err) {
          throw err;
        }
        res.json({message: 'Launcher updated.', data: launcher});
      });
    }
  };

};
