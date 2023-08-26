import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Vans from './pages/Vans.js';

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
				<Route path="/vans" element={<Vans />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
