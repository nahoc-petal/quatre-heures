import * as React from 'react';
import { Translate } from 'react-i18nify';

export const FilterByStatus: React.SFC = () => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">      
        <Translate value="filters.searchByStatus" />
      </label>
    </div>
    <div className="field-body">
      <div className="field-body">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);