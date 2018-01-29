const express = require('express');
const router = express.Router();

const Crawler = require('../controllers/crawler_controller');

router.get('/I/want/title', (req, res) => {

  Crawler.fetchTitle(req)
    .then(data => {
      console.log('data: ', data);
      res.render('index', {
        title: 'CareAxiom test',
        data
      });
    })
    .catch(err => {
      res.render('index', {
        title: 'CareAxiom test',
        err
      });
    });
});

module.exports = router;
