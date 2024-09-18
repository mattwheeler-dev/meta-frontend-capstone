import saladSrc from "../assets/greek-salad.jpg";
import bruschSrc from "../assets/bruschetta.jpg";
import lemonSrc from "../assets/lemon-dessert.jpg";

const Specials = () => {
	return (
		<section className="specials">
			<h2>This Week{`'`}s Specials!</h2>
			<button>Online Menu</button>

			<article>
				<div className="special-card">
					<img
						src={saladSrc}
						alt="Salad containing lettuce, peppers, olives, cheese, and croutons"
					/>
					<h4 className="special-name">
						Greek Salad
						<span className="price">$12.99</span>
					</h4>
					<p className="special-desc">
						The famous greek salad of crispy lettuce, peppers, olives, and our
						Chicago style feta cheese, garnished with crunchy garlic and
						rosemary croutons.
					</p>
					<a href="">Order a delivery</a>
				</div>

				<div className="special-card">
					<img
						src={bruschSrc}
						alt="Bruschetta with garlic, salt, and olive oil"
					/>
					<h4 className="special-name">
						Bruschetta <span className="price">$5.99</span>
					</h4>
					<p className="special-desc">
						Our Bruschetta is made from grilled bread that has been smeared with
						garlic and seasoned with salt and olive oil.
					</p>
					<a href="">Order a delivery</a>
				</div>

				<div className="special-card">
					<img src={lemonSrc} alt="Lemon cake dessert" />
					<h4 className="special-name">
						Lemon Dessert <span className="price">$5.00</span>
					</h4>
					<p className="special-desc">
						This comes straight from grandma{`'`}s recipe book, every last
						ingredient has been sourced and is as authentic as can be imagined.
					</p>
					<a href="">Order a delivery</a>
				</div>
			</article>
		</section>
	);
};

export default Specials;
