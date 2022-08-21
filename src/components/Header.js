import React from "react";
import Logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header--image" alt="??" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React</h4>
    </header>
  );
}
