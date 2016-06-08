import Lokijs from 'lokijs';

const db = new Lokijs('launcher.json');
let collection = db.addCollection('launchers');

function getLaunchers() {
    return collection.data;
}

function postLauncher(launcher) {
    collection.insert(launcher);
}

export default {getLaunchers, postLauncher};
