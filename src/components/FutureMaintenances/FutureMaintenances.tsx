import * as React from 'react';
import { FutureMaintenancesDetails } from './FutureMaintenancesDetails';
import { FutureMaintenancesHeader } from './FutureMaintenancesHeader';

export const FutureMaintenances: React.SFC = () => (
  <React.Fragment>
    <FutureMaintenancesHeader />
    <FutureMaintenancesDetails />
  </React.Fragment>
)