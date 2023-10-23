import React from "react";
import image from "../images/foivos_img.png";
import MailIcon from "../images/Mail.svg";
import LinkedinIcon from "../images/linkedin.svg";

export default function Info() {
  return (
    <div className="Info">
      <img className="info__image" src={image} alt="anoulla" />
      <h1 className="info__name">Foivos N. P.</h1>
      <h3 className="info__job">Software Developer</h3>
      {/* <p>
        <a className="info__website" href="https://www.google.com">
          Foivos.website
        </a>
      </p> */}
      <div className="info__social">
        <button className="info__social__btn info__social__btn__mail">
          <img className="info__social__mailicon" src={MailIcon} alt="" />
          <a
            className="info__social__maillnk"
            href="mailto:fivospanagi@hotmail.com"
          >
            Email
          </a>
        </button>
        <button className="info__social__btn info__social__btn__linkedin">
          <img
            className="info__social__linkedinIcon"
            src={LinkedinIcon}
            alt=""
          />
          <a
            className="info__social__linkedinLink"
            href="https://www.linkedin.com/in/foivos-panagi-934639266/"
          >
            Linkedin
          </a>
        </button>
      </div>
    </div>
  );
}
