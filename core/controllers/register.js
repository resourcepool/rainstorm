import userDAO from '../persistence/user';
import launcherDAO from '../persistence/launcher';
import User from '../models/user';
import Launcher from '../models/launcher';

function postRegister(req, res) {

    let users = req.body.users;
    let launchers = req.body.launchers;

    users.forEach(user => {
        
    });

}

export default {postRegister};