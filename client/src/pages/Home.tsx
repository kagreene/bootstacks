import heroImage from "../assets/img/images-weatherblitz/hero-image.jpeg";
import logo from "../assets/img/images-weatherblitz/weatherblitz-logo.png";

export const Home = () => {
	return (
		<section className="container-fluid p-0">
			<div className="hero-section position-relative">
				<img
					src={heroImage}
					className="w-100"
					alt="WeatherBlitz Hero"
					style={{ height: "90vh", objectFit: "cover" }}
				/>
				<div className="position-absolute top-50 start-50 translate-middle text-center">
					<img
						src={logo}
						alt="WeatherBlitz Logo"
						className="mb-4"
						style={{ maxWidth: "300px" }}
					/>
					<h1 className="text-white mb-3">Welcome to WeatherBlitz</h1>
					<p className="text-white fs-4">Your Ultimate NFL Weather Companion</p>
				</div>
			</div>

			<div className="container my-5">
				<div className="row text-center">
					<div className="col">
						<h2 className="mb-4">
							The Ultimate NFL Weather and Statistics Hub
						</h2>
						<p className="fs-5">
							Get real-time weather updates and comprehensive statistics for
							every NFL game
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
