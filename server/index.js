// Local development only. On Vercel, api/contact.js is deployed as a function.
import 'dotenv/config';
import express from 'express';
import contactHandler from '../api/contact.js';

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(express.json());
app.all('/api/contact', contactHandler);

app.listen(PORT, () => {
    console.log(`Contact API listening on port ${PORT}`);
});
