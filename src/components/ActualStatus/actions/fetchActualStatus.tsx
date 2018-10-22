import { api } from '../../../common/api';
import { actionTypes } from '../../../common/constants/actionTypes';

const fetchActualStatusRequest = () => ({
  type: actionTypes.FETCH_ACTUAL_STATUS_REQUEST,
});

const fetchActualStatusFailed = (error: any) => ({
  payload: error,
  type: actionTypes.FETCH_ACTUAL_STATUS_FAILED,
});

const fetchActualStatusCompleted = (actualStatus: any) => ({
  payload: actualStatus,
  type: actionTypes.FETCH_ACTUAL_STATUS_COMPLETED,
});

export const fetchActualStatusAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchActualStatusRequest());
      
      return await api.fetchActualStatus()
        .then((actualStatus) => (
          dispatch(fetchActualStatusCompleted(actualStatus))
        ));
    } catch (e) {
      dispatch(fetchActualStatusFailed(e));
    }
  };
}