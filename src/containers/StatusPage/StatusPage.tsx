import * as React from 'react';
import { Translate } from 'react-i18nify';
import { 
  ActualStatus, 
  DetailedStatus, 
  History, 
  Notification, 
} from './../../components';

export class StatusPage extends React.Component {

  public render() {
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

        <DetailedStatus />

        <History />
      </section>
    );
  }
}