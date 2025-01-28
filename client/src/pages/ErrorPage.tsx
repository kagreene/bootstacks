// This file is used to display an error page

import { useRouteError } from 'react-router';
import { Link } from 'react-router';

interface ErrorResponse {
	status?: number;
	message?: string;
	statusText?: string;
	type?: "API_ERROR" | "AUTH_ERROR" | "NOT_FOUND" | "SERVER_ERROR";
}

// ErrorPage component to display error details when a 404 or 500 error occurs
const ErrorPage = () => {
	const error = useRouteError() as ErrorResponse;

	// Simple error message based on type
	const getErrorMessage = () => {
		if (error.status === 404) {
			return "Page not found";
		}
		if (error.status === 500) {
			return "Server error";
		}
		return error.message || "Something went wrong";
	};

	return (
		<div className="error-container">
			<h1>Oops!</h1>
			<p>{getErrorMessage()}</p>
			<Link to="/">Go back home</Link>
		</div>
	);
};

export default ErrorPage;
