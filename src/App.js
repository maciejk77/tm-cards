import { ThemeProvider } from 'react-jss';
import Form from './components/Form';
import List from './components/List';
import TotalCredit from './components/TotalCredit';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minWidth: '320px' }}>
        <Form />
        <List />
        <TotalCredit />
      </div>
    </ThemeProvider>
  );
};

export default App;
