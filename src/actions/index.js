import { SET_BLOCK, SET_PHASE, SET_SUBMIT, SET_SUBMIT_WORKSHOP } from './types';

import { databaseContactForm } from "../config/firebase";

export function setActiveBlock(block) {
  console.log(block)
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
