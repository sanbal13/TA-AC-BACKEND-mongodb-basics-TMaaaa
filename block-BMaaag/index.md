writeCode

Write code to:-

- create a database named `mountains`  
  ## `use mountains`
- a collection inside that database named `himalayas`  
  ## `db.createCollection(`himalayas`)`
- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`  
  ##  `db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'});`
- insert multiple document using insertMany command    
   ## db.himalayas.insertMany([
   ##   {name: 'Pir Panjal Range ', height: '5000 mtrs'},
   ##   {name: 'Churia Range', height: '2000 mtrs'},
   ##   {name: 'Zanskar Range', height: '6000 mtrs'},
   ##   {name: 'Ladakh Range', height: '6000 mtrs'}
   ## ]);
- find all documents from mountains  
  ## `db.mountains.find();`

- find a single document using name  
  ## `db.himalayas.find({name: 'Ladakh Range'});`
