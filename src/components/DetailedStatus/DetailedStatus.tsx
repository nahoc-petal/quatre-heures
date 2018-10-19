// Stateless component that returns detailed status of all the servers
import * as React from 'react';
import { Loader } from '../Loader/Loader';
import { DetailedStatusHeader } from './DetailedStatusHeader';
import { DetailedStatusServices } from './DetailedStatusServices';

const loaderStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  height: '80px',
  marginBottom: 0,
}

export const DetailedStatus: React.SFC<any> = ({ services }) => (
  <section className="section">
    <div className="container">
      <DetailedStatusHeader />
      {services ?
        <DetailedStatusServices 
          services={services}
        />
      :
        <Loader 
          size={'is-large'}
          style={loaderStyle}
        />
      }
    </div>
  </section>
);