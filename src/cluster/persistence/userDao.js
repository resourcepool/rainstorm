import Lokijs from 'lokijs';

const db = new Lokijs('user.json');
let collection = db.addCollection('users');

export default class UserDao {

    getUsers() {
        return collection.data;
    }

    getUser(name) {
        return collection.find({'name': {'$eq': name}});
    }

    postUser(user) {
        // Create user in clientS
        // TODO
        // if success create user in cluster and return result
        collection.insert(user);
        // else throw error
        return null;
    }

    updateUser(user) {
        // Update user in clientS
        // TODO
        // if success update user in cluster and return result
        // TODO
        // else throw error
        return null;
    }

    removeUser(name) {
        // Remove user in clientS
        // TODO
        // if success remove user in cluster and return result (id)
        collection.removeWhere({'name': {'$eq': name}});
        // else throw error
        return null;
    }

}