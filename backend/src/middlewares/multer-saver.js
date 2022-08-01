const multer = require("multer");
const types = ["image/png", "image/jpeg", "image/jpg"];

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadFolder = req.headers.folder;
    cb(null, `uploads/${uploadFolder || "tmp"}`);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${
        file.originalname.split(".")[0]
      }-global-town-${Date.now()}${path.extname(file.originalname)}`
        .toLowerCase()
        .replace(/_/g, "-")
        .replace(" ", "-")
    );
  },
});

const fileFilter = (req, file, cb) => {
  console.log(1);
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
