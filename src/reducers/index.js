import { FETCH_CARDS, SELECTED_CARDS } from '../constants';

const initialState = {
  cards: [],
  selectedCards: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS:
      return { ...state, cards: payload };
    case SELECTED_CARDS:
      return { ...state, selectedCards: payload };

    default:
      return state;
  }
};

export default rootReducer;
