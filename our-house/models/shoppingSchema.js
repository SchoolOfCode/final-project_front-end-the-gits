import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema to create object and specify type of data. Moongoose.schema is an inbuilt function.

const shoppingSchema = new Schema({
  username: {
    type: String
  },
  item: {
    type: String
  },
  shoppingListName: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  sub: {
    type: String,
    required: true
  }
  
}, { timestamps: true} )

export default mongoose.model('Shopping', shoppingSchema)