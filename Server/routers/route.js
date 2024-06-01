import express from "express";
import { addUser, getUser } from "../controller/user-controller.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { getMessage, newMessage } from "../controller/message-controller.js";
import { getImage, uploadFile } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.route("/add").post(addUser);
route.route("/get").get(getUser);
route.route("/conversation/add").post(newConversation);
route.route("/conversation/get").post(getConversation);
route.route("/message/add").post(newMessage);
route.route("/message/get/:id").get(getMessage);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

export default route;
