import React from "react";
import TwitterIcon from "../images/social/Twitter Icon.svg";
import FacebookIcon from "../images/social/Facebook Icon.svg";
import InstagramIcon from "../images/social/Instagram Icon.svg";
import GitHubIcon from "../images/social/GitHub Icon.svg";

export default function Footer() {
  return (
    <div className="Footer">
      {/* <a href="https://twitter.com"><img className="info__social__mailicon" src={TwitterIcon} alt=""  /></a>
    <a href="https://Facebook.com"><img className="info__social__mailicon" src={FacebookIcon} alt=""  /></a>
    <a href="https://Instagram.com"><img className="info__social__mailicon" src={InstagramIcon} alt=""  /></a> */}
      <a href="https://github.com/FoivosNektariosPanagi">
        <img className="info__social__mailicon" src={GitHubIcon} alt="" />
      </a>
    </div>
  );
}
