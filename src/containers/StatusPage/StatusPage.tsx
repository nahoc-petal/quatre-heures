import * as React from 'react';
import { ActualStatus, DetailedStatus, Notification } from './../../components';

export class StatusPage extends React.Component {

  constructor(props :any) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <section className="section">

        <Notification
          message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit'}
        />

        <ActualStatus 
          title={'Smooth sailing!'}
          subtitle={'Nothing to report here. Slack is up and running normally.'}
        />

        <DetailedStatus 
          title={'Smooth sailing!'}
          subtitle={'Nothing to report here. Slack is up and running normally.'}
        />
      </section>
    );
  }
}