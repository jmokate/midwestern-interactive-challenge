const express = require('express');
const router = express.Router();
const homeContentAccess = require('../utils/homeAccess');


//GET content

router.get('/', async (req, res) => {
    const content = await homeContentAccess.queryAllContent();
    res.send(messages);
})