import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Rubik",
    margin: theme.spacing(2, 0, 2, 2),
  },
  card1: {
    background: "linear-gradient(45deg, #37474f, #607d8b)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
    "& .MuiTypography-h2": {
      color: "white",
      fontFamily: "Rubik",
      fontWeight: 100,
    },
    "& .MuiSvgIcon-root": {
      color: "white",
      fontSize: theme.spacing(9),
      fontWeight: 200,
    },
    "& .MuiTypography-body1": {
      color: "white",
      fontSize: theme.spacing(4),
      fontFamily: "Kanit",
    },
  },
  card2: {
    background: "linear-gradient(45deg,#4e342e ,#a1887f)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
    "& .MuiTypography-body1": {
      color: "white",
      fontSize: theme.spacing(4),
      fontFamily: "Kanit",
    },
    "& .MuiTypography-h2": {
      color: "white",
      fontFamily: "Rubik",
      fontWeight: 100,
    },
    "& .MuiSvgIcon-root": {
      color: "white",
      fontSize: theme.spacing(9),
      fontWeight: 200,
    },
  },
  card3: {
    background: "linear-gradient(45deg,#880e4f, #d81b60)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
    "& .MuiTypography-body1": {
      color: "white",
      fontSize: theme.spacing(4),
      fontFamily: "Kanit",
    },
    "& .MuiTypography-h2": {
      color: "white",
      fontFamily: "Rubik",
      fontWeight: 100,
    },
    "& .MuiSvgIcon-root": {
      color: "white",
      fontSize: theme.spacing(9),
      fontWeight: 200,
    },
  },
  cardText: {
    //display: "flex",
    //flexDirection: "column",
    //alignItems: "flex-start",
    //justifyContent: "center",
    //fontFamily: "fantasy",
    //fontSize: "20",
    //color: "white",
  },
  cardIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
