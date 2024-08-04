import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginRegisterPage from "./pages/login-register-page/LoginRegisterPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { ToastContainer } from "react-toastify";
import React from "react";
import store from "./store";
import { loadUser } from "./redux/actions/userAction";
import ProductPage from "./pages/product-page/ProductPage";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import WrapperPage from "./pages/wrapper-page/WrapperPage";
import AllProductsPage from "./pages/all-product-page/AllProductsPage";

function App() {
	React.useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<WrapperPage Component={Home} />} />
				<Route path="/login" element={<LoginRegisterPage />} />
				<Route
					path="/profile"
					element={
						<WrapperPage
							Component={ProfilePage}
							props={{ personalProfile: true }}
						/>
					}
				/>
				<Route
					path="/product/create"
					element={
						<WrapperPage Component={ProductPage} props={{ create: true }} />
					}
				/>
				<Route
					path="/product/:id"
					element={
						<WrapperPage Component={ProductPage} props={{ create: false }} />
					}
				/>
				<Route
					path="/edit/profile"
					element={
						<WrapperPage
							Component={ProfilePage}
							props={{ personalProfile: true }}
						/>
					}
				/>
				<Route
					path="/profile/:id"
					element={<WrapperPage Component={ProfilePage} />}
				/>
				<Route
					path="/all-products"
					element={<WrapperPage Component={AllProductsPage} />}
				/>
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
