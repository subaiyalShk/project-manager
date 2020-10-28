const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/newdb",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})

.then(()=>{
    console.log("Established a connection")
})
.catch(()=> {
    console.log("There has been an error")
})

