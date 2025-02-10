const sqlite= require('sqlite3')
const db= new sqlite.Database('event.db')
const createUserTable= `CREATE TABLE IF NOT EXISTS USER (ID INTEGER PRIMARY KEY AUTOINCREMENT,
NAME TEXT NOT NULL,
EMAIL TEXT UNIQUE NOT NULL,
PASSWORD TEXT NOT NULL,
ISADMIN INT)`

const createEventTable=`CREATE TABLE IF NOT EXISTS EVENT (ID INTEGER PRIMARY KEY AUTOINCREMENT,
VENUE TEXT NOT NULL,
NAME TEXT NOT NULL,
DATE TEXT NOT NULL,
QUANTITY INT NOT NULL)`

const createBookingTable =`CREATE TABLE IF NOT EXISTS BOOKING (ID INTEGER PRIMARY KEY AUTOINCREMENT,
USER_ID INT,
EVENT_ID INT,
FOREIGN KEY (USER_ID) REFERENCES USER(ID),
FOREIGN KEY (EVENT_ID) REFERENCES EVENT(ID))`

module.exports={db,createUserTable,createEventTable,createBookingTable}