import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/auth" />} />
		</Routes>
	);
};

export default Router;
