const express = require('express');
const app = express();
const logger = require('morgan');

require('dotenv').config();

const port = process.argv[2] || process.env.PORT || 8000;

const mainRouter = require('./routes/mainController');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/mail', mainRouter);

// catch 404 and forward to error handler
app.use(async (req, res, next) => {
  next({ code: 404, message: 'Sayfa bulunamadı' });
});
// error handler
app.use(async (err, req, res, next) => {
  console.log(err);
  const { code, status, message } = err;
  const xcode = code || status || 500;
  res.status(xcode).send({ code: xcode, message });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
