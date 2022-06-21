import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
    "& .MuiTypography-h5": {
      fontFamily: "Rubik",
      margin: theme.spacing(0, 0, 0.6, 2),
    },
  },
  card1: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  icon1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      fontSize: theme.spacing(15),
    },
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  card2: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  icon2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      fontSize: theme.spacing(8),
    },
  },
}));
