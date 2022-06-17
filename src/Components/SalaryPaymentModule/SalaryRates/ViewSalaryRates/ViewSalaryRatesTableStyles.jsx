import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  Box: {
    width: "100%",
    backgroundColor: "#d7dde0",
    padding: 6,
  },
  topic: {
    fontSize: "30px",
    color: "#880E4F",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  search: {
    marginLeft: 50,
    color: "d7dde0",
    padding: 5,
    border: "2px solid #3f51b5",
    borderRadius: 5,
    backgroundColor: "#d7dde0",
  },
  table: {
    minWidth: 700,
  },
  paper: {
    width: "60%",
    position: "relative",
    marginLeft: "20%",
    marginBottom: "1%",
  },
  btngrid: {
    marginLeft: "20%",
    marginBottom: "1%",
  },
  btn: {
    backgroundColor: "#EC407A",
    "&:hover": {
      color: "#d7dde0",
      backgroundColor: "#757575",
    },
  },
}));

export default useStyles;
