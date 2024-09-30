import { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = ({ availableTimes, updateTimes }) => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState(availableTimes[0]);
	const [numGuests, setNumGuests] = useState(1);
	const [occasion, setOccasion] = useState("Birthday");

	const handleDateChange = (e) => {
		setDate(e.target.value);
		const dateStr = new Date(e.target.value);
		updateTimes(dateStr);
	};

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
				required
				value={date}
				onChange={handleDateChange}
			/>

			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				required
				value={time}
				onChange={(e) => setTime(e.target.value)}
			>
				{timeOptions}
			</select>

			<label htmlFor="guests">Number of guests (Max: 10)</label>
			<input
				type="number"
				min="1"
				max="10"
				id="guests"
				required
				value={numGuests}
				onChange={(e) => setNumGuests(e.target.value)}
			/>

			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				required
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
			>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>

			<input
				className="submit-btn"
				type="submit"
				value="Make Reservation"
				disabled={date == ""}
				aria-label="Submit Reservation Button"
			/>
		</form>
	);
};

export default ReservationForm;
