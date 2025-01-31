import React, { useState } from "react";
import quarterback from "../assets/img/images-weatherblitz/Quarterback.jpeg";
import {signup} from '../api/registerAPI';
import {UserSignup} from '../interfaces/UserSignup';
import Auth from '../utils/auth';

export const Register = () => {
	const [inputs, setInputs] = useState <UserSignup>({
		username: "",
		phone: "",
		email: "",
		password: "",
	});

	const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const data = await signup(inputs);
			console.log(data);
			Auth.login(data.token);
		  } catch (err) {
			console.log(err);
		  }
		console.log("handle submit " + inputs.email + " " + inputs.password);
	};

	return (
		<div className="container-fluid mt-5" id="contact">
			<div className="row p-0 justify-content-center">
				<div className="col-md-6 d-none d-md-block mb-4">
					<img
						src={quarterback}
						alt="Quarterback"
						className="img-fluid rounded"
						style={{ height:"75%", width: "100%", objectFit: "cover" }}
					/>
				</div>
				<div className="col-md-5">
					<div>
						<h1 style={ { textAlign: "center" } }>Register</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div>
							<label className="contact-label mt-5"> Username </label>
							<input
								type={"text"}
								name="username"
								className="form-control"
								placeholder="Exm: Robert De Niro"
								value={inputs.username}
								onChange={onHandleChange}
							/>
						</div>

						<div>
							<label className="contact-label mt-4"> Phone number </label>
							<input
								type={"tel"}
								name="phone"
								className="form-control"
								placeholder="(xxx)yyy-zzzz"
								value={inputs.phone}
								onChange={onHandleChange}
							/>
						</div>

						<div>
							<label className="contact-label mt-4"> Email</label>
							<input
								type={"email"}
								name="email"
								className="form-control"
								placeholder="email@test.com"
								value={inputs.email}
								onChange={onHandleChange}
							/>
						</div>

						<div>
							<label className="contact-label mt-4"> Password </label>
							<input
								type={"password"}
								name="password"
								className="form-control"
								placeholder="password..."
								value={inputs.password}
								onChange={onHandleChange}
							/>
						</div>

						<div className="mt-4">
							<button type="submit" className="btn btn-dark w-25">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
