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
    var sql = "INSERT INTO products (name, address) VALUES ?";
    var values = [
        ['Apple', '71'],
        ['Strawberry', ' 4'],
        ['Candy', '652'],
        ['Milk', '21'],
        ['Waffle', '345'],
        ['Chocolate', '2'],
        ['Cooky', '1'],
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("multiple records inserted:" + result.affectedRows);
    });
});