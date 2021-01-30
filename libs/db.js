var mysql = require('mysql2')
var psProxy = require('planetscale-proxy')

class database {
    constructor(branch) {
        console.log('init')
        var db = process.env.PSDB_DB_NAME.split('/')
        var pass = psProxy.dbPass('test')
        psProxy.startProxy('test')
        this.pool = mysql.createConnection({
            host: 'localhost',
            port: 3307,
            user: 'root',
            password: pass,
            database: db[1],
        })
        this.pool.connect()
    }
}

module.exports = new database('test')
