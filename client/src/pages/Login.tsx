import { useState } from "react";
import { Link } from "react-router-dom";
import helmet from "../assets/img/images-weatherblitz/football_helmet.jpeg";

export const Login = () => {
	const [inputs, setInputs] = useState({
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
						src={helmet}
						alt="Football Helmet"
						className="img-fluid rounded"
						style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
					/>
				</div>
				<div className="col-md-5">
					<div>
						<h1 style={{ textAlign: "center" }} className="intro-h1">
							Login
						</h1>
					</div>

					<form onSubmit={handleSubmit}>
						<div>
							<label className="contact-label mt-5"> Email</label>
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
								placeholder="Your Email..."
								value={inputs.password}
								onChange={onHandleChange}
							/>
						</div>

						<div>
							<p>
								Don't you have an account? <Link to={"/register"}> Signup</Link>
							</p>
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
