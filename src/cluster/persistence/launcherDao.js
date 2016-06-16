import Lokijs from 'lokijs';
import LauncherDispatcher from '../dispatcher/launcher';

const db = new Lokijs('launcher.json');
const collection = db.addCollection('launchers');
const launcherDispatcher = new LauncherDispatcher;

export default class LauncherDao {

    getLaunchers() {
        return collection.data;
    }

    getLauncher(name) {
        return collection.find({'name': {'$eq': name}});
    }

    updateLauncher(launcher, name, cb) {
        launcherDispatcher.updateLauncher(launcher, name, function (err, res) {
            if(err) {
                throw err;
            }
            if(res.status != 200) {
                throw new Error(res.message, res.status);
            }
            collection.find({'name': {'$eq': name}}).update(function (obj) {
                obj.name = launcher.name;
                obj.position = launcher.position;
            });
        });
    }

}
