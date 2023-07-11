require("dotenv").config();
const path =require("path");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./model/dataSchema')

app.use(express.json());
app.use(cors());

// mongoose.connect('mongodb://127.0.0.1:27017/reactdata', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://lingagranites:lingadevi%402017@lingadb.aogfi7w.mongodb.net/LGDB', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb+srv://lingagranites:lingadevi%402017@lingadb.aogfi7w.mongodb.net/LGDB?retryWrites=true&w=majority', { useNewUrlParser: true });

// mongoose.connect('mongodb+srv://lingagranites:lingadevi%402017@lingadb.aogfi7w.mongodb.net/LGDB?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// mongoose.connect('mongodb+srv://lingagranites:lingadevi%402017@lingadb.aogfi7w.mongodb.net/LGDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
   mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.log('Error connecting to MongoDB Atlas:', error));

app.post('/insert', async(req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const message = req.body.message;

    const formData = new User({
       name : name,
       number : number,
       email : email,
       message : message
    })

    formData.save()
    .then(() => {
      res.status(200).json({ message: 'Form data saved successfully' });
      console.log(formData);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error saving form data' });
      console.log(error);
    });
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${port}`);
})


// const dev_db_url =
//   "mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";
// const mongoDB = process.env.MONGODB_URI || dev_db_url;

// Replace the line with the following code that uses process.env.MONGODB_URI 
// to get the connection string from an environment variable named MONGODB_URI 
// if has been set (use your own database URL instead of the placeholder below).