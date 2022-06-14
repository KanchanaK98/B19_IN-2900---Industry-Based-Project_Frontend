import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyItems: "center",
  },
  card: {
    borderRadius: 15,
    marginBottom: 15,
    padding: 20,
    marginLeft: 9,
    maxWidth: 380,
    minWidth: 380,
    backgroundColor:"#787a7d"
   // backgroundImage: `linear-gradient(to right, rgba(170, 247, 250), rgba(30, 208, 214))`,
  },

  avatar: {},
}));

export default useStyles;
