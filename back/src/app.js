const express = require('express');
require('./config/dotenv')();
require('./config/sequelize');
require('./config/auth');

const passport = require('passport');
require('./middlewares/jwtPassport')(passport);


const app = express();
const port = process.env.PORT;
//const cors = require('cors');
const routes = require('./routes/routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
