import React from "react";
import Logo from "../../components/logo/Logo";
import LoginForm from "../../components/login-form/LoginForm";
import RegisterPage from "../register-page/RegisterPage";
import Footer from "../../components/footer/Footer";

function LoginPage() {
	return (
		<>
			<div className="flex min-h-screen">
				<div className="lg:w-1/2 md:block hidden gradient-maroonRed w-1/4"></div>
				<div className="lg:w-1/2 md:w-3/4 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:text-base sm:text-sm text-xs">
					<div>
						<div className="flex justify-center">
							<Logo />
						</div>
						<div className="mt-8 text-dark font-semibold lg:w-2/3 xs:w-1/2 w-full m-auto text-center">
							Empowering Artistry: Buy, Sell, and Embrace a World of
							Photography, Prints, Sculptures, Paintings, Drawings, and Beyond!
						</div>
					</div>
					<LoginForm />
					<RegisterPage />
				</div>
			</div>
		</>
	);
}

export default LoginPage;
