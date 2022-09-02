const app = require('express')()
const cors = require('cors')
require('dotenv').config()
const { Client } = require('pg')

const PORT = 5003; // The port we want to connect to

app.use(cors()); //Telling express to use the cors middleware

app.get('/', async (req,res)=>{ //Listen to a get request
    const client = new Client()
    await client.connect()

    const data = await client.query("SELECT * FROM devices")
    res.send(data.rows)
    await client.end()
})

app.listen(PORT, ()=>{ //listen to the port we chose above
    //print to the console that the server is listening
    console.log("listening to port: " + PORT);
})