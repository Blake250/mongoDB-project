
// This is an example of a JSon which contains information about a John Doe

{
  name : "John Doe";
  age : 21;
  email : "john@gmail.com";
  isSubscribed : true;
  address : {
    street: "123 Main Street";
    city : "Downtown";
    zipcode: 12345
  };
  hobbies: ["reading", "traveling", "swimming"]
  
  }
  
  // CRUD are operations which  involves interacting with documents in collections and it  consist of  (Create,Read,Update,Delete) operations
  
  //First of all  i am going to start with a Create operation
  // where i will insert different document into the dataScript collection
  db.dataScript.insertMany([
    {name: "christian"},
    {course : "fullstack Developer"},
    {age : 30},
    {hobbies : ["reading", "swimming", "football"]}
    
  ],
  { student: true,
    grade : "A",
    institution: "Intellipaat",
    level: "advanced Learner"
  
  },
  
  
  
  )
  
  // secondly is the UPDATE operation where i will update a  single doc in my collection
  db.dataScript.updateOne(
    {course: "fullstack Developer"},
    {$set:{Field : "Devops Engineer"}}
  )
  
  // in situation where you intend to update more that one documents 
  
  db.dataScript.updateMany(
  {},
  {$push:{hobbies:["painting", "wrestling", "boxing"]}}
  
  )
  
  // in situation  where you want to find a single doc in your collection
  // use this method
  db.dataScript.findOne({name: "christian"})
  
  // in situation where you intend to conduct a search on all the docs
  
  db.dataScript.find({})
  
  // in situation where you want to delete a specific filed
  db.dataScript.deleteOne({age: 30})
  
  // while in situation where you intend delete many docs use the
  db.dataScript.deleteMany({})
  
  
  // To export a collection from  a database is carried out in this format
  // first of all you create a backup folder locally in your computer
  // then carry out this command mongodump --db database name --collection the collection name 
  // mongodump --db test --collection dataScript
   
   
   // while exporting use the this command 
   // mongorestore --db test --collection dataScript C:\Users\USER\Videos\Captures\newBackUp\dump\test\dataScript.bson
   // mongorestore --db database name --collection the collection name backup file path directory
   
  