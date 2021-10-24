import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';

const useData = () => {
  const [data, setData] = useState([]);

  const fetchCards = async () => {
    const response = await fetch(BASE_URL);
    const { cards } = await response.json();
    setData(cards);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return { data };
};

export default useData;
