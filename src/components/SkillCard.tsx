import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";

interface SkillCardProps {
	index: string,
	name: string,
	logo: string
}

const SkillCard = ({ index, name, logo }: SkillCardProps) => {
	return (
		<Card className="no-border" key={index}>
			<div className="skill-logo">
				<img src={logo} alt="logo" />
			</div>
			{/* <FontAwesomeIcon icon={faLink} /> */}
		</Card>
	)
}

export default SkillCard;