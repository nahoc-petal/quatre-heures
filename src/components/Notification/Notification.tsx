import * as React from 'react';
// import { Link } from 'react-router-dom';

type NotificationTypes = "is-primary" | "is-danger";

interface INotificationProps {
  message: JSX.Element;
  type?: NotificationTypes,
}

export const Notification: React.SFC<INotificationProps> = ({ message, type }) => {
  return (
    <div className="container">
      <div className={`notification ${type}`}>
        <button className="delete" />
        {message}
      </div>
    </div>
  );
}