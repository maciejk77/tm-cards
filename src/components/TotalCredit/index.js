import { useSelector } from 'react-redux';
import { totalCredit } from '../../helpers';
import useStyles from './styles';

const TotalCredit = () => {
  const cards = useSelector(({ cards }) => cards);
  const { container } = useStyles();

  return cards.length ? (
    <div className={container}>
      <div>Total Credit</div>
      <div data-testid="total_credit">£{totalCredit(cards)}</div>
    </div>
  ) : (
    <div data-testid="total_credit" />
  );
};

export default TotalCredit;
