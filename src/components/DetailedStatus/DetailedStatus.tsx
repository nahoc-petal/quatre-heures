import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Loader } from '../Loader/Loader';
import { DetailedStatusHeader } from './DetailedStatusHeader';
import { DetailedStatusServices } from './DetailedStatusServices';

interface IDetailedStatus {
  services: any | null;
}

const styles = StyleSheet.create({
  loaderStyle: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderTop: 'none',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: 'flex',
    height: '80px',
    justifyContent: 'center',
  }
});

export const DetailedStatus: React.SFC<IDetailedStatus> = ({ services }) => (
  <React.Fragment>
    <DetailedStatusHeader />
    {services ?
      <DetailedStatusServices 
        services={services}
      />
    :
      <div className={`${css(styles.loaderStyle)}`}>
        <Loader 
          size={'is-large'}
        />
      </div>
    }
  </React.Fragment>
);