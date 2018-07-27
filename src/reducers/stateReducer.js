import { SET_BLOCK, SET_PHASE, SET_SUBMIT, SET_SUBMIT_WORKSHOP, SET_TEST_STEP } from "../actions/types";

const initialState = {
  phase: 1,
  submit_contact: false,
  submit_workshop: false,
  testForm: [ ],
  block: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_BLOCK:
      return {
        ...state,
        block: action.payload
      }
    case SET_PHASE:
      return {
        ...state,
        phase: action.payload
      }
    case SET_SUBMIT:
      return {
        ...state,
        submit_contact: true
      }
    case SET_SUBMIT_WORKSHOP:
      return {
        ...state,
        submit_workshop: true
      }
    case SET_TEST_STEP:
      return {
        ...state,
        testForm: [...state.testForm, action.payload]
      }
    default:
      return state;
  }
}
