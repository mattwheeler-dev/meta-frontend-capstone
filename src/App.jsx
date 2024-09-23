import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const initializeTimes = () => {
	return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
};

const availableTimes = (state, action) => {
	if (action.type === "reserve_time")
		return { availableTimes: state.availableTimes };
	return state;
};

function App() {
	const [state, dispatch] = useReducer(availableTimes, initializeTimes);

	function updateTimes() {
		dispatch({ type: "reserve_time" });
	}

	return (
		<>
			<Nav />
			<Outlet context={{ availableTimes, updateTimes }} />
			<Footer />
		</>
	);
}

export default App;
