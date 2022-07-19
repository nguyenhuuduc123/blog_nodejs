const mongoose = require('mongoose');
const schema = mongoose.Schema;


const course = new schema({
  name: {type : String, maxLength : 255},
  decription: {type : String,maxLength : 600},
  image: {type : String,maxLength : 255},
  createdAt : {type : Date, default : Date.Now},
  updateAt : {type : Date, default : Date.Now}
});


module.exports = mongoose.model('course',course);