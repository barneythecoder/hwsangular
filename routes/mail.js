const express = require('express');
const router = express.Router();
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.post('./sendorder',(req, res, next)=>{
    console.log(req);
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
          personalizations: [
            {
              to: [
                {
                  email: 'rclaudeismael@gmail.com',
                },
              ],
              subject: 'ORDER: '+req.body.itemName,
            },
          ],
          from: {
            email: 'noreply@hwsugar.com',
          },
          content: [
            {
              type: 'text/plain',
              value: req.body.content,
            },
          ],
        },
      });

      sg.API(request, function(error, response) {
        if (error) {
          console.log('Error response received');
          console.log(request);
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
      });






});

module.exports = router;