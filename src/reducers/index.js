import { combineReducers } from 'redux';
import phasesReducer from './phasesReducer';
import { reducer as FormReducer} from 'redux-form'; //assign to alias FormReducer


const rootReducer = combineReducers({
  phases: phasesReducer,
  form: FormReducer
})

export default rootReducer;
