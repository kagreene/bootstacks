import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../assets/img/images-weatherblitz/weatherblitz-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="logo">
				<Link to={"/"} className="navbar-brand">
					<img src={logo} alt="WeatherBlitz Logo" style={{ height: "40px" }} />
				</Link>
			</div>
			<ul className="nav ms-auto">
				<li className="nav-item">
					<Link to="/" className="nav-link text-white">
						Home
					</Link>
				</li>
				<li className="nav-item d-flex">
					<Link to="/login" className="nav-link">
						<button className="btn btn-outline-light me-2">Login</button>
					</Link>
					<Link to="/register" className="nav-link">
						<button className="btn btn-light">Sign Up</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
