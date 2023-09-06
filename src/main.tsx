// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import {
	LoaderFunctionArgs,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

// Pages
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
import NotFound from './pages/NotFound';
import Error from './components/Error.js';
import SignIn from './pages/SignIn.js';

// CSS and MockServer
import '../public/styles/index.css';
import './mockServer.js';

// Loaders
import {
	getAllVansLoader,
	getHostVanLoader,
	getHostVansLoader,
	getVanByIdLoader,
} from './loaders/index.js';

/*
	-------------------------------------- 🌐 --------------------------------------
	CreateBrowserRoute is a top level provider creator that parses all the routes. 
	it wraps everything like context.

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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{
				path: '/vans',
				errorElement: <Error />,
				children: [
					{
						index: true,
						element: <Vans />,
						loader: getAllVansLoader,
					},
					{ path: ':id', element: <VanShow />, loader: getVanByIdLoader },
				],
			},
			{
				path: '/host',
				element: <HostNav />,
				errorElement: <Error />,
				loader: async () => {
					console.log('here /host');
					return null;
				},

				children: [
					{
						index: true,
						element: <Host />,
						loader: async () => {
							console.log('here /host/');
							return getHostVansLoader();
						},
					},
					{
						path: 'income',
						element: <Income />,
						loader: async () => {
							console.log('here /host/income');
							return null;
						},
					},
					{
						path: 'reviews',
						element: <Reviews />,
						loader: async () => {
							console.log('here /host/reviews');
							return null;
						},
					},
					{
						path: 'vans',
						loader: async () => {
							console.log('here /host/vans');
							return null;
						},
						children: [
							{
								index: true,
								element: <HostVans />,
								loader: async () => {
									console.log('here /host/vans/');
									return getHostVansLoader();
								},
							},
							{
								path: ':id',
								element: <VanLayout />,
								loader: async ({ params }) => {
									console.log('here /host/vans/:id');
									return getHostVanLoader({
										params,
									} as LoaderFunctionArgs);
								},
								children: [
									{
										index: true,
										element: <HostVanShow />,
										loader: async () => {
											console.log('here /host/vans/:id/');
											return null;
										},
									},
									{
										path: 'pricing',
										element: <HostVanPricing />,
										loader: async () => {
											console.log(
												'here /host/vans/:id/pricing'
											);
											return null;
										},
									},
									{
										path: 'photos',
										element: <HostVanPhotos />,
										loader: async () => {
											console.log(
												'here /host/vans/:id/photos'
											);
											return null;
										},
									},
								],
							},
						],
					},
				],
			},
			{
				path: 'signIn',
				element: <SignIn />,
				loader: async () => {
					console.log('here /signin');
					return null;
				},
			},
			{ path: '*', element: <NotFound /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
