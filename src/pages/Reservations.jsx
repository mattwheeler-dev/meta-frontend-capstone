import { useReducer } from "react";
import ReservationForm from "../components/ReservationForm";
import "./Reservations.css";

const reducer = (state, action) => {
	if (action.type === "reserve_time") {
		return { availableTimes: state.availableTimes };
	} else {
		return "Unrecognized action";
	}
};

const initializeTimes = {
	availableTimes: [
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	],
};

const Reservations = () => {
	const [state, dispatch] = useReducer(reducer, initializeTimes);

	const updateTimes = () => {
		dispatch({ type: "reserve_time" });
	};

	return (
		<section className="reservations">
			<h1>Reserve a Table</h1>
			<ReservationForm
				availableTimes={state.availableTimes}
				updateTimes={updateTimes}
			/>
		</section>
	);
};

export default Reservations;
