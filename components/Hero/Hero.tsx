import Link from "next/link";
import css from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={css.heroSection}>
			<div className="container">
				<h1 className={css.heroTitle}>Campers of your dreams</h1>
				<h2 className={css.heroSubtitle}>
					You can find everything you want in our catalog
				</h2>
				<Link className={css.heroLink} href="/catalog">
					View Now
				</Link>
			</div>
		</div>
	);
};

export default Hero;
