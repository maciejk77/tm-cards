import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    container: {
      borderTop: `2px solid ${theme.baseColour2}`,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: theme.baseFonts,
      fontSize: 20,
      margin: '10px 2px 2px 2px',
      padding: 10,
    },
  }),
  { name: 'totalCredit' }
);
