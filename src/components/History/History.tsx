import * as React from 'react';
// import { Translate } from 'react-i18nify';

export const History: React.SFC = () => (
  <section className="section">
    <div className="container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker is-primary" />
          <div className="timeline-content">
            <p className="heading">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <p className="heading">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)