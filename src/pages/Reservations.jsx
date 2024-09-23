import { useOutletContext } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";
import "./Reservations.css";

const Reservations = () => {
	const { availableTimes } = useOutletContext();

	return (
		<section className="reservations">
			<h1>Reserve a Table</h1>
			<ReservationForm availableTimes={availableTimes} />
		</section>
	);
};

export default Reservations;
