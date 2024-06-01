import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:5000";

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

export const uploadFile = async (req, res) => {
  console.log("file ka name ", req.file);
  if (!req.file) {
    return res.status(404).json("file not found");
  }
  const imgUrl = `${url}/file/${req.file.filename}`;
  console.log("imgUrl", imgUrl);

  return res.status(200).json(imgUrl);
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ msg : error });
  }
};
