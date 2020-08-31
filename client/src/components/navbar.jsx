import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const openMenu = () => {
		document.querySelector('.sidebar').classList.add('open');
	};
	const closeMenu = () => {
		document.querySelector('.sidebar').classList.remove('open');
	};

	return (
		<React.Fragment>
			<header className="header">
				<div className="brand">
					<button onClick={openMenu}>&#9776;</button>
					<Link to="/">amazona</Link>
				</div>
				<div className="header-links">
					<a href="cart.html">Cart</a>
					<a href="signin.html">Sign In</a>
				</div>
			</header>
			<aside className="sidebar">
				<h3>Shopping Categories</h3>
				<button className="sidebar-close-button" onClick={closeMenu}>
					x
				</button>
				<ul>
					<li>
						<a href="index.html">Pants</a>
					</li>

					<li>
						<a href="index.html">Shirts</a>
					</li>
				</ul>
			</aside>
		</React.Fragment>
	);
}
