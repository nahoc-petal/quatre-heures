import * as React from 'react';
import { I18n } from 'react-i18nify';
import { ActualStatus, DetailedStatus, Notification } from './../../components';

export class StatusPage extends React.Component {

  constructor(props :any) {
    super(props);
    console.log(props);
  }

  public render() {

    console.log(I18n);

    return (
      <section className="section">

        <Notification
          message={I18n.t('application.title')}
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