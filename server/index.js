const express = require('express');
const next = require('next');
    
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const pgAccess = require('../utils/dbConnect.js');
const homeContentAccess = require('../utils/homeAccess');
    
app.prepare()
.then(() => {
  const server = express()

  server.get('/api/test', (req, res) => {
    return res.end('hello!')
  });
    
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  pgAccess.connectToDb();
  homeContentAccess.queryAllContent();

  //ROUTES
  // const homeContentRoute = require('../routes/homeRoute');
  // app.use('/api/home', homeContentRoute);
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})