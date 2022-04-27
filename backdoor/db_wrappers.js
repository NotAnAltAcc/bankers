const sqlite3 = require('sqlite3').verbose()


class Database {
    constructor(dbfile) {
        this.db = new sqlite3.Database(dbfile);
    }

    init () {
        // Create Tables Here
    }

    createUser (username, password) {
        // Create User Here
    }

    getUser (username) {
        // Get User Information, balances, transactions
    }

    createTransaction(to, from, amount) {
        // Create Transaction, move funds
    }

    getTransaction(user) {
        // Get Transaction Information
    }
}


module.exports = Database;