const express = require('express');
const next = require('next');  
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const pgAccess = require('../utils/dbConnect.js');
const homeContentAccess = require('../utils/homeAccess.js');
    
app.prepare()
.then(() => {
  const server = express()

  server.use(express.json());
  server.use(express.urlencoded({extended: false}));

  server.post('/api/home', async (req, res) => {
    const {data} = req.body
    console.log('i got a POST')
    console.log('SERVER POST ONE', data)
    // let mappedData = req.body.data.map(obj => {
    //   obj.id = req.body.data.id,
    //   obj.page_id = req.body.data.page_id
    // })
    // console.log('this is mapped data', mappedData)

    await homeContentAccess.postAllContent(req.body)
    
  });

  server.get('/api/test', (req, res) => {
    return res.end('hello!')
  });
    
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  pgAccess.connectToDb();
  homeContentAccess.queryAllContent();

  //ROUTES
  const homeContentRoute = require('../routes/homeRoute');
  //app.use('/api/home', homeContentRoute);
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})