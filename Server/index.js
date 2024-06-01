import express from "express";
import Connection from "./database/db.js";
import route from "./routers/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

app.listen(5000, () => {
  console.log("Server is running successfully on port 5000");
});
