import Launcher from '../models/launcher';

export default class LauncherController {

    constructor(dao) {
        this.dao = dao;
    }

    getLaunchers(req, res) {
        res.json(this.dao.getLaunchers());
    }

    getLauncher(req, res) {
        res.json(this.dao.getLauncher(req.params.name));
    }

    updateLauncher(req, res) {
        let launcher = new Launcher(req.body.name, req.body.retaliationId, req.body.positions);
        this.dao.updateLauncher(launcher, req.params.name, function(err) {
            if(err) { throw err }
            res.json({message: 'Launcher updated.', data: launcher});
        });
    }

}
