import React from "react";
import Button from "./Button";

import yourData from "../data/data.json";

interface SocialsProps {
    className?: String
}

const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;