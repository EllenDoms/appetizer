import { SET_PHASE, SET_SUBMIT } from "../actions/types";

const initialState = {
  phase: 1,
  submit: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_PHASE:
      return {
        ...state,
        phase: action.payload
      }
      case SET_SUBMIT:
        return {
          ...state,
          submit: true
        }
    default:
      return state;
  }
}
