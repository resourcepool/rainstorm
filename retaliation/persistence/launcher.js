import fileAsync from 'lowdb/lib/file-async';
import low from 'lowdb';
let launcherDir = './db/launchers.json';
let collection = 'launchers';
let db = low(launcherDir, {storage: fileAsync});

function getLaunchers() {
    return db.get(collection).value();
}

function updateLauncher(launcher) {
    db.get(collection).filter({name: launcher.getName()}).assign(launcher).value();
    return db.get(collection).filter({name: launcher.getName()});
}

function removeLauncher(name) {
    let deleted = db.get(collection).find({name: name}).value();
    db.get(collection).remove({name: name}).value();
    return deleted;
}

export default {getLaunchers, updateLauncher, removeLauncher};
