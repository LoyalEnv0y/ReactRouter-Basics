import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanShow from './pages/VanShow';

/*
	-------------------------------------- 🌐 --------------------------------------
	BrowserRoute is a top level provider that parses all the routes. Check the main
	file (main.tsx) to see how it wraps everything like context.

	-------------------------------------- 🪧 --------------------------------------
	Routes is an array containing multiple routes.

	-------------------------------------- 📍 --------------------------------------
	Route is the ultimate way of showing different pages. the path prop defines
	where the route will go to and the element prop defines what to show.
*/
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/vans" element={<Vans />} />
			<Route path="/vans/:id" element={<VanShow />} />
		</Routes>
	);
};

export default App;
