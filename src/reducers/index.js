import { combineReducers } from 'redux';
import stateReducer from './stateReducer';
import { reducer as FormReducer} from 'redux-form'; //assign to alias FormReducer


const rootReducer = combineReducers({
  state: stateReducer,
  form: FormReducer
})

export default rootReducer;
