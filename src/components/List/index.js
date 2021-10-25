import { useSelector } from 'react-redux';

const List = () => {
  const cards = useSelector(({ cards }) => cards);

  return cards.map(({ id, name, status }) => (
    <div key={id} style={styles.listWrapper}>
      <ul style={styles.list}>
        <li style={styles.listItem}>{name}</li>
        <li style={styles.listItem}>{status}</li>
      </ul>
    </div>
  ));
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
