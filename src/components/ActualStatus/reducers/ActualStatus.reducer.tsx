import { actionTypes } from '../../../common/constants/actionTypes';

export const actualStatusReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_ACTUAL_STATUS_COMPLETED:
      return handleFetchActualStatusCompleted(state, action.payload);
    case actionTypes.FETCH_ACTUAL_STATUS_FAILED:
      return handleFetchActualStatusFailed(state, action.payload);
    default:
      return state;
  }
};

const handleFetchActualStatusCompleted = (state: any, payload: any) => (
  payload
);

const handleFetchActualStatusFailed = (state: any, payload: any) => (
  payload
);