const express = require('express');
const helmet = require('helmet');
const cors = require('cors'); 
const bp = require('body-parser');

const authRouter = require('../auth/auth-router'); 
const usersRouter = require('../users/users-router'); 
const fileUpload = require('express-fileupload');
const server = express(); 

const fs = require('fs'); 
const csv = require('csv-parser');

server.use(fileUpload({parseNested: true}))
server.use(helmet()); 
server.use(cors());
server.use(express.json()); 
// server.use(bp.json({type: '*/*'}))



server.use('/api', authRouter); 
server.use('/api/users', usersRouter); 

server.get('/', (req, res) => { 
    res.send('Saltiest Server is starting');
})
module.exports = server; 