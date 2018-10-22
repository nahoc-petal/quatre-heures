import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer, Header } from './components';
import { HistoryPage, StatusPage } from './containers';

export const AppRouter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route component={Header} />
      <Switch>
        <Route exact={true} path="/" component={StatusPage} />
        <Route path="/status" component={StatusPage} />
        <Route path="/history" component={HistoryPage} />
      </Switch>
      <Footer />  
    </React.Fragment>
  </BrowserRouter>
);
