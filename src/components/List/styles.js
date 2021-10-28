import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.baseFonts,
    },
    // duplication
    container: {
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 15,
      margin: 5,
      padding: 10,
      width: 286,
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      width: 286,
    },
  }),
  { name: 'list' }
);
