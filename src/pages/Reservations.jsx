import ReservationForm from "../components/ReservationForm";
import "./Reservations.css";

const Reservations = () => {
	return (
		<section className="reservations">
			<h1>Reserve a Table</h1>
			<ReservationForm />
		</section>
	);
};

export default Reservations;
