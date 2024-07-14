import React, { useState } from "react";

const RegisterForm = ({
	avatarPreview,
	form,
	onSubmit,
	registerDataChange,
}) => {
	const [userType, setUserType] = useState("spectator");

	const handleUserTypeChange = (e) => {
		setUserType(e.target.value);
	};

	return (
		<div className="md:mt-4 md:mb-2 mb-4 flex items-center justify-center">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-2 text-center md:text-xl text-2xl font-extrabold">
						Create an account
					</h2>
				</div>
				<form
					className="md:mt-1 mt-8 space-y-3"
					ref={(refF) => {
						form.current = refF;
					}}
					onSubmit={onSubmit}
				>
					<div className="rounded-md shadow-sm -space-y-px">
						<div className="text-center">
							<img
								src={avatarPreview}
								height={40}
								width={40}
								alt="Avatar Preview"
								className="m-auto w-28 h-28 rounded-full flex justify-center items-center text-center  shadow-xl border-2 border-solid border-maroonRed p-0.5 object-cover"
							/>
							<input
								className="my-3"
								type="file"
								name="avatar"
								accept="image/*"
								onChange={registerDataChange}
							/>
						</div>
						<div>
							<label htmlFor="name" className="sr-only">
								Full Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
								placeholder="Full Name"
							/>
						</div>
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
						<div>
							<label htmlFor="reEnteredPassword" className="sr-only">
								Re-Enter Password
							</label>
							<input
								id="reEnteredPassword"
								name="reEnteredPassword"
								type="reEnteredPassword"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
								placeholder="Re-Enter Password"
							/>
						</div>
					</div>
					<div className="mb-6">
						<label className="block  text-sm font-bold mb-2">User Type</label>
						<div className="flex items-center">
							<input
								className="mr-2 leading-tight"
								name="role"
								type="radio"
								id="artist"
								value="artist"
								onChange={handleUserTypeChange}
								checked={userType === "artist"}
							/>
							<label className="text-sm" htmlFor="artist">
								Artist
							</label>
							<input
								className="ml-4 mr-2 leading-tight"
								name="role"
								type="radio"
								id="spectator"
								value="spectator"
								onChange={handleUserTypeChange}
								checked={userType === "spectator"}
							/>
							<label className="text-sm" htmlFor="spectator">
								Spectator
							</label>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-maroonRed hover:bg-maroonRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroonRed"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
