import express from "express";
import { join, login } from "../controllers/user";
import { trending, search } from "../controllers/video";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
