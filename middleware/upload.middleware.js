// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../config/cloud.js";


// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "teacher_contents", 
//     resource_type: "auto", 
//     allowed_formats: [
//       "jpg", "jpeg", "png",
//       "pdf", "doc", "docx",
//       "ppt", "pptx", "txt"
//     ],
//     access_mode: "public",
//   },
// });


// export const upload = multer({
//   storage,
//   limits: { fileSize: 20 * 1024 * 1024 }, 
// });
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloud.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "teacher_contents",
      resource_type: "auto",
      access_mode: "public", // ✅ ensures the file is accessible publicly
      allowed_formats: [
        "jpg", "jpeg", "png",
        "pdf", "doc", "docx",
        "ppt", "pptx", "txt",
      ],
      public_id: file.originalname.split(".")[0], // optional but neat
    };
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
});
