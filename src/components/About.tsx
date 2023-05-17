import data from "../data/data.json";
import '../style.css';

const About = () => {
	return (
		<section id="about" className="about-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="row">
								<div className="col-md-10">
									<div className="about-me pt-4 pt-md-0">
										<div className="title-box-2">
											<h5 className="title-left">About Me</h5>
										</div>
										{data.about_me.map(content => {
											return (
												<p className="lead" key={content.id}>
													{content.content}
												</p>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;