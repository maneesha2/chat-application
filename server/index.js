const express = require("express");
const router = express();
const http = require("http");
const path = require('path')
var PORT = process.env.PORT || 5000

const server = http.createServer(router);

router.use('/client',express.static(path.resolve(__dirname,'client')))

const rooms = {}

router.get('/',(req,res)=>{
  res.send('Index');
})

server.listen(PORT, () => {
  console.log("server listening at",PORT)
});