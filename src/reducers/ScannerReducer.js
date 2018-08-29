import { CURRENT_ITEM } from "../actions/types";

const INITIAL_STATE = {
  currentItem: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CURRENT_ITEM:
      return { ...state, currentItem: JSON.stringify(action.payload) }
    default:
      return state;
  }
}
