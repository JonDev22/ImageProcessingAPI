import express from 'express';
import logger from './middleware/logger';

const app = express();
const port = 3000;

app.get('/', logger, (req, res) => {
    res.send('Endpoint');
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;