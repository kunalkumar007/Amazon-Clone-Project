import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Navbar, Product } from './components';

const App = () => {
	return (
		<Router>
			<div className="grid-container">
				<Navbar />
				<main className="main">
					<Route path="/" exact component={Home} />
					<Route path="/products/:id" exact component={Product} />
				</main>
				<footer className="footer">All right reserved.</footer>
			</div>
		</Router>
	);
};

export default App;
