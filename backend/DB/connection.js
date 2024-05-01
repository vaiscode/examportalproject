const mongoose = require ('mongoose');

mongoose.connect(process.env.mongodb_url).then(()=>{
    console.log("DB is connected");
})
.catch((err)=>{
    console.log("Error");
})