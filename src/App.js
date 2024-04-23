import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login-page/LoginPage";
import LoginForm from "./components/login-form/LoginForm";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
