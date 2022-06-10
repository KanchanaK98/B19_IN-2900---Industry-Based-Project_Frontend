import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Rubik",
    margin: theme.spacing(0, 0, 2, 2),
  },
  paper: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 2, 2, 2),
    margin: theme.spacing(0, 0, 0, 4),
  },
  form: {
    padding: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(4, 4, 2, 2),
  },
  formLabel: {
    "& .MuiFormLabel-root": {
      fontWeight: 600,
      fontSize: 19,
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
