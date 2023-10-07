import styled from "styled-components";

export const AuthForm = styled.div`
	img {
		display: block;
		margin: 2rem auto;
		width: 300px;
	}

	h3 {
		text-align: center;
		font-size: 25px;
		color: #1f0742;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.email-container,
	.password-container {
		position: relative;
		width: 70%;
		margin: 0 auto;
	}

	form label {
		color: #9c99a1;
		margin-left: 0.8rem;
	}

	form input {
		font-size: 1.25rem;
		height: 40px;
		border: #b3acbd solid 1px;
		border-radius: 18px;
		margin-bottom: 1rem;
		padding-left: 12px;
	}

	form input:focus {
		outline: none;
	}

	.password-container .password-eye {
		position: absolute;
		width: 2.4rem;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		top: -8%;
		right: 11px;
		background-color: white;
		cursor: pointer;
	}

	form button {
		font-size: 1.2rem;
		height: 45px;
		border: none;
		color: white;
		background-color: #1f0742;
		padding-left: 2.2rem;
		padding-right: 2.2rem;
		border-radius: 18px;
		margin-top: 1rem;
		cursor: pointer;
	}

	form button:hover {
		opacity: 0.8;
	}

	form button:active {
		opacity: 0.5;
	}
`;
