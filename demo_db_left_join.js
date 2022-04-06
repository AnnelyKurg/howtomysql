var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT customers.name AS user_name, products.name AS favorite FROM customers LEFT JOIN products ON customers.favourite_product = products.product_id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
