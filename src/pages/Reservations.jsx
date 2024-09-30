import { useReducer } from "react";
import { fetchAPI } from "../BookingAPI";
import ReservationForm from "../components/ReservationForm";
import "./Reservations.css";

const Reservations = () => {
	const updateTimes = (date) => {
		return fetchAPI(date);
	};

	const initializeTimes = fetchAPI(new Date());

	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

	return (
		<section className="reservations">
			<h1>Reserve a Table</h1>
			<ReservationForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}
			/>
		</section>
	);
};

export default Reservations;
