import express from "express";
import morgan from "morgan";
import video from "./routers/video";
import global from "./routers/global";
import user from "./routers/user";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/videos", video);
app.use("/user", user);
app.use("/", global);

const handleListening = () =>
  console.log(`server listenig on http://localhost:${PORT} 🚀 `);

app.listen(4000, handleListening);
