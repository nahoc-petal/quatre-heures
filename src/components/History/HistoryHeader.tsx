// Stateless component that returns the detailed status header
import * as React from 'react';
import { Translate } from 'react-i18nify';

const legendStyle = {
  backgroundColor: '#fafafa',
  border: '1px solid #e8e8e8',
  height: '56px',
  marginBottom: 0,
  padding: '0 1.5rem',
  width: '100%',
};

export const HistoryHeader: React.SFC = () => (
  <header style={legendStyle} className="level">
    <div className="level-left">
      <Translate value="detailedStatus.currentStatusByService" />
    </div>
  </header>
);