import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Info from "../components/Info";
import "./Home.css";

const Home = () => {
	return (
		<main>
			<Hero />
			<Specials />
			<Testimonials />
			<Info />
		</main>
	);
};

export default Home;
