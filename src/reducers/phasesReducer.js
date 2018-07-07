import { SET_PHASE } from "../actions/types";

const initialState = {
  phase: 1
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_PHASE:
    return {
      phase: action.payload
    }
    default:
      return state;
  }
}
