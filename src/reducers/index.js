import {
  FETCH_CARDS,
  SELECTED_CARDS,
  SET_CUSTOMER_DATA,
  INITIAL_DATA,
} from '../constants';

const initialState = {
  cards: [],
  selectedCards: [],
  customer: INITIAL_DATA,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CUSTOMER_DATA:
      return { ...state, customer: payload };
    case FETCH_CARDS:
      return { ...state, cards: payload };
    case SELECTED_CARDS:
      return { ...state, selectedCards: payload };

    default:
      return state;
  }
};

export default rootReducer;
