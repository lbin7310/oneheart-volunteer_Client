import { combineReducers } from 'redux';
import { ProgramInfoState, programInfoReducer as programInfo } from '../modules/ProgramInfo';

export interface StoreState {
  programInfo: ProgramInfoState;
}

export default combineReducers<StoreState>({
  programInfo
});
