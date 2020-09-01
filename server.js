import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();

app.use(cors());


app.get('/api/products', (req, res) => {
	res.json(data);
});

app.get('/api/products/:id', (req, res) => {
	const productId = req.params.id;
	const product = data.products.find((x) => x._id === productId);
	if(product){

		res.send([product]);
	}
	else{
		res.status(404).json({msg:'Product Not Found!'})
	}
});



app.listen(5000, console.log('server Connected!!'));
