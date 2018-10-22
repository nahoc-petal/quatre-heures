import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { I18n, Translate } from 'react-i18nify';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import logo from './../../assets/images/logo.svg';

const styles = StyleSheet.create({
  brandStyle: {
    marginRight: '1.5rem',
  },
  navbarStyle: {
    alignItems: 'center',
    borderBottom: '1px solid #e8e8e8',
    display: 'flex',
    height: '72px',
  },
});

export const Header: React.SFC = () => (
  <nav className={`${css(styles.navbarStyle)} navbar`} role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link title={I18n.t("navigation.home")} className="navbar-item" to="/">
          <img className={`${css(styles.brandStyle)}`} src={logo} height="38" alt="Logo" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link title={I18n.t("navigation.home")} className="navbar-item" to="/">
            <Translate value="navigation.home" />
          </Link>
          <Link title={I18n.t("navigation.history")} className="navbar-item" to="/history">
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