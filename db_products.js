var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE products (name VARCHAR(255), product_id INT NOT NULL PRIMARY KEY)";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});