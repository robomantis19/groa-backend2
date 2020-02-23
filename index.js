const server = require('./api/server'); 
const fs = require('fs'); 
const csv = require('csv-parser');

const port = process.env.PORT || 4000; 
server.listen(port, () => console.log(`Saltiest server starting on port ${port}`))