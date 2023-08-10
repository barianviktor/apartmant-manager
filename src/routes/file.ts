import express, {Express} from "express";

export const setupFileRoutes = (app:Express):void => {
    const router = express.Router();
    

    app.use('/file', router)
}