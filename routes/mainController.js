const router = require('express').Router();

const sendEmail = require('./sendMail');

router.get('/', (req, res) => {
  res.send('<h1>Main Page</h1>');
});

router.post('/', async (req, res, next) => {
  try {
    const { email, html } = req.body;
    const result = await sendEmail(email, 'New Reservation Inquiry!', html);
    res.send(result);
  } catch (error) {
    next({ code: 500, message: error.message });
  }
});

module.exports = router;
