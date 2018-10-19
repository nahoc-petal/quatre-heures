// Stateless component that returns the detailed status header
import * as React from 'react';
import { legendLabels } from './constants';

const serviceStyle = {
  border: '1px solid #e8e8e8',
  borderTop: 'none',
  marginBottom: 0,
  padding: '1.5rem',
}

export const DetailedStatusServices: React.SFC = () => (
  <div>
    <div style={serviceStyle} className="level">
      <div className="level-left">
        <div>
          <h3 className="subtitle">Login/SSO</h3>
          <h4>No issues</h4>
        </div>
      </div>
      <div className="level-right">
        <span className={`icon is-medium ${legendLabels[0].color}`}>
          <i className={`fas fa-lg ${legendLabels[0].icon}`} />
        </span>
      </div>
    </div>
    <div style={serviceStyle} className="level">
      <div className="level-left">
        <div>
          <h3 className="subtitle">Connectivity</h3>
          <h4>No issues</h4>
        </div>
      </div>
      <div className="level-right">
        <span className={`icon is-medium ${legendLabels[0].color}`}>
          <i className={`fas fa-lg ${legendLabels[0].icon}`} />
        </span>
      </div>
    </div>
  </div>
);