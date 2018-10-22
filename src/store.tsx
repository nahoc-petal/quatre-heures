import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { actualStatusReducer } from './components/ActualStatus/reducers/ActualStatus.reducer';

// This is the global state interface
export interface IState {
  actualStatus: any;
};

const state = combineReducers<IState>({
  actualStatus: actualStatusReducer,
});

export const store: Store<IState> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  )
);