var mysql = require('mysql2');

var drop = 'TABLE cars;'
var seedQuery = 'INSERT INTO cars (title, nick, avatar, about) VALUES ("Toyota Supra A80", "supra", "images/SupraA80.jpg", ""), ("GT-R R32", "gtr32", "images/R-32.jpg", "Компания Top Secret Japan, показала восстановленный R32, на шикарных дисках и с обвесом. Диффузоры, карнары, множество карбона и олдскульный вид не испорчен!");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'qwas233',
database: 'topsecret'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})