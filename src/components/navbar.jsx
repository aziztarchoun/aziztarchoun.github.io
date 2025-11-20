import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          aslemaaaa
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class=""
                href="https://www.linkedin.com/in/aziz-tarchoun-1676b0216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="LinkedIn_icon.svg" alt="LinkedIn_icon" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class=""
                href="https://github.com/aziztarchoun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Github_icon.svg" alt="LinkedIn_icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
