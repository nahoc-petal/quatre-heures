import * as React from 'react';

const historyStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 0,
  padding: '1.5rem',
}

export const HistoryDetails: React.SFC = () => (
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
);