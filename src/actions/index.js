import { SET_BLOCK, SET_PHASE, SET_SUBMIT, SET_SUBMIT_WORKSHOP, SET_TEST_STEP } from './types';

import { databaseContactForm } from "../config/firebase";
import { databaseWorkshopForm } from "../config/firebase";

export function setActiveBlock(block) {
  return {
    type: SET_BLOCK,
    payload: block
  }
}

export function setActivePhase(phase) {
  return {
    type: SET_PHASE,
    payload: phase
  }
}

export function sendContactForm(values) {
  return databaseContactForm.push(values)
  .then(data => {
    return {
      type: SET_SUBMIT
    }
  })
  .catch(error => console.log('BAD', error))
}

export function sendWorkshopForm(values) {
  return databaseWorkshopForm.push(values)
  .then(data => {
    return {
      type: SET_SUBMIT_WORKSHOP
    }
  })
  .catch(error => console.log('BAD', error))
}

export function setFormStep(step, answer) {
  return {
    type: SET_TEST_STEP,
    payload: answer,
    key: step,

  }
}

export function sendTipsForm(values) {

}
