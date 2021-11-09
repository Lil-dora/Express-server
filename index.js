const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    try {
        res.send("Hello World")
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
})

