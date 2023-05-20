import Typed from "react-typed";
import Socials from "./Socials";
import data from "../data/data.json";
import me from "../assets/me.jpeg";
import { measureMemory } from "vm";
import { memoryUsage } from "process";
import { Col, Container, Row } from "react-bootstrap";

const Intro = () => {
	return (
		<section className="intro-mf sect-pt4">
			<Container>
				<Row className="intro">
					<Col md={7} className="intro-content">
						<h1 className="intro-title mb-4">Hi, I am {data.name}.</h1>
						<p className="intro-subtitle">
							<span className="text-slider-items"></span>
							<strong className="text-slider">
								<Typed
									strings={data.personas}
									typeSpeed={80}
									backDelay={1100}
									backSpeed={30}
									loop
								/>
							</strong>
						</p>
						<Socials />
					</Col>

					<Col md={5} className="profile-pic-container">
						<img
							src={me}
							alt="home pic"
							className="profile-pic"
							style={{ maxHeight: "450px" }}
						/>
					</Col>
				</Row>

			</Container>
		</section>
	);
}

export default Intro;