const Mongoose = require("mongoose");
const dburl = "mongodb+srv://bhargavwd:iTPMxNonSejpyElV@mern9am.gfjwjcn.mongodb.net/?retryWrites=true&w=majority&appName=mern9am";

Mongoose.connect(dburl)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));