import mongoose from "mongoose"
import validator from "validator" //for email

//build schema
const reservationSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minLength:[3,"First name must contain atleast 3 characters!"],
    maxLength:[30,"First name cannot exceed 30 characters!"],
  },
  lastName:{
    type:String,
    required:true,
    minLength:[3,"Last name must contain atleast 3 characters!"],
    maxLength:[30,"Last name cannot exceed 30 characters!"],
  },
  email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"Please enter a valid email!"]
  },
  phone:{
    type:String,
    required:true,
    minLength:[10,"Phone number must contain atleast 10 digits!"],
    maxLength:[10,"Phone number cannot exceed 10 digits!"],
  },
  time:{
    type:String,
    required:true,
  },
  date:{
    type:String,
    required:true,
  }
})
//compile schema
const Reservation = mongoose.model("Reservation",reservationSchema)
export default Reservation; //export the model