const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
app.use(cors());
const randomUserRoute = require("./routes/v1/random.user.route.js");
const getAllUser = require("./routes/v1/random.user.route.js");
const errorHandler = require("./middleware/errorHandler");
app.use(express.json());



dbConnect()

app.use("/Get/user", randomUserRoute);


app.get('/', (req, res) => {
    res.send('running genuse server')
})

app.all("*", (req, res) => {
    res.send("NO route found.");
  });
  
 
app.use(errorHandler)
//Listen Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});