import { SET_PHASE } from './types';

import { databaseContactForm } from "../config/firebase";

export function setActivePhase(phase) {
  return {
    type: SET_PHASE,
    payload: phase
  }
}

export function sendContactForm(values) {
  return databaseContactForm.push(values)
  .then(data => console.log(values, data))
  .catch(error => console.log('BAD', error))
}
