import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:8080/';

const App = () => {
  const [data, setData] = useState([]);

  console.log(data);

  const fetchCards = async () => {
    const request = await fetch(BASE_URL);
    const { cards } = await request.json();
    setData(cards);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return <div>Learn React</div>;
};

export default App;
