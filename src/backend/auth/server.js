require("dotenv").config({path: "./config.env"});
const bodyParser=require('body-parser')
const cors=require('cors')
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error")

connectDB();
const app = express();
app.use(cors())
app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/private", require("./routes/private"));

app.use(errorHandler);
const PORT = 4000 || process.env.PORT ;
 
const server = app.listen(PORT, () => console.log("running on port " + PORT));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));     // Close server & exit process
})