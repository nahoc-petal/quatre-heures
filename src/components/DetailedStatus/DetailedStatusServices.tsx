// Stateless component that returns the detailed status header
import * as React from 'react';
import { legendLabels } from './constants';

const serviceStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 'none',
  marginBottom: 0,
  padding: '1.5rem',
}

const externalLinkStyle = {
  fontSize: '12px',
};

export const DetailedStatusServices: React.SFC = () => (
  <div>
    <div style={serviceStyle} className="level">
      <div className="level-left">
        <div>
          <a title="Voir sur Jira" target="_blank" href="#">
            Login/SSO&nbsp;
            <span style={externalLinkStyle} className="icon">
              <i className="fas fa-external-link-alt" />
            </span>
          </a>
          <p>
            <small>No issues</small>
          </p>
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
          <a title="Voir sur Jira" target="_blank" href="#">
            Login/SSO&nbsp;
            <span style={externalLinkStyle} className="icon">
              <i className="fas fa-external-link-alt" />
            </span>
          </a>
          <p>
            <small>No issues</small>
          </p>
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