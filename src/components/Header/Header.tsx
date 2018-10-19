import * as React from 'react';
import { Translate } from 'react-i18nify';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import logo from './../../assets/images/logo.svg';

const navbarStyle = {
  alignItems: 'center',
  borderBottom: '1px solid #e8e8e8',
  display: 'flex',
  height: '72px',
}

const brandStyle = {
  marginRight: '1.5rem',
}

export const Header: React.SFC<{}> = (props :any) => {
  return (
    <nav style={navbarStyle} className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img style={brandStyle} src={logo} height="38" />
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              <Translate value="navigation.home" />
            </Link>
            <Link className="navbar-item" to="/history">
              <Translate value="navigation.history" />
            </Link>
          </div>

          <div className="navbar-end">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}