import mongoose from "mongoose"

export const dbConnection=()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"tabletrek"
  }).then(()=>{
    console.log("Connected to MONGODB database successfully")
  }).catch(err =>{
    console.log(err)
  })
}