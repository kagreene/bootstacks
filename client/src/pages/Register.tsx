import React, { useState } from "react";
import quarterback from "../assets/img/images-weatherblitz/Quarterback.jpeg";

export const Register = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		phone: "",
		email: "",
		password: "",
	});

	const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
						style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
					/>
				</div>
				<div className="col-md-5">
					<div>
						<h1 style={{ textAlign: "center" }} className="intro-h1">
							Register
						</h1>
					</div>

					<form onSubmit={handleSubmit}>
						<div>
							<label className="contact-label mt-5"> Fullname </label>
							<input
								type={"text"}
								name="fullName"
								className="form-control"
								placeholder="Exm: Robert De Niro"
								value={inputs.fullName}
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
