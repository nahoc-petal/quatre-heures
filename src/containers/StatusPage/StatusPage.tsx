import * as React from 'react';
import { Translate } from 'react-i18nify';
import { 
  ActualStatus, 
  DetailedStatus, 
  History, 
  Notification, 
} from './../../components';
import { getStatus } from './StatusPage.service';

export class StatusPage extends React.Component {

  state = {
    services: null,
  };

  async componentDidMount() {
    const services = await getStatus();

    this.setState({
      services,
    });
    console.log(services);
  }

  render() {
    const {
      services,
    } = this.state;

    return (
      <section className="section">

        <Notification
          message={<Translate value="welcomeMessage" />}
          type={'is-primary'}
        />

        <ActualStatus 
          title={'Everything running smoothly!'}
          subtitle={'Nothing to report here. Bell is up and running normally.'}
        />

        <DetailedStatus 
          services={services}
        />

        <History />
      </section>
    );
  }
}