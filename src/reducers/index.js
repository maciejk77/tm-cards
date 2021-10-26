import { FETCH_CARDS, TOGGLE_SELECTED_CARD } from '../constants';

const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  const findItem = () => state.cards.find(({ id }) => id === payload);
  const filterItems = () => state.cards.filter(({ id }) => id !== payload);

  switch (type) {
    case FETCH_CARDS:
      return { ...state, cards: payload };
    case TOGGLE_SELECTED_CARD:
      return {
        ...state,
        cards: [
          ...filterItems(),
          {
            ...findItem(),
            selected: !findItem().selected,
          },
        ].sort((a, b) => {
          return a.id - b.id;
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
