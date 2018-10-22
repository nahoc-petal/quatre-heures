import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';
import { legendLabels } from './constants';

const styles = StyleSheet.create({
  legendLabelStyle: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: '2rem',
  },
  legendStyle: {
    backgroundColor: '#fafafa',
    border: '1px solid #e8e8e8',
    height: '56px',
    marginBottom: 0,
    padding: '0 1.5rem',
    width: '100%',
  },  
});

export const DetailedStatusHeader: React.SFC = () => (
  <header className={`${css(styles.legendStyle)} level`}>
    <div className="level-left">
      <Translate value="detailedStatus.currentStatusByService" />
    </div>
    <div className="level-right">
      {legendLabels.map((legendLabel, index) => (
        <label className={`${css(styles.legendLabelStyle)}`} key={index}>
          <span className={`icon is-medium ${legendLabel.color}`}>
            <i className={`fas fa-lg ${legendLabel.icon}`} />
          </span>
          &nbsp;{legendLabel.name}
        </label>
      ))}
    </div>
  </header>
);