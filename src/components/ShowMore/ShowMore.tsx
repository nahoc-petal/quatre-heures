import * as React from 'react';

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
      Show more
    </button>
  </div>
)