import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.vljpmj4.mongodb.net/`;

const storage = new GridFsStorage({
  url: URL,

  options: { useUnifiedTopology: true},

  file: (req, file) => {
    console.log(file);
    const match = ["image/png", "image/jpg"];
    if (match.includes(file.mimeType)) {
      return `${Date.now()}-file-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
