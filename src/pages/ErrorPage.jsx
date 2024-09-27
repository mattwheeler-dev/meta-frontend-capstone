import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has sent you to the 404th dimension!</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</>
	);
}
