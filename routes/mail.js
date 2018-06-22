const express = require('express');
const router = express.Router();
router.post('/sendorder',(req, res, next)=>{
  'use strict';

var SparkPost = require('sparkpost');
var sparky = new SparkPost(); // uses process.env.SPARKPOST_API_KEY

sparky.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: 'orders@hwsugar.ph', // 'testing@sparkpostbox.com'
      subject: 'Oh hey!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'rclaudeismael@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

   
});

module.exports = router;