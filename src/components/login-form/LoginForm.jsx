import React from "react";

const LoginForm = ({ form, onSubmit }) => {
	return (
		<div className="lg:mt-32 md:mt-20 mt-10 mb-4 flex items-center justify-center">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center md:text-3xl text-xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
				</div>
				<form
					className="mt-8 space-y-6"
					action="#"
					method="POST"
					ref={(refF) => {
						form.current = refF;
					}}
					onSubmit={onSubmit}
				>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
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
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-maroonRed focus:border-maroonRed focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="text-sm">
							<a
								href="/password/forgot"
								className="font-medium text-maroonRed hover:text-maroonRed"
							>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-maroonRed hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroonRed"
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
