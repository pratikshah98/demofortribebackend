const mongoose=require('../dbconnection');
const userschema= mongoose.Schema({
"eid":Number,
"name":String,
"email":{
    type:String,
    required:true

},
"password":String

});
module.exports=mongoose.model('users',userschema);
