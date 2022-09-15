const express = require("express");
require("./config/dotenv")();
require("./config/sequelize");

const app = express();
const port = process.env.PORT;
const cors = require("cors");
const routes = require("./routes/routes");
const passport = require("passport");
require('./middlewares/jwtPassport')(passport);
app.use(passport.initialize());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(
    `${process.env.APP_NAME} app listening at http://localhost:${port}`
  );
});
