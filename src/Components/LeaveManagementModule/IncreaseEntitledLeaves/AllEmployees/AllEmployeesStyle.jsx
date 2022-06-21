import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    card: {
       margin:theme.spacing(0,2,2,0),
       background: "linear-gradient(45deg,#d9b3ff, #ffffff)",
       "& .MuiTypography-h7": {
        color: "Black",
        fontFamily: "Georgia, serif;",
        
      },
      "& .MuiTypography-h8": {
        color: "Black",
        fontFamily: "Georgia, serif;",
        
      },
      },

}));
export default useStyles;