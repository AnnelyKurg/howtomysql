var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Sheldon', 'Green Village 12')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("A record inserted, ID: " + result.insertId);
    });
});