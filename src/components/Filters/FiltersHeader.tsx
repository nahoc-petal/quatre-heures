import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';

const styles = StyleSheet.create({
  legendStyle: {
    backgroundColor: '#fafafa',
    border: '1px solid #e8e8e8',
    height: '56px',
    marginBottom: 0,
    padding: '0 1.5rem',
    width: '100%',
  },
});

export const FiltersHeader: React.SFC = () => (
  <header className={`${css(styles.legendStyle)} level`}>
    <div className="level-left">
      <Translate value="labels.filters" />
    </div>
  </header>
);