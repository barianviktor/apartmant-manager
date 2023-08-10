import multer from 'multer'
import { HttpStatusCodes } from '../utils/http-status-codes';
import { Request, Response } from "express";
import path from 'path';
const fs = require('fs');
import {v4} from 'uuid'
import { Image } from '../models/image';
const folderName = "uploads"

const uploadsDir = path.join( `src/${folderName}/`);

interface MulterRequest extends Request {
  file: any;
}
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Specify the destination folder
  },
  filename: (req, file, cb) => {
    file.originalname = v4() + '-' + file.originalname
    cb(null, file.originalname);
  }
});

export const upload = multer({ storage: storage });



export const handleUploadImage = async (req: MulterRequest, res: Response) => {
    const userId = req.params.id
    const filePath = req.file.originalname;
    const fullPath = folderName + '/' + filePath;
    const image = await Image.create({
      path:fullPath,
      uploader:userId
    });
    const responseImage = await image.getResponseImage()
    res.status(HttpStatusCodes.OK).send(responseImage);
  };