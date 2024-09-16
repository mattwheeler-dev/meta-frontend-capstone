import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo-white.png";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<img src={logo} alt="Little Lemon logo" />

			<div className="footer-info">
				<h4>Contact Us</h4>
				<ul>
					<li>1234 SpaceNeedle Ct., Seattle, WA</li>
					<li>1-800-555-4937</li>
					<li>LittleLemon@email.com</li>
				</ul>
			</div>

			<div className="socials">
				<h4>Follow Us</h4>
				<p>
					<a href="https://www.facebook.com/" target="_blank">
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a href="https://www.instagram.com/" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://www.tiktok.com/explore" target="_blank">
						<FontAwesomeIcon icon={faTiktok} />
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
