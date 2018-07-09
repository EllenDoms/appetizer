import { SET_PHASE, SET_SUBMIT } from './types';

import { databaseContactForm } from "../config/firebase";

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
