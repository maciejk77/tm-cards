import Form from './components/Form';
import List from './components/List';
import { useSelector } from 'react-redux';

const App = () => {
  console.log(useSelector((state) => state));

  return (
    <div>
      <Form />
      <List />
      {/* <div>SUM</div> */}
    </div>
  );
};

export default App;
