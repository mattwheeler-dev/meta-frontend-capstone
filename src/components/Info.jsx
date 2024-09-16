import chefs1 from "../assets/Mario-Adrian-A.jpg";
import chefs2 from "../assets/Mario-Adrian-B.jpg";

const Info = () => {
	return (
		<section className="info">
			<div className="info-text">
				<h1>Little Lemon</h1>
				<h3>Chicago</h3>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit.
				</p>
			</div>

			<div className="info-imgs">
				<img src={chefs1} alt="2" />
				<img src={chefs2} alt="" />
			</div>
		</section>
	);
};

export default Info;
