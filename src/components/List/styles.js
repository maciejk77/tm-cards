import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    grid: {
      display: 'grid',
      justifyContent: 'center',
    },
    wrapper: {
      display: 'grid',
      flexDirection: 'column',
      fontFamily: theme.baseFonts,
      maxWidth: '468px',
    },
    // duplication
    container: {
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 15,
      margin: 5,
      padding: 10,
    },
    containerSelected: {
      backgroundColor: theme.themeColour,
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 15,
      margin: 5,
      padding: 10,
    },
    // to refactor above
    listContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
    },
    list: {
      listStyleType: 'none',
      marginTop: -5,
      padding: 3,
    },
    listItem: {
      marginBottom: 2,
      padding: 2,
    },
    value: {
      fontWeight: 'bold',
    },
    listItemButton: {
      backgroundColor: theme.baseColour2,
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 10,
      color: theme.baseColour,
      padding: '8px 0px',
      textAlign: 'center',
      width: 100,
    },
    rulesText: {
      fontSize: 13,
      margin: '2px 8px 10px',
      textAlign: 'center',
    },
    '@media (min-width: 768px)': {
      grid: {
        gridTemplateColumns: '50% 50%',
      },
    },
    '@media (min-width: 992px)': {
      grid: {
        gridTemplateColumns: '33% 33% 33%',
      },
    },
    '@media (min-width: 1200px)': {
      grid: {
        gridTemplateColumns: '25% 25% 25% 25%',
      },
    },
  }),
  { name: 'list' }
);
