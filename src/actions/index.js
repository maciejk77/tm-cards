import { FETCH_CARDS } from '../constants';

export const getCardsData = (cards) => ({
  type: FETCH_CARDS,
  payload: cards,
});
