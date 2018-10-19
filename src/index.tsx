import 'bulma-timeline/dist/css/bulma-timeline.min.css'
import 'bulma/css/bulma.css'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18n } from 'react-i18nify';
import { missingTranslation, strings } from './i18n';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';

I18n.setTranslations(strings);
I18n.setLocale('fr');
I18n.setHandleMissingTranslation(missingTranslation);

ReactDOM.render(
  <AppRouter />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();  