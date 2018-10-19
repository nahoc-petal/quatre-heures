// Stateless component that returns the actual status of all the servers
import * as React from 'react';

interface IActualStatusProps {
  title: string;
  subtitle: string;
}

export const ActualStatus: React.SFC<IActualStatusProps> = ({ title, subtitle }) => (
  <div className="hero has-text-centered">
    <div className="hero-body">
      <div className="container">
        <img src="https://status.slack.com/img/v2/Ok@2x.png" width="197" height="188" />
        <h1 className="title">
          {title}
        </h1>
        <h2 className="subtitle">
          {subtitle}
        </h2>
      </div>
    </div>
  </div>
);