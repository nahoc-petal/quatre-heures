import * as React from 'react';
// import { Link } from 'react-router-dom';

export const Footer: React.SFC<{}> = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Bell</strong> by <a href="#">04h11</a>.
        </p>
      </div>
    </footer>
  );
}