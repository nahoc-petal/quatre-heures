import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';

const styles = StyleSheet.create({
  futureMaintenanceHeader: {
    backgroundColor: '#fafafa',
    border: '1px solid #e8e8e8',
    height: '56px',
    marginBottom: 0,
    padding: '0 1.5rem',
    width: '100%',
  },
});

export const FutureMaintenancesHeader: React.SFC = () => (
  <header className={`${css(styles.futureMaintenanceHeader)} level`}>
    <div className="level-left">
      <Translate value="labels.futureMaintenances" />
    </div>
  </header>
);