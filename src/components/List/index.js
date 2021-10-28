import { useSelector, useDispatch } from 'react-redux';
import { toggleCardSelected } from '../../actions';
import useStyles from './styles';

const List = () => {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards);
  const {
    wrapper,
    container,
    containerSelected,
    listContainer,
    title,
    list,
    listItem,
    value,
    listItemButton,
    rulesText,
  } = useStyles();

  return cards.map(
    ({
      id,
      name,
      apr,
      balance_months,
      purchase_months,
      credit_available,
      rules,
      selected,
    }) => (
      <div className={wrapper} key={id}>
        <div
          className={selected ? containerSelected : container}
          data-testid="card"
        >
          <div className={listContainer}>
            <h2 className={title}>{name}</h2>
            <ul className={list}>
              <li className={listItem}>
                Apr: <span className={value}>{apr}%</span>
              </li>
              <li className={listItem}>
                Balance Transfer Offer Duration:{' '}
                <span className={value}>{balance_months} months</span>
              </li>
              <li className={listItem}>
                Purchase Offer Duration:{' '}
                <span className={value}>{purchase_months} months</span>
              </li>
              <li className={listItem}>
                Credit Available:{' '}
                <span className={value}>£{credit_available}</span>
              </li>
            </ul>
            <div
              className={listItemButton}
              data-testid="selected_card"
              onClick={() => dispatch(toggleCardSelected(id))}
            >
              {selected ? 'Remove' : 'Add'}
            </div>
          </div>
        </div>
        <div className={rulesText}>{rules}</div>
      </div>
    )
  );
};

export default List;
