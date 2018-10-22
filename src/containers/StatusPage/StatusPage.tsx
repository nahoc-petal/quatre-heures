import * as React from 'react';
import { I18n, Translate } from 'react-i18nify';
import { ShowMore } from '../../components/ShowMore/ShowMore';
import { renderHead } from '../../utils/renderHead';
import { 
  ActualStatusContainer, 
  DetailedStatus, 
  FutureMaintenances,
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

        {renderHead(I18n.t('navigation.home'))}

        <div className="container">
          <Notification
            message={<Translate value="welcomeMessage" />}
            type={'is-primary'}
          />
        </div>

        <ActualStatusContainer />

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
              <FutureMaintenances />
            </div>
          </div>
        </div>
      </section>
    );
  }
}