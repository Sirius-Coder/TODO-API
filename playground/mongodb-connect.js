// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return  console.log('Unable to Connect to A MongoDB server');
  }
  console.log('Connected to the MongoDb Server');

const db=client.db('TodoApp');

// db.collection('Todos').insertOne({
//   text:'Something to Do',
//   completed:false
// },(err,result)=>{
//   if(err)
//   {
//     return console.log('Unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// })

// db.collection('Users').insertOne({
//   name:'Saumitra Kumar',
//   age:20,
//   location:'221-B baker street london'
// },(err,result)=>{
//   if(err)
//   {
//     return console.log('Unable to insert todo',err);
//
//   }
//   console.log(JSON.stringify(result.ops));
// })


  client.close();
});
