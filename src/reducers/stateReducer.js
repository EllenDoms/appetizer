import { SET_BLOCK, SET_PHASE, SET_SUBMIT, SET_SUBMIT_WORKSHOP, ADD_FORM_COUNT, SET_TIPS_STEP, SET_TIPS_COMPANY, SET_SUBMIT_TIPS } from "../actions/types";

const initialState = {
  phase: 1,
  submit_contact: false,
  submit_workshop: false,
  submit_tips: false,
  tipsActiveStep: 0,
  tipsCompany: "",
  tipsForm: [ ],
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
    case ADD_FORM_COUNT:
      return {
        ...state,
        tipsActiveStep: action.payload
      }
    case SET_TIPS_STEP:
      return {
        ...state,
        tipsForm: [...state.tipsForm, action.payload]
      }
      case SET_TIPS_COMPANY:
        return {
          ...state,
          tipsCompany: action.payload
        }
    case SET_SUBMIT_TIPS:
      return {
        ...state,
        submit_tips: true
      }
    default:
      return state;
  }
}
