// Stateless component that returns detailed status of all the servers
import * as React from 'react';
import { DetailedStatusHeader } from './DetailedStatusHeader';
import { DetailedStatusServices } from './DetailedStatusServices';

export const DetailedStatus: React.SFC = () => (
  <section className="section">
    <div className="container">
      <DetailedStatusHeader />
      <DetailedStatusServices />
    </div>
  </section>
);