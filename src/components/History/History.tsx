import * as React from 'react';
import { HistoryDetails } from './HistoryDetails';
import { HistoryHeader } from './HistoryHeader';

export const History: React.SFC = () => (
  <React.Fragment>
    <HistoryHeader />
    <HistoryDetails />
  </React.Fragment>
)