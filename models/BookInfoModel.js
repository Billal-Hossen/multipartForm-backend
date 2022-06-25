const {Schema, model} =require("mongoose");
const BookInfoSchema = Schema({
  userName:{type:String},
  tickectPrice:{type:String},
  userGender:{type:String},
  locationForm:{type:String},
  locationTo:{type:String},
  selectDate:{type:String},
  selectTime:{type:String},
});

module.exports.BooksInfo= model("BooksInfo",BookInfoSchema)