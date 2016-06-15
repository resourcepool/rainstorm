'use strict';
import Launcher from '../../core/models/launcher';
import fileAsync from 'lowdb/lib/file-async';
import low from 'lowdb';
import faker from 'faker';
let launcherDir = './db/launchers.json';
let collection = 'launchers';

let db = low(launcherDir, {storage: fileAsync});

function getLaunchers() {
  return db.get(collection).value();
}

function postLauncher(device) {
  let launcher = new Launcher(findNewName());
  launcher.usb = device;
  db.get(collection).push(launcher).value();
  return db.set(collection, getLaunchers()).value();
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

function findNewName() {
  let newName = faker.name.firstName();
  while (db.get(collection).filter({name: newName}).value().length > 0) {
    newName = faker.name.firstName();
  }
  return newName;
}

export default {getLaunchers, postLauncher, updateLauncher, removeLauncher};
