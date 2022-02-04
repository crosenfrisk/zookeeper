
const path = require('path');
const router = require('express').Router();

// route for index.html page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// route for animals.html page
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

// route for zookeepers.html page
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
  });

// wildcard route for obscure requests
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;