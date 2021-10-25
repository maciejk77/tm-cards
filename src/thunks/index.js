import { getCardsData } from '../actions';
import { BASE_URL } from '../constants';
import { filter } from '../helpers';

export const updateStoreData = (customer) => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const { cards } = await response.json();
  const filteredCards = await filter(customer, cards);
  dispatch(getCardsData(filteredCards));
};
