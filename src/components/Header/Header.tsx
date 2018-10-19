import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg';

const navbarStyle = {
  borderBottom: '1px solid #e8e8e8',
  height: '72px',
}

const brandStyle = {
  marginRight: '3rem',
}

export const Header: React.SFC<{}> = (props :any) => {
  return (
    <nav style={navbarStyle} className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div style={brandStyle} className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} height="28" />
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/history">History</Link>
          </div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/">English</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}