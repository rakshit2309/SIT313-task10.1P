// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post('/subscribe', (req, res) => {
//   const email = req.body.email;

//   var api_key = 'key-394bd83d7ed7eab598cbed157fd0f6c7'; 
//   var domain = 'sandboxc1d07afd5e8d4597bba293691f02e0c1.mailgun.org';

//   var mg = mailgun({ apiKey: api_key, domain: domain });

//   var data = {
//     from: 'Excited User <rakshit4880.be@chitkara.edu.in>',
//     to: email,
//     subject: 'Welcome to Deakin\'s Newsletter!',
//     text: `Hello,\n\nThank you for subscribing to Deakin's newsletter!\n\nBest regards,\nThe Deakin Team`
//   };

//   mg.messages().send(data, function (error, body) {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending email'); // Send an error response to the client.
//     } else {
//       console.log('Email sent:', body);
//       res.status(200).send('Email sent successfully'); // Send a success response to the client.
//     }
//   });
  
  
// });

// app.listen(5000, function () {
//   console.log("Server is running at port 5000");
// });






const express = require('express');
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();

app.use(cors()); // Use CORS middleware to enable cross-origin requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  var api_key = 'key-394bd83d7ed7eab598cbed157fd0f6c7'; 
  var domain = 'sandboxc1d07afd5e8d4597bba293691f02e0c1.mailgun.org';

  var mg = mailgun({ apiKey: api_key, domain: domain });

  var data = {
    from: 'Excited User <rakshit4880.be@chitkara.edu.in>',
    to: email,
    subject: 'Welcome to Deakin\'s Newsletter!',
    text: `Hello,\n\nThank you for subscribing to Deakin's newsletter!\n\nBest regards,\nThe Deakin Team`
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email'); // Send an error response to the client.
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent successfully'); // Send a success response to the client.
    }
  });
});

app.listen(5000, function () {
  console.log("Server is running at port 5000");
});
