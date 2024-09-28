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

const initializeTimes = (times) => {
	return { availableTimes: times, date: new Date() };
};

const Reservations = () => {
	const [state, dispatch] = useReducer(
		reducer,
		["17", "18", "19", "20"],
		initializeTimes
	);

	const updateTimes = (date) => {
		console.log(date);
		dispatch({ type: "reserve_time", date: date });
	};
	console.log(`${state.availableTimes} | ${state.date}`);
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
