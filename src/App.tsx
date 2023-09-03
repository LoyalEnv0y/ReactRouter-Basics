import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanShow from './pages/VanShow';
import Layout from './components/Layout';
import Host from './pages/Host/Host';
import HostNav from './components/Host/HostNav';
import Income from './pages/Host/Income';
import HostVans from './pages/Host/HostVans';
import Reviews from './pages/Host/Reviews';
import HostVanShow from './pages/Host/HostVanShow';
import VanLayout from './components/Host/VanLayout';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

/*
	-------------------------------------- 🌐 --------------------------------------
	BrowserRoute is a top level provider that parses all the routes. Check the main
	file (main.tsx) to see how it wraps everything like context.

	-------------------------------------- 🪧 --------------------------------------
	Routes is an array containing multiple routes.

	-------------------------------------- 📍 --------------------------------------
	Route is the ultimate way of showing different pages. the path prop defines
	where the route will go to and the element prop defines what to show.

	-------------------------------------- 🪺 --------------------------------------
	You can nest routes inside other routes. This works similar to express.js's 
	router. Below we create a `/vans` route and in that route we create two other
	routes. One is labeled as `index` meaning it is the page that will be shown
	when client is directed to `/vans`. The second element is the show page for
	Vans. Notice the path value doesn't include the full path because the `/vans`
	has already been included in the parent route. 

	-------------------------------------- 🏗️ --------------------------------------
	If you want a certain component to show in each page, you can set a parent
	route with element attribute set to that component. Any route inside the parent
	route will be sent as an <Outlet /> to the component specified by parent. For
	example, below we make a `/host` parent route and give it an element. That 
	element is shown in the index, income, and reviews pages.  
*/
const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans">
					<Route index element={<Vans />} />
					<Route path=":id" element={<VanShow />} />
				</Route>

				<Route path="/host" element={<HostNav />}>
					<Route index element={<Host />} />
					<Route path="income" element={<Income />} />
					<Route path="reviews" element={<Reviews />} />

					<Route path="vans">
						<Route index element={<HostVans />} />
						<Route path=":id" element={<VanLayout />}>
							<Route index element={<HostVanShow />} />
							<Route path="pricing" element={<HostVanPricing />} />
							<Route path="photos" element={<HostVanPhotos />} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
