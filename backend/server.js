import app from "./app.js"

app.listen(process.env.PORT,(err)=>{
  if(!err){
    console.log(`Server is running on the port : http://localhost:${process.env.PORT}`)
  }
  else{
    console.log(err)
  }
})