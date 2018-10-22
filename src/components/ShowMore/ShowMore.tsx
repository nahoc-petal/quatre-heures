import * as React from 'react';
import { Translate } from 'react-i18nify';

interface IShowMore {
  isLoading?: boolean;
  onClickHandler?: any;
}

export const ShowMore: React.SFC<IShowMore> = ({ isLoading, onClickHandler }) => (
  <div className="has-text-centered">
    <button 
      type="button" 
      onClick={onClickHandler}
      className={`button is-primary is-outlined ${isLoading && 'is-loading'}`}
      disabled={isLoading}
    >
      <Translate value="showMore" />
    </button>
  </div>
)