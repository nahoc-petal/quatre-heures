import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Translate } from 'react-i18nify';

interface IFilterByNameProps {
  handleOnChange: any;
}

const styles = StyleSheet.create({
  searchInputStyle: {
    maxWidth: '300px',
  }
});

export const FilterByName: React.SFC<IFilterByNameProps> = ({ handleOnChange }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">      
        <Translate value="filters.searchByName" />
      </label>
    </div>
    <div className="field-body">
      <div className={`${css(styles.searchInputStyle)} field`}>
        <p className="control has-icons-right">
          <input 
            className="input is-rounded" 
            type="text" 
            onChange={e => handleOnChange(e.target.value)}
            placeholder="Search" 
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
        </p>
      </div>
    </div>
  </div>
);