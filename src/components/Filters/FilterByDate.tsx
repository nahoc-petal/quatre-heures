import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';

const styles = StyleSheet.create({
  searchInputStyle: {
    maxWidth: '300px',
  },
});

export const FilterByDate: React.SFC = () => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">      
        <Translate value="filters.searchByDate" />
      </label>
    </div>
    <div className="field-body">
      <div className={`${css(styles.searchInputStyle)} field`}>
        <p className="level control has-icons-right">
          <input type="date" className="input is-rounded" />
          <span className="icon is-small is-right">
            <i className="fas fa-calendar" />
          </span>
        </p>
      </div>
      <div className={`${css(styles.searchInputStyle)} field`}>
        <p className="level control has-icons-right">
          <input type="date" className="input is-rounded" />
          <span className="icon is-small is-right">
            <i className="fas fa-calendar" />
          </span>
        </p>
      </div>
    </div>
  </div>
);