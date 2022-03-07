import "dotenv/config";
import express from "express";
import chalk from "chalk";
import userRouter from "./routers/user.js";
import taskRouter from "./routers/task.js";
import "./db/mongoose.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(chalk.yellow.bold.italic("Program Started on port " + port));
});
