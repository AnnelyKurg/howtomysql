var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (favourite_product) VALUES ?";
    var values = [
        ['4'],
        ['21'],
        ['652'],
        ['345'],
        ['71'],
        ['1'],
        ['2'],

    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("multiple records inserted:" + result.affectedRows);
    });
});