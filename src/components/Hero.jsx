import { Link } from "react-router-dom";
import logoSrc from "../assets/restaurant-food.jpg";

const Hero = () => {
	return (
		<section className="hero">
			<article>
				<h1>Little Lemon</h1>
				<h3>Chicago</h3>
				<p>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<Link to={"/reservations"}>
					<button>Reserve a Table</button>
				</Link>
			</article>
			<img src={logoSrc} alt="Tray of " width={100} />
		</section>
	);
};

export default Hero;
