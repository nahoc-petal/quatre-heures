import * as React from 'react';
// import { Link } from 'react-router-dom';

interface INotificationProps {
  message: string;
}

export const Notification: React.SFC<INotificationProps> = ({ message }) => {
  return (
    <div className="container">
      <div className="notification">
        <button className="delete" />
        {message}
      </div>
    </div>
  );
}