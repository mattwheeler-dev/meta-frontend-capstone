import { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = ({ availableTimes, updateTimes }) => {
	const [date, setDate] = useState(new Date().toLocaleDateString());
	const [time, setTime] = useState(availableTimes[0]);
	const [numGuests, setNumGuests] = useState(1);
	const [occasion, setOccasion] = useState("Birthday");

	const timeOptions = availableTimes.map((resTime) => {
		return <option key={resTime}>{resTime}</option>;
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(date, time, numGuests, occasion);
	};

	return (
		<form className="res-form" onSubmit={handleSubmit}>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				id="res-date"
				value={date}
				onChange={(e) => {
					console.log(e.target.value);
					setDate(e.target.value);
					console.log(date);
					updateTimes(date);
				}}
			/>

			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
			>
				{timeOptions}
			</select>

			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				min="1"
				max="10"
				id="guests"
				value={numGuests}
				onChange={(e) => setNumGuests(e.target.value)}
			/>

			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
			>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>

			<input type="submit" value="Make Reservation" />
		</form>
	);
};

export default ReservationForm;
