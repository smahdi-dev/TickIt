import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/auth" />} />
			<Route path="/auth" element={<AuthPage/>} />
		</Routes>
	);
};

export default Router;
