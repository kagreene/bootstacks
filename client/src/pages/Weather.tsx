import { WeatherCard } from "../components/WeatherCard";
export const Weather = () => {
	return (
		<div>
			<WeatherCard weather="sunny" temp={70} precipitation={50} wind={10} />
		</div>
	);
};
