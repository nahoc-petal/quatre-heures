
import * as React from 'react';
import { I18n, Translate } from 'react-i18nify';

const changeLanguage = () => {
  I18n._locale === 'en' ? I18n.setLocale('fr') : I18n.setLocale('en');
}

export const LanguageSwitcher: React.SFC = () => (
  <a 
    className="navbar-item"
    onClick={changeLanguage}
  >
    <Translate value="alternateLanguage" />
  </a>
)