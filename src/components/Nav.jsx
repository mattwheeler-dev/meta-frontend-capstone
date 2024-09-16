import { Link } from "react-router-dom";
import logo from "../assets/logo-primary.png";
import "./Nav.css";

const Nav = () => {
	return (
		<nav>
			<img src={logo} alt="Little Lemon brand logo" width={200} />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/reservations">Reservations</Link>
				</li>
				<li>
					<Link to="/order">Order Online</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
