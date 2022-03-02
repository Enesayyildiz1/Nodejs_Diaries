var mysql=require("mysql");

var connection=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        pass:"",
        database:"databasewithnodejs"
    }
);

connection.connect((err)=>
{
    if(err) throw err;

    var query= "ALTER TABLE students ADD COLUMN tcno CHAR(11)";
    connection.query(query,(err)=>
    {
        if(err) throw err;
        console.log("Column has added")
    })
    //TABLO OLUŞTURMA
    /*var query="CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), surname VARCHAR(30), birth_date DATE, phone_number VARCHAR(40))";
    connection.query(query,(err)=>
    { 
        if(err) throw(err);
        console.log("Table has created");
    })*/

    //Database oluşturma
    /*var query= "CREATE DATABASE databasewithnodejs";
    connection.query(query, (err) =>
    {
        if(err) throw(err);
        console.log("Database created");
    })*/
    console.log("Tamamke");
})