import React, { useEffect, useRef, useState } from "react";
import Logo from "../../components/logo/Logo";
import LoginForm from "../../components/login-form/LoginForm";
import RegisterForm from "../../components/register-form/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/loader/Loader";
import profile from "../../assets/profile.png";

function LoginRegisterPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginForm = useRef(null);
	const registerForm = useRef(null);

	const [newUser, setNewUser] = useState(true);

	const [avatar, setAvatar] = useState(profile);
	const [avatarPreview, setAvatarPreview] = useState(profile);

	const { error, loading, isLoggedIn } = useSelector(
		(state) => state.userReducer,
	);

	const loginSubmit = (e, storedUser = null) => {
		e.preventDefault();
		const formData = new FormData(loginForm.current);
		let _userData;
		if (!storedUser) _userData = Object.fromEntries(formData.entries());
		else _userData = storedUser;
		dispatch(login(_userData));
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(registerForm.current);
		let __userData = Object.fromEntries(formData.entries());
		__userData.avatar = avatar;
		dispatch(register(__userData));
	};

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/profile");
		}
	}, [isLoggedIn, navigate]);

	useEffect(() => {
		if (error) {
			toast.error(error, {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				// transition: Bounce,
			});

			dispatch(clearErrors());
		}
	}, [dispatch, error]);

	return (
		<>
			<Loader loading={loading} />
			<div className="flex min-h-screen">
				<div
					className="bg-center bg-cover bg-no-repeat lg:w-1/2 md:block hidden w-1/4 shadow-2xl"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dkb4cxn9b/image/upload/v1714839491/artGaloreCarousel/carousel-buddha_iwktip.jpg")',
					}}
				></div>
				<div className="lg:w-1/2 md:w-3/4 w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:text-base sm:text-sm text-xs">
					<div>
						<div className="flex justify-center">
							<Logo />
						</div>
						<div className="mt-4 text-dark font-semibold lg:w-2/3 xs:w-1/2 w-full m-auto text-center">
							Empower Artistry: Buy, Sell, and Embrace an Abundance of Art
						</div>
					</div>

					{newUser ? (
						<RegisterForm
							avatarPreview={avatarPreview}
							form={registerForm}
							onSubmit={registerSubmit}
							registerDataChange={registerDataChange}
						/>
					) : (
						<LoginForm form={loginForm} onSubmit={loginSubmit} />
					)}
					<div
						className="flex justify-center items-center"
						onClick={() => setNewUser((prev) => !prev)}
					>
						{!newUser ? (
							<span>
								New to the platform?{" "}
								<span className="hover:text-maroonRed cursor-pointer font-semibold">
									Register
								</span>
							</span>
						) : (
							<span>
								Already have an account?{" "}
								<span className="hover:text-maroonRed cursor-pointer font-semibold">
									Login
								</span>
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginRegisterPage;
