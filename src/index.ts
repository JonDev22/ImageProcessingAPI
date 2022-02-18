import express from 'express';
import logger from './middleware/logger';
import imageRoute from './utilities/routes/imageRoute';

const app = express();
const port = 3000;

app.get('/', logger, (req, res) => {
    res.send('Image processing API!');
});

app.use('/images', imageRoute);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;