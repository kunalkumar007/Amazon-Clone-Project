import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
	res.json(data);
});

app.listen(5000, console.log('server Connected!!'));
