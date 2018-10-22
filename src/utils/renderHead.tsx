import * as React from 'react';
import { Helmet } from 'react-helmet';
import { APP_SEPARATOR, APP_TITLE } from '../common/constants/appInfo';

export const renderHead = (title: string | JSX.Element) => (
  <Helmet>
    <title>{APP_TITLE} {APP_SEPARATOR} {title}</title>
  </Helmet>
);