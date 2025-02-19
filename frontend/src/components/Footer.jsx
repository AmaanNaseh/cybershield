import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 left-0 w-full bg-gray-300 flex flex-col gap-4 items-center justify-evenly py-4">
      <ul className="inline-flex gap-4 flex-wrap font-semibold my-2 mb-8">
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/attributions"}>
          <li>Attributions</li>
        </Link>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <li>GitHub Repo</li>
        </a>
      </ul>
      <p className="text-center mb-2">
        @{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
