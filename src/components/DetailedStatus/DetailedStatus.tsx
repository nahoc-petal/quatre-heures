import * as React from 'react';
import { Loader } from '../Loader/Loader';
import { DetailedStatusHeader } from './DetailedStatusHeader';
import { DetailedStatusServices } from './DetailedStatusServices';

interface IDetailedStatus {
  services: any | null;
}

const loaderStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e8e8e8',
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  height: '80px',
  marginBottom: 0,
}

export const DetailedStatus: React.SFC<IDetailedStatus> = ({ services }) => (
  <React.Fragment>
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
  </React.Fragment>
);