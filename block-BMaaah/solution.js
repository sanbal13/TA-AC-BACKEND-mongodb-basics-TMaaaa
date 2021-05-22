1. use blog;
2. db.createCollection('articles');
3. db.articles.insert(articles);
4. db.articles.find();
5. db.articles.find({_id:ObjectId("60a80928bee736a534b6e748") });
6. db.articles.find({title: "Geology" });
7. db.articles.find({'author.name': "Preet Kadam" });
8. db.articles.find({tags: 'article'})
9. db.articles.update({_id : ObjectId("60a80928bee736a534b6e748")},{$set: {title: "MongoDB Database"}});
10. db.articles.update({title:"Politics"}, {$set: {'author.name': 'Kumar S Gandhi'}});
11. db.articles.updateMany({}, {$rename: {'details': 'description'}});
12. db.articles.update({"title": "Game"}, {$push: {tags: "Game"}});
13. Without set  the data is completely replaced
    with set only the particular field is updated.
14. db.articles.remove({"_id" : ObjectId("60a80928bee736a534b6e748")});
    
// Sports Database
db.users.find({gender: "male", sports: "cricket"});
db.users.update({name: 'Steve Ortega'}, {$push: {sports: 'golf'}});
db.users.find({$or: [{sports: "football"},{sports: "cricket"}]})
db.users.find({name: {$regex: 'ri'}}); 
