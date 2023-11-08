import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/layouts/Header";

const Router = () => {
	return (
		<div className="relative">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/setting" element={<p>setting</p>} />
			</Routes>
		</div>
	);
};

export default Router;
