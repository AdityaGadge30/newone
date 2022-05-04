import mongoose from "mongoose";
const workSchema = new mongoose.Schema({
  description: {
      type: String,
  },
  image: {
    public_id: String,
    url: String,
  },

  owner: {
    type: String,
    ref: "User",
  },

  Work:{
    type:String
  },

  req_worker:{
    type: String,
    ref: "User",
      
  },
  
  request_worker: [
    {
      type: String,
      ref: "User",
    },
  ],
  
  createdAt: {
    type: Date,
    default: Date.now,
  },

  Time:{
      type:Date,
      default:Date.now(),
  },

  Location:{
      type:String,
  },

  Status:{
      type:Boolean,
      default:false
  },

});
let model = mongoose.model("Work", workSchema);
export default model