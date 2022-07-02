import express from "express";

const app = express();
const PORT = 4000;
//server always listening about client request!
const handleListening = () =>
  console.log(`server listenig on http://localhost:${PORT} 🚀 `);
app.listen(4000, handleListening);
