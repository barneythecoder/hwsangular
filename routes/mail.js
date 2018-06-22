const express = require('express');
const router = express.Router();
router.post('/sendorder',(req, res, next)=>{
    const sgMail = require('@sendgrid/mail');
    console.log(req+" "+sgMail);
    sgMail.setApiKey('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');
    const msg = {
      to: 'rclaudeismael@gmail.com',
      from: 'orders@hwsugar.com',
      subject: 'ORDER FROM: '+req.body.customerName,
      text: 'Customer Name: '+req.body.customerName
        +" Customer Address: "+req.body.customerAddress
        +" Customer Number: "+req.body.customerNumber
        +" Order Item: "+req.body.itemName,
      html: 'Customer Name: '+req.body.customerName
      +" <br/>Customer Address: "+req.body.customerAddress
      +" <br/>Customer Number: "+req.body.customerNumber
      +" <br/>Order Item: "+req.body.itemName,
    };
    sgMail.send(msg, (error, result)=>{
      if (error) {
        console.log(error);
      }
      else {
        res.send(result);
      }
    });
    console.log("res: "+res);
   
});

module.exports = router;