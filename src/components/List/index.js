import { useSelector, useDispatch } from 'react-redux';
import { toggleCardSelected } from '../../actions';

const List = () => {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards);

  return cards.map(
    ({
      id,
      name,
      apr,
      balance_months,
      purchase_months,
      credit_available,
      selected,
    }) => (
      <div key={id} style={styles.listWrapper}>
        <ul style={styles.list}>
          <li style={styles.listItem}>{name}</li>
          <li style={styles.listItem}>APR: {apr}</li>
          <li style={styles.listItem}>
            Balance Transfer Offer Duration: {balance_months} months
          </li>
          <li style={styles.listItem}>
            Purchase Offer Duration: {purchase_months} months
          </li>
          <li style={styles.listItem}>Credit Available: £{credit_available}</li>
        </ul>
        <div onClick={() => dispatch(toggleCardSelected(id))}>
          {selected ? 'Remove' : 'Add'}
        </div>
      </div>
    )
  );
};

const styles = {
  listWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    border: '1px solid black',
    listStyleType: 'none',
    padding: 10,
    width: '50%',
  },
  listItem: {},
};

export default List;
