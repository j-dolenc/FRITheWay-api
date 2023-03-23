import { Schema, model, connect } from "mongoose";
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const dbUrl = process.env.MONGODB_URL;
try {
    mongoose.connect(
        dbUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      );
    console.log("Connected to DB");
} catch (error) {
    
}

