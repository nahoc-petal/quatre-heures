import * as React from 'react';
import { legendLabels } from './constants';

interface IDetailedStatusServices {
  services: any;
}

const serviceStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 'none',
  marginBottom: 0,
  padding: '1.5rem',
}

/*
const serviceStyleGreen = {
  borderLeft: '4px solid #23d160',
} */

const externalLinkStyle = {
  fontSize: '12px',
};

const serviceDescriptionStyle = {
  maxWidth: 'calc(100% - 32px - 1.5rem)',
}

export const DetailedStatusServices: React.SFC<IDetailedStatusServices> = ({ services }) => (
  <div>
    {services.map((service: any, index: number) => {
      return(
        <div key={index} style={serviceStyle} className="level">
          <div style={serviceDescriptionStyle} className="level-left">
            <div>
              <a title="Voir sur Jira" target="_blank" href="#">
                {service.data.title}&nbsp;
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
      );
    })}
  </div>
);