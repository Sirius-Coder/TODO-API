// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return  console.log('Unable to Connect to A MongoDB server');
  }
  console.log('Connected to the MongoDb Server');

const db=client.db('TodoApp');

db.collection('Todos').deleteMany({text:'Going to lunch'}).then((result)=>{
  console.log(result); 
})

  client.close();
});
