import { Link, useLoaderData } from 'react-router-dom';
import Button from '../components/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { loginUser } from '../api';

const initialFormData = {
	email: '',
	password: '',
};

const Login = () => {
	const message = useLoaderData();
	const [showMessage, setShowMessage] = useState(message !== null);
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const resp = await loginUser(formData);
		console.log(resp);
		setFormData(initialFormData);
	};

	return (
		<main className="flex grow flex-col items-center justify-center gap-y-10 px-5">
			<>
				{message && showMessage && (
					<div className="relative flex w-full justify-center rounded-lg bg-red-200 p-5">
						<h1 className="text-xl font-bold">
							<>{message}</>
						</h1>
						<Button
							color="luxury"
							corner="roundedLG"
							className="absolute right-1 top-1 h-min px-2 leading-none opacity-80 hover:opacity-100 active:scale-100"
							onClick={() => {
								setShowMessage(false);
							}}
						>
							X
						</Button>
					</div>
				)}
			</>

			<h1 className="text-2xl font-bold sm:text-3xl">
				Log in to your account
			</h1>

			<form
				className="flex w-full flex-col gap-y-2"
				onSubmit={(evt) => handleSubmit(evt)}
			>
				<input
					type="text"
					name="email"
					value={formData.email}
					onChange={(evt) => handleChange(evt)}
					placeholder="Email address"
					className="rounded border border-gray-300 p-1 px-3 text-lg placeholder:text-gray-600 focus:outline-primary"
				/>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={(evt) => handleChange(evt)}
					placeholder="Password"
					className="rounded border border-gray-300 p-1 px-3 text-lg placeholder:text-gray-600 focus:outline-primary"
				/>

				<Button color="primary" className="mt-5 py-3 font-semibold">
					Log in
				</Button>
			</form>

			<div className="flex gap-x-1 font-semibold">
				<p>Don't have an account?</p>
				<Link to="/" className="font-bold text-primary">
					Create one now
				</Link>
			</div>
		</main>
	);
};

export default Login;
