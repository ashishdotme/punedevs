import {SAVE_USER} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch(action.type){
    case SAVE_USER:
      console.log(state);
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}