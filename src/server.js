const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter.js");
const userRouter = require("./routes/userRouter.js");
const episodeRouter = require("./routes/episodeRouter.js");
const app = express();

//* Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/episode", episodeRouter);


module.exports = app;