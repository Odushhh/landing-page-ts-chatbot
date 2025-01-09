const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'adrianoduma8@gmail.com', // Your email
    pass: 'Twenni21!', // Your email password or app password
    
  },
});

// Specify the email address to receive notifications
const notificationEmail = 'adrianoduma8@gmail.com'; // Replace with the desired email address

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'adrianoduma8@gmail.com',
    to: notificationEmail, // Send notification to this email address
    subject: 'New Waitlist Signup',
    text: `A new user has signed up for the waitlist: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send(error.toString());
    }
    console.error("Email sent:", info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 