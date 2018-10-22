import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { IState } from '../../store';
import { fetchActualStatusAction } from './actions/fetchActualStatus';
import { ActualStatusComponent } from './ActualStatus.component';

const mapStateToProps = (state: IState) => ({
  actualStatus: state.actualStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchActualStatus: () => dispatch(fetchActualStatusAction()),
});

export const ActualStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActualStatusComponent);