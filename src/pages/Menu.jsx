import saladSrc from "../assets/greek-salad.jpg";
import bruschSrc from "../assets/bruschetta.jpg";
import lemonSrc from "../assets/lemon-dessert.jpg";
import "./Menu.css";

const Menu = () => {
	return (
		<section className="menu">
			<h1>Menu</h1>
			<article className="menu-card">
				<img
					src={saladSrc}
					alt="Salad containing lettuce, peppers, olives, cheese, and croutons"
				/>
				<div className="menu-text">
					<h4>
						Greek Salad
						<span className="price">$12.99</span>
					</h4>
					<p className="menu-desc">
						The famous greek salad of crispy lettuce, peppers, olives, and our
						Chicago style feta cheese, garnished with crunchy garlic and
						rosemary croutons.
					</p>
					<a href="">Order a delivery</a>
				</div>
			</article>

			<article className="menu-card">
				<img
					src={bruschSrc}
					alt="Bruschetta with garlic, salt, and olive oil"
				/>
				<div className="menu-text">
					<h4>
						Bruschetta
						<span className="price">$5.99</span>
					</h4>
					<p className="menu-desc">
						Our Bruschetta is made from grilled bread that has been smeared with
						garlic and seasoned with salt and olive oil.
					</p>
					<a href="">Order a delivery</a>
				</div>
			</article>

			<article className="menu-card">
				<img src={lemonSrc} alt="Lemon cake dessert" />
				<div className="menu-text">
					<h4>
						Lemon Dessert
						<span className="price">$5.00</span>
					</h4>
					<p className="menu-desc">
						This comes straight from grandma{`'`}s recipe book, every last
						ingredient has been sourced and is as authentic as can be imagined.
					</p>
					<a href="">Order a delivery</a>
				</div>
			</article>
		</section>
	);
};

export default Menu;
