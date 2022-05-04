import { makeStyles } from '@material-ui/core/styles';
import {  red, yellow } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
  },
}));
