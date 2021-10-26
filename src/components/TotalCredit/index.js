import { useSelector } from 'react-redux';
import { totalCredit } from '../../helpers';

const TotalCredit = () => {
  const cards = useSelector(({ cards }) => cards);

  return (
    <div>
      <div>Total Credit {totalCredit(cards)}</div>
    </div>
  );
};

export default TotalCredit;
