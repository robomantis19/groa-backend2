const express = require('express');
const helmet = require('helmet');
const cors = require('cors'); 

const authRouter = require('../auth/auth-router'); 
const usersRouter = require('../users/users-router'); 

const server = express(); 

server.use(helmet()); 
server.use(express.json()); 
server.use(cors()); 

server.use('/api', authRouter); 
server.use('/api/profile', usersRouter); 

server.get('/', (req, res) => { 
    res.send('Saltiest Server is starting');
})
module.exports = server; 