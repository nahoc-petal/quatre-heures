import * as React from 'react';
import { Translate } from 'react-i18nify';
import { ShowMore } from '../../components/ShowMore/ShowMore';
import { 
  ActualStatus, 
  DetailedStatus, 
  History, 
  Notification, 
} from './../../components';
import { getStatus } from './StatusPage.service';

export class StatusPage extends React.Component {

  state = {
    isLoadingMore: false,
    services: null,
  };

  async componentDidMount() {
    const services = await getStatus();

    this.setState({
      services,
    });
  }

  loadMore = () => {
    this.setState({
      isLoadingMore: true,
    });
  }

  render() {
    const {
      isLoadingMore,
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

        <section className="section">
          <div className="container">
            <DetailedStatus 
              services={services}
            />
            {services &&
              <React.Fragment>
                <br/>
                <ShowMore
                  onClickHandler={this.loadMore} 
                  isLoading={isLoadingMore}
                />
              </React.Fragment>
            }
          </div>
        </section>

        <div className="container">
          <div className="columns is-gapless">
            <div className="column is-half">
              <History />
            </div>
            <div className="column is-half">
              <History />
            </div>
          </div>
        </div>
      </section>
    );
  }
}