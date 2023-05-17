import Typed from "react-typed";
import Socials from "./Socials";
import data from "../data/data.json";


const Intro = () => {
	return (
		// <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
		<div id="home" className="intro route bg-image background">

			<div className="intro-content display-table">
				<div className="table-cell">
					<div className="container">
						<h1 className="intro-title mb-4">Hello, I am {data.name}.</h1>
						<p className="intro-subtitle">
							<span className="text-slider-items"></span>
							<strong className="text-slider">
								<Typed
									strings={[
										"Software Engineer",
										"Finance Professional"
									]}
									typeSpeed={80}
									backDelay={1100}
									backSpeed={30}
									loop
								/>
							</strong>
						</p>
						<Socials />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;