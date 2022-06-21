import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({

    title: {
       
       
        "& .MuiTypography-h5":{
            fontSize:theme.spacing(5),
            fontFamily: "Rubik",
            color: "Black",

        }
       
      },
      step: {
        
        margin: theme.spacing(4, 0, 4, 4),
        "& .MuiTypography-h5":{
            fontFamily: "Rubik",

        }
      },
    card1: {
        background: "linear-gradient(45deg, rgb(255, 102, 153),	rgb(255, 204, 220))",
        // borderRadius: theme.spacing(4),
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
          fontSize: theme.spacing(3),
          fontFamily: "Kanit",
        },
      },
      card2: {
        background: "linear-gradient(45deg,rgb(255, 204, 0) ,	rgb(255, 255, 230))",
        // borderRadius: theme.spacing(4),
        padding: theme.spacing(2),
        "& .MuiTypography-body1": {
          color: "Black",
          fontSize: theme.spacing(3),
          fontFamily: "Kanit",
        },
        "& .MuiTypography-h2": {
          color: "Black",
          fontFamily: "Rubik",
         
        },
        "& .MuiSvgIcon-root": {
          color: "Black",
          fontSize: theme.spacing(9),
          fontWeight: 200,
        },
      },
      card3: {
        background: "linear-gradient(45deg,rgb(0, 179, 0), rgb(179, 255, 236))",
        // borderRadius: theme.spacing(4),
        padding: theme.spacing(2),
        "& .MuiTypography-body1": {
          color: "Black",
          fontSize: theme.spacing(3),
          fontFamily: "Kanit",
        },
        "& .MuiTypography-h2": {
          color: "Black",
          fontFamily: "Rubik",
          fontWeight: 100,
        },
        "& .MuiSvgIcon-root": {
          color: "Black",
          fontSize: theme.spacing(9),
          fontWeight: 200,
        },
      },
      card4:{
        padding:4,
        marginRight:4,
      },
      cardEmp: {
        background: "linear-gradient(45deg,#d9b3ff, #ffffff)",
        // borderRadius: theme.spacing(4),
        padding: theme.spacing(2),
        "& .MuiTypography-h2": {
          color: "black",
          fontFamily: "Rubik",
          fontWeight: 100,
        },
        "& .MuiSvgIcon-root": {
          color: "white",
          fontSize: theme.spacing(9),
          fontWeight: 200,
        },
        "& .MuiTypography-body1": {
          color: "black",
          fontSize: theme.spacing(3),
          fontFamily: "Kanit",
        },
      },
      large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        border: "3px solid black",
        marginRight: theme.spacing(4)
      }, 
      cardGuid: {
        background:  "#26004d",
        width:800,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: theme.spacing(4),
        
        // borderRadius: theme.spacing(4),
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
          fontSize: theme.spacing(3),
          fontFamily: "Kanit",
        },
      },
      icon:{
        "& .MuiSvgIcon-root": {
        
            fontSize: theme.spacing(30),
            fontWeight: 200,
            marginLeft: theme.spacing(35),
          },

      }
}));

export default useStyles;