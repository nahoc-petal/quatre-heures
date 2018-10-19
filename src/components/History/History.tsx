import * as React from 'react';
import { HistoryHeader } from './HistoryHeader';
// import { Translate } from 'react-i18nify';

const historyStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 0,
  padding: '1.5rem',
}

export const History: React.SFC = () => (
  <section className="section">
    <div className="container">
      <HistoryHeader />
      <div style={historyStyle}>
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
    </div>
  </section>
)