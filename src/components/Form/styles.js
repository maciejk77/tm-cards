import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    container: {
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.baseFonts,
      fontSize: 16,
      margin: 5,
      padding: 10,
    },
    formItem: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 2,
      outline: 'none',
      margin: '5px 0',
    },
    label: {
      alignSelf: 'center',
      display: 'flex',
      marginRight: 5,
      width: '45%',
    },
    input: {
      border: `1px solid ${theme.themeColour2}`,
      borderRadius: 8,
      outline: 'none',
      padding: 5,
      width: '55%',
    },
    button: {
      alignSelf: 'center',
      backgroundColor: theme.baseColour2,
      border: `1px solid ${theme.themeColour2}`,
      borderRadius: 10,
      color: theme.baseColour,
      fontSize: 18,
      margin: '15px 5px 5px 5px',
      padding: 10,
      textAlign: 'center',
      width: '100%',
    },
  }),
  { name: 'form' }
);
