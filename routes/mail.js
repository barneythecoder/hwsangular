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
      from: 'testing@' + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
      subject: 'NEW Order FROM: '+req.body.customerName,
      html:'<html><body><p>Item: '+req.body.itemName
      +'<br/>Customer Name: '+req.body.customerName
      +'<br/>Customer Address: '+req.body.customerAddress
      +'Customer Phone Number: '+req.body.customerNumber+'</p></body></html>'
    },
    recipients: [
      {address: 'rclaudeismael@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
    res.send(err);
  });

   
});

module.exports = router;