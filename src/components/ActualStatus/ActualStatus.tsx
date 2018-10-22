import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';

interface IActualStatusProps {
  title: string;
  subtitle: string;
}

const styles = StyleSheet.create({
  titleStyle: {
    padding: '1rem 0rem 0.5rem 0rem',
  }
});


export const ActualStatus: React.SFC<IActualStatusProps> = ({ title, subtitle }) => (
  <div className="hero has-text-centered">
    <div className="hero-body">
      <div className="container">
        <span className="icon is-large has-text-success">
          <i className="fas fa-3x fa-check-circle" />
        </span>
        <h1 className={`${css(styles.titleStyle)} title`}>
          {title}
        </h1>
        <h2 className="subtitle">
          {subtitle}
        </h2>
      </div>
    </div>
  </div>
);