import SkillCard from "./SkillCard";
import data from "../data/data.json";

const Skills = () => {
	return (
		<section id="projects" className="skills-mf sect-pt2 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="title-box-2">
								<h5 className="title-left">Skills</h5>
							</div>
							<div className="row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
								{data.skills.map(skill => {
									return (
										<div className="skill-card-view">
											<SkillCard
												index={skill.id}
												name={skill.name}
												logo={skill.logo} />
										</div>
									)
								}
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;