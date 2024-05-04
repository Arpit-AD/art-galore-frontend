import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginRegisterPage from "./pages/login-register-page/LoginRegisterPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { ToastContainer } from "react-toastify";
import React from "react";
import store from "./store";
import { loadUser } from "./redux/actions/userAction";

function App() {
	React.useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginRegisterPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</Router>
	);
}

export default App;
