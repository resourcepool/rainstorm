import launcherDAO from '../persistence/launcher';
import Launcher from '../models/launcher';

function getLaunchers(req, res) {
    res.json(launcherDAO.getLaunchers());
}

function getLauncher(req, res) {
    res.json(launcherDAO.getLauncher(req.params.id));
}

function postLauncher(req, res) {
    let launcher = new Launcher(req.body.name);
    let create = launcherDAO.postLauncher(launcher);
    res.json({message: 'Launcher added.', data: create});
}

function updateLauncher(req, res) {
    let current = launcherDAO.getLauncher(req.params.name);
    current.name = req.body.name;
    current.positions = req.body.positions;
    let update = launcherDAO.updateLauncher(current);
    res.json({message: 'Launcher updated.', data: update});
}

function removeLauncher(req, res) {
    let remove = launcherDAO.removeLauncher(req.params.name);
    res.json({message: 'Launcher removed.', data: remove});
}

export default {getLaunchers, getLauncher, postLauncher, updateLauncher, removeLauncher};