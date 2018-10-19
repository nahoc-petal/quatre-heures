import * as React from 'react';
import { HistoryDetails } from './HistoryDetails';
import { HistoryHeader } from './HistoryHeader';

export const History: React.SFC = () => (
  <section className="section">
    <div className="container">
      <HistoryHeader />
      <HistoryDetails />
    </div>
  </section>
)