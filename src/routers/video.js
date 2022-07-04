import express from "express";
import { edit, watch, upload, remove } from "../controllers/video";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get(`/:id(\\d+)`, watch);
videoRouter.get("/:id(\\d+)/delete", remove);
videoRouter.get("/upload", upload); // upload가 가장 먼저 와있어야 하는 건 :id 밑에 선언돼면 express가 또:id 가 올 줄 알고 url의 upload를 변수로 생각함
//근데 정규식으로 id 에 숫자만 오도록 해놨으니 upload를 맨 밑으로 내려도 됨.
export default videoRouter;
