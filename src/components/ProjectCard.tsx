import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
	imgPath: string,
	title: string,
	description: string,
	languages: string,
	ghLink: string,
	feLink: string
}

const ProjectCard = ({ imgPath, title, description, languages, ghLink, feLink }: ProjectCardProps) => {
	return (
		<Card className="project-card-view">
			<Card.Img className="cardImage" variant="top" src={imgPath} alt="card-img" />
			<Card.Body className="flex-down">
				<Card.Title>{title}</Card.Title>
				<Card.Text style={{ textAlign: "left", fontSize: "14px", color: "darkgray" }}>
					{description}
				</Card.Text>
				<Card.Text style={{ textAlign: "left", fontSize: "11px", fontStyle: "italic", color: "lightgray" }}>
					{languages}
				</Card.Text>

				<Button className="button-gh" variant="primary" href={ghLink} target="_blank">
					<BsGithub /> &nbsp;
						GitHub
				</Button>

				{"\n"}
				{"\n"}
			</Card.Body>
		</Card>
	);
}
export default ProjectCard;