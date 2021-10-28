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
      maxWidth: theme.tablet,
      padding: 10,
    },
    formGroup: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    formItem: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 2,
      outline: 'none',
      margin: '5px 0',
      width: '100%',
    },
    label: {
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: 5,
      width: 120,
    },
    input: {
      border: `1px solid ${theme.themeColour2}`,
      borderRadius: 8,
      outline: 'none',
      padding: 5,
      width: '59%',
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
