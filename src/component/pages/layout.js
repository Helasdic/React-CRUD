import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg button-border navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Exercise
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/items">
                Items
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <Footer>
      <div className="container p-3 mt-5 border-top">
        <small className="d-block text-muted text-center">&copy 2023 - Web App</small>
      </div>
    </Footer>
  );
}
