var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ProductEpiSchema = new Schema({
  name: String,
});

var ProductEpi = mongoose.model("ProductEpi", ProductEpiSchema)
module.exports = ProductEpi