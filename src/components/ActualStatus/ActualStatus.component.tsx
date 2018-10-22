import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';

const styles = StyleSheet.create({
  titleStyle: {
    padding: '1rem 0rem 0.5rem 0rem',
  }
});

interface IActualStatusComponentProps {
  fetchActualStatus(): any;
}

interface IActualStatusComponentState {
  actualStatus: any,
}

export class ActualStatusComponent extends React.Component<IActualStatusComponentProps, IActualStatusComponentState> {
  
  constructor(props: any) {
    super(props);
    this.state = { 
      actualStatus: null,
    };
  }

  componentDidMount = async() => {
    const actualStatus = await this.props.fetchActualStatus();
    console.log(actualStatus);
    this.setState({
      actualStatus: actualStatus.payload,
    });
  }

  render() {
    const {
      actualStatus,
    } = this.state;

    return (
      <div className="hero has-text-centered">
        {actualStatus &&
          <div className="hero-body">
            <div className="container">
              <span className="icon is-large has-text-success">
                <i className="fas fa-3x fa-check-circle" />
              </span>
              <h1 className={`${css(styles.titleStyle)} title`}>
                {actualStatus.title}
              </h1>
              <h2 className="subtitle">
                {actualStatus.subtitle}
              </h2>
            </div>
          </div>
        }
      </div>
    );
  }
};