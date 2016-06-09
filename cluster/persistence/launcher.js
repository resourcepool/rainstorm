import Lokijs from 'lokijs';

const db = new Lokijs('launcher.json');
let collection = db.addCollection('launchers');

function getLaunchers() {
    return collection.data;
}

function getLauncher(id) {
    return collection.find({'id': {'$eq': id}});
}

function postLauncher(launcher) {
    return collection.insert(launcher);
}

function updateLauncher(launcher) {
    return collection.update(launcher);
}

function removeLauncher(id) {
    return collection.removeWhere({'id': {'$eq': id}});
}

export default {getLaunchers, getLauncher, postLauncher, updateLauncher, removeLauncher};
