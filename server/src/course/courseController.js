import path from "node:path";
import { fileURLToPath } from "node:url";
import cloudinary from "../config/cloudinary.js";
import courseModel from "./courseModel.js";
import createHttpError from "http-errors";
import fs from "node:fs";
import userModel from "../user/userModel.js";

const createCourse = async (req, res, next) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const { title, description, price } = req.body;

  const files = req.files;
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: "course-covers",
      format: coverImageMimeType,
    });

    const newCourse = await courseModel.create({
      title,
      description,
      price,
      student: req.userId,
      coverImage: uploadResult.secure_url,
    });

    // add the course ID to user's `courses` array
    await userModel.findByIdAndUpdate(
      req.userId,
      { $push: { courses: newCourse._id } },
      { new: true, useFindAndModify: false }
    );

    console.log(filePath);

    // delete temp files
    await fs.promises.access(filePath, fs.constants.F_OK); // Check if the file exists
    await fs.promises.unlink(filePath); // Delete the file

    res.status(201).json({ id: newCourse._id });
  } catch (error) {
    return next(createHttpError(500, "Error while uploading the file"));
  }
};

const listCourses = async (req, res, next) => {
  try {
    const courses = await courseModel
      .find({ student: req.userId })
      .populate("student","name");
    res.json(courses);
  } catch (error) {
    return next(createHttpError(500, "Error while getting courses"));
  }
};

export { createCourse, listCourses };
