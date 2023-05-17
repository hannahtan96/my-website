

import data from "../data/data.json";

const Socials = () => {
  return (
    <div className="flex flex-wrap col-gap">
				{data.socials.map((social, index) => (
					<div key={index} className="socials-button" onClick={() => window.open(social.link)}>
						{social.title}
					</div>
				))}
		</div>
  );
};

export default Socials;