import Lokijs from 'lokijs';

const db = new Lokijs('launcher.json');
const collection = db.addCollection('launchers');

function getLaunchers() {
  return collection.data;
}

function getLauncher(name) {
  return collection.find({'name': {'$eq': name}});
}

function updateLauncher(launcher, name, cb) {
  //TODO: update launcher using launcher dispatcher
  return collection.find({'name': {'$eq': name}});
}

export default {getLaunchers, getLauncher, updateLauncher};
