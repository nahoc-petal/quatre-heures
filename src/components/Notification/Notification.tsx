import * as React from 'react';

type NotificationType = "is-primary" | "is-danger";

interface INotificationProps {
  message: JSX.Element;
  type?: NotificationType,
}

export class Notification extends React.Component<INotificationProps> {

  state = {
    visible: true,
  }

  closeNotification = () => {
    this.setState({ 
      visible: false,
    });
  }

  render() {
    const {
      visible,
    } = this.state;

    const {
      message,
      type,
    } = this.props;

    return (
      <React.Fragment>
        {visible &&
          <div className={`notification ${type}`}>
            <button 
              onClick={this.closeNotification}
              className="delete" 
            />
            {message}
          </div>
        }
      </React.Fragment>
    );
  }
}