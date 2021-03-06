import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';

const styles = StyleSheet.create({
  historyHeader: {
    backgroundColor: '#fafafa',
    border: '1px solid #e8e8e8',
    borderRight: 0,
    height: '56px',
    marginBottom: 0,
    padding: '0 1.5rem',
    width: '100%',
  },
});

export const HistoryHeader: React.SFC = () => (
  <header className={`${css(styles.historyHeader)} level`}>
    <div className="level-left">
      <Translate value="labels.history" />
    </div>
  </header>
);