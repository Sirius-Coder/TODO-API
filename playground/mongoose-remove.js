const {ObjectID}=require('mongodb')

var {mongoose}=require('./../server/db/mongoose.js')


var {Todo}=require('./../server/models/todo')
var {User}=require('./../server/models/user')
// 
// Todo.remove({}).then((result)=>{
//   console.log(result);
// })

Todo.findByIdAndRemove('5d5569562eb68f333c4e2391').then((todo)=>{
  console.log(todo);
});
