const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://nandanaworkprofile:NANdiv2004ayaanmuh@cluster0.adhrhgt.mongodb.net/projectdb') 
  
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
