import express from 'express';
import logger from '../../middleware/logger'
import imageSharp from '../imageSharp';
import { promises } from 'fs';

const imageRoute = express.Router();

imageRoute.get('/', logger, async (req, res): Promise<void> => {
    try {

        const fileName = req.query.filename as string;
        const widhtParam = req.query.width as string;
        const heightParam = req.query.height as string;

        let width: number;
        let height: number;

        (heightParam != null)
            ? height = parseInt(heightParam)
            : height = 200;

        (widhtParam != null)
            ? width = parseInt(widhtParam)
            : width = 200;

        const targetFileName = `${fileName}_${width}_${height}.jpeg`;
        const rootFile = 'images/thumbs';
        const fullFileName = rootFile + '/' + targetFileName;

        await promises.mkdir(rootFile, { recursive: true });

        await imageSharp(fileName, fullFileName, width, height);

        res.sendFile(targetFileName, { root: rootFile });

    } catch {
        res.send('Error occured! Image not found!');
    }
})

export default imageRoute;