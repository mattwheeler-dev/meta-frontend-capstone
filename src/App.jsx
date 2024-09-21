import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	const [availableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	]);

	return (
		<>
			<Nav />
			<Outlet context={{ availableTimes }} />
			<Footer />
		</>
	);
}

export default App;
