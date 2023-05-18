import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Socials from "./Socials";
import logo from "../assets/sLogo.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section id="footer">
        <div className="footer-copywright">
          <span>Copyright © {year}</span>
        </div>
        <span>
          Inspired by&nbsp;
          <a href="https://react-portfolio-template.netlify.app/">
            Chetan Verma
          </a>
          &nbsp;and&nbsp;
          <a href="https://sajib.vercel.app/">
            Sajib
          </a>
        </span>
    </section>
  );
}

export default Footer