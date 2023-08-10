import express, {Express} from "express";
import {upload, handleUploadImage} from '../controllers/file'
import path from "path";
export const setupFileRoutes = (app:Express):void => {
    const router = express.Router();

    router.post('/image/:id', upload.single('file'), handleUploadImage)

    app.use('/uploads', router)
}