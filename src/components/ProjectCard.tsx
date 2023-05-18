import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
	imgPath: string,
	isBlog: boolean,
	title: string,
	description: string,
	ghLink: string,
	demoLink?: string
}

const ProjectCard = ({ imgPath, isBlog, title, description, ghLink, demoLink }: ProjectCardProps) => {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					{description}
				</Card.Text>
				<Button className="button button-gh" variant="primary" href={ghLink} target="_blank">
					<BsGithub /> &nbsp;
					{isBlog ? "Blog" : "GitHub"}
				</Button>
				{"\n"}
			</Card.Body>
		</Card>
	);
}
export default ProjectCard;