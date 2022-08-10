const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/Library');
// const url = "mongodb://localhost:27017/Library";

const url = "mongodb+srv://rajeevc:rajeev321@cluster0.w68gpom.mongodb.net/libraryapp";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // part 2

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
