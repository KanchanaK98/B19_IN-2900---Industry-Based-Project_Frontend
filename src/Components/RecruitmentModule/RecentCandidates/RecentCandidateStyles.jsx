import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Rubik",
    margin: theme.spacing(0, 0, 2, 2),
  },
  paper: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 0, 2, 2),
  },
  candidate: {
    marginTop: theme.spacing(2),
  },
  name: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTypography-title" : {
        fontFamily: "Rubik",
        color: "rgba(61, 58, 59, 0.9)"
    },
    "& .MuiTypography-body" : {
        fontFamily: "Rubik",
        color: "rgba(61, 58, 59, 0.5)"
    }
  },
  status: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& .MuiTypography-body" : {
        fontFamily: "Rubik",
        color: "rgba(30, 171, 0, 0.8)"
    }
  },
}));

export default useStyles;
