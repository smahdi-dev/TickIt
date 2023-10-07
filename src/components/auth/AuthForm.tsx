import { useState } from "react";
import { AuthForm } from "../../styles/authPage/LoginFormStyles";
import loginImage from "../../assets/authPageImage.png";
import showEye from "../../assets/show-eye.png";
import hideEye from "../../assets/hide-eye.png";

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const toggleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<AuthForm>
			<img src={loginImage} />
			<h3>Let's get started!</h3>
			<form>
				<div className="email-container">
					<label htmlFor="email">E-mail</label>
					<input type="text" id="email" />
				</div>
				<div className="password-container">
					<label htmlFor="password">Password</label>
					<input
						type={showPassword ? "text" : "password"}
						id="password"
					/>
					<img
						className="password-eye"
						onClick={toggleShowPassword}
						src={showPassword ? hideEye : showEye}
					/>
				</div>
				<button>Sign up</button>
			</form>
		</AuthForm>
	);
};

export default LoginForm;
