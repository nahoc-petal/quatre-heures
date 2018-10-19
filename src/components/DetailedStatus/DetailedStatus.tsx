// Stateless component that returns detailed status of all the servers
import * as React from 'react';
import { DetailedStatusHeader } from './DetailedStatusHeader';
import { DetailedStatusServices } from './DetailedStatusServices';

interface IActualStatusProps {
  title: string;
  subtitle: string;
}

export const DetailedStatus: React.SFC<IActualStatusProps> = ({ title, subtitle }) => (
  <section className="section">
    <div className="container">
      <DetailedStatusHeader />
      <DetailedStatusServices />
    </div>
  </section>
);