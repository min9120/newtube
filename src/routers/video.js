import express from "express";
import { getEdit, postEdit, watch, upload, remove } from "../controllers/video";
const videoRouter = express.Router();

// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/delete", remove);
videoRouter.get("/upload", upload);
export default videoRouter;
