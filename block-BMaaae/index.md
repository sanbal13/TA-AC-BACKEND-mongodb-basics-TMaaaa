writeCode

Write code to:-

- create a database named `sports`.
 use sports

- list all databases present in local mongod server.
  show dbs

- create 3 collections named `cricket`, `football`, `TT` in sports databse.
db.createCollection("cricket");
db.createCollection("football");
db.createCollection("TT");

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
> db.TT.insert({name: "Sachin", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.TT.insert({name: "Rahul", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.TT.insert({name: "Azhar", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.cricket.insert({name: "Modi", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.cricket.insert({name: "Mamta", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.cricket.insert({name: "Yogi", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.football.insert({name: "India", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.football.insert({name: "Japan", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })
> db.football.insert({name: "Korea", age: 30, email: "sac@email", bid_price: 100});
WriteResult({ "nInserted" : 1 })


- list all collections in sports database.
  show collections;

- rename `TT` collection to `tennis`.
  db.TT.renameCollection('tennis');

- create a capped collection called `khokho` which should have max 3 documents.
db.createCollection('khokho', {capped: true, size: 1024, max: 3})
  Try inserting more than 3 and see what happens?
  The first record gets deleted

- check whether a collection is capped or not?
  db.khokho.isCapped();

- drop all documents from `football` collection.
  WriteResult({ "nRemoved" : 3 })

- delete cricket collection completely.
  > db.cricket.drop();

- delete sports database.
  db.dropDatabase();

- check which database you are connected to ?
  db

- connect to test database
  use test
