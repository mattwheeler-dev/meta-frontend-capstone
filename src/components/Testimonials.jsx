import customer1 from "../assets/jurica-koletic-unsplash.jpg";
import customer2 from "../assets/dollar-gill-unsplash.jpg";
import customer3 from "../assets/alex-starnes-unsplash.jpg";
import customer4 from "../assets/baptist-standaert-unsplash.jpg";
import stars5 from "../assets/5-stars.png";
import stars4 from "../assets/4-half-stars.png";

const Testimonials = () => {
	return (
		<section className="testimonials">
			<h2>Testimonials</h2>
			<article className="customer">
				<p className="cust-name">Adam</p>
				<img
					className="cust-img"
					src={customer1}
					alt="stock profile photo from unsplash"
					title="Photo Credit: Jurica Koletić on Unsplash"
				/>
				<img className="rating" src={stars5} alt="5 stars customer rating" />
				<p className="cust-text">
					{`"`}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{`"`}
				</p>
			</article>

			<article className="customer">
				<p className="cust-name">Rishaad</p>
				<img
					className="cust-img"
					src={customer2}
					alt="stock profile photo from unsplash"
					title="Photo Credit: Dollar Gill on Unsplash"
				/>
				<img className="rating" src={stars5} alt="5 stars customer rating" />
				<p className="cust-text">
					{`"`}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{`"`}
				</p>
			</article>

			<article className="customer">
				<p className="cust-name">Lena</p>
				<img
					className="cust-img"
					src={customer3}
					alt="stock profile photo from unsplash"
					title="Photo Credit: Alex Starnes on Unsplash"
				/>
				<img className="rating" src={stars5} alt="5 stars customer rating" />
				<p className="cust-text">
					{`"`}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{`"`}
				</p>
			</article>

			<article className="customer">
				<p className="cust-name">Bentley</p>
				<img
					className="cust-img"
					src={customer4}
					alt="stock profile photo from unsplash"
					title="Photo Credit: Baptist Standaert on Unsplash"
				/>
				<img className="rating" src={stars4} alt="4.5 stars customer rating" />
				<p className="cust-text">
					{`"`}Would be 5 stars except they kept yelling at me while I ate
					everything!{`"`}
				</p>
			</article>
		</section>
	);
};

export default Testimonials;
