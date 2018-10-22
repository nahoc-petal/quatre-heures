import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';

const styles = StyleSheet.create({
  externalLink: {
    fontSize: '10px',
  },
  historyStyle: {
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderRight: 0,
    borderTop: 0,
    padding: '1.5rem',
    position: 'relative',
  },
  more: {
    background: 'linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 44%,rgba(255,255,255,0) 100%)',
    bottom: 0,
    height: '10rem',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  tagGroup: {
    margin: '0.5rem 0',
  },
});

export const HistoryDetails: React.SFC = () => (
  <div className={`${css(styles.historyStyle)}`}>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker is-success" />
        <div className="timeline-content">
          <a title="Voir sur Jira" className="heading" target="_blank" href="#">
            [RÉSOLU] Incident: bris de matériel&nbsp;
            <span className={`${css(styles.externalLink)} icon`}>
              <i className="fas fa-external-link-alt" />
            </span>
          </a>
          <div className={`${css(styles.tagGroup)} tags`}>
            <span className={`${css(styles.noMarginBottom)} tag`}>One</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Two</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Three</span>
          </div>
          <p>Description de l’opération. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker is-warning" />
        <div className="timeline-content">
          <a title="Voir sur Jira" className="heading" target="_blank" href="#">
            [RÉUSSIE] Mise à jour portail web&nbsp;
            <span className={`${css(styles.externalLink)} icon`}>
              <i className="fas fa-external-link-alt" />
            </span>
          </a>
          <div className={`${css(styles.tagGroup)} tags`}>
            <span className={`${css(styles.noMarginBottom)} tag`}>One</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Two</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Three</span>
          </div>
          <p>Description de l’opération. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker is-danger" />
        <div className="timeline-content">
          <a title="Voir sur Jira" className="heading" target="_blank" href="#">
            [RÉUSSIE] Mise à jour portail web&nbsp;
            <span className={`${css(styles.externalLink)} icon`}>
              <i className="fas fa-external-link-alt" />
            </span>
          </a>
          <div className={`${css(styles.tagGroup)} tags`}>
            <span className={`${css(styles.noMarginBottom)} tag`}>One</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Two</span>
            <span className={`${css(styles.noMarginBottom)} tag`}>Three</span>
          </div>
          <p>Description de l’opération. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </div>
    <div className={`${css(styles.more)}`} />
  </div>
);