import mysql2 from "mysql2";

const db = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "donato2023",
    database: "paginamama",
});
export default db;
