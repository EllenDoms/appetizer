import { SET_BLOCK, SET_PHASE, SET_SUBMIT, SET_SUBMIT_WORKSHOP, SET_TIPS_STEP, SET_SUBMIT_TIPS } from './types';

import { databaseContactForm, databaseWorkshopForm, databaseTipsForm  } from "../config/firebase";

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
    type: SET_TIPS_STEP,
    payload: answer,
    key: step,

  }
}

export function sendTipsForm(values) {
  return databaseTipsForm.push(values)
    .then(data => {
      return {
        type: SET_SUBMIT_TIPS
      }
    })
    .catch(error => console.log('BAD', error))
}
