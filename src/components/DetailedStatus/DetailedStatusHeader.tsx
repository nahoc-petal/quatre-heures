// Stateless component that returns the detailed status header
import * as React from 'react';
import { I18n } from 'react-i18nify';
import { legendLabels } from './constants';

const legendStyle = {
  backgroundColor: '#fafafa',
  border: '1px solid #e8e8e8',
  height: '56px',
  marginBottom: 0,
  padding: '0 1.5rem',
  width: '100%',
};

const legendLabelStyle = {
  alignItems: 'center',
  display: 'flex',
  marginLeft: '2rem',
};

export const DetailedStatusHeader: React.SFC = () => (
  <header style={legendStyle} className="level">
    <div className="level-left">{I18n.t('application.title')}</div>
    <div className="level-right">
      {legendLabels.map((legendLabel, index) => {
        return(
          <label style={legendLabelStyle} key={index}>
            <span className={`icon is-medium ${legendLabel.color}`}>
              <i className={`fas fa-lg ${legendLabel.icon}`} />
            </span>
            &nbsp;{legendLabel.name}
          </label>
        );
      })}
    </div>
  </header>
);