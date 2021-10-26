import { FETCH_CARDS, TOGGLE_SELECTED_CARD } from '../constants';

export const getCardsData = (cards) => ({
  type: FETCH_CARDS,
  payload: cards,
});

export const toggleCardSelected = (id) => ({
  type: TOGGLE_SELECTED_CARD,
  payload: id,
});
