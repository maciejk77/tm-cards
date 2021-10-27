import { useSelector } from 'react-redux';
import { totalCredit } from '../../helpers';

const TotalCredit = () => {
  const cards = useSelector(({ cards }) => cards);

  return (
    <div>
      <div>
        Total Credit
        <span data-testid="total_credit">{totalCredit(cards)}</span>
      </div>
    </div>
  );
};

export default TotalCredit;
