import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

import data from "../data/data.json";

const Projects = () => {
	return (
		<section id="projects" className="portfolio-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="title-box-2">
								<h5 className="title-left">Project</h5>
							</div>
							<p style={{ color: "white" }}>
								Here are a few projects I've worked on recently.
							</p>
							<div className="row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
								{data.projects.map(project => {
									return (
										<Col md={4} className="project-card">
											<ProjectCard
												imgPath={project.imageSrc}
												isBlog={false}
												title={project.title}
												description={project.description}
												ghLink={project.url}
											/>
										</Col>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;