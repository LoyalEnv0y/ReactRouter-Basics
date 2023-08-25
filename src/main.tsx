import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Prices from './pages/Prices.js';
import Home from './pages/Home.js';

import '../public/styles/index.css';

/*
	-------------------------------------- 🌐 --------------------------------------
	BrowserRoute is a top level provider that parses all the routes.

	-------------------------------------- 🪧 --------------------------------------
	Routes is an array containing multiple routes.

	-------------------------------------- 📍 --------------------------------------
	Route is the ultimate way of showing different pages. the path prop defines
	where the route will go to and the element prop defines what to show.
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/prices" element={<Prices />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
