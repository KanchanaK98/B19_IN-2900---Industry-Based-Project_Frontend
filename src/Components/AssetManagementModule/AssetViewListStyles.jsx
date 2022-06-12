// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//  paper : {
//     borderRadius: theme.spacing(4),
//     padding : theme.spacing(0.7, 2, 2, 2),
//     backgroundColor: '#EDEADE',
//     margin: theme.spacing(4)
//  },
//  topics:{
//     marginLeft:theme.spacing(4),
//     marginRight:theme.spacing(4),
//     marginTop:theme.spacing(2),
//  },
//  tableHead : {
//      "& .MuiTypography-root" : {
//         fontFamily: 'Source Sans Pro',
//         fontSize: "18px",
//         color: "rgba(4, 8, 91, 0.8)"
//      },
//      "& .MuiTableCell-root" : {
//         // borderLeft: "1px solid",
//          borderBottom: "none",
//          //marginBottom: theme.spacing(0),
//          paddingBottom: theme.spacing(0)
//      }
//  },
//  avatar : {
//      height: theme.spacing(4),
//      width: theme.spacing(4),
//  },
//  tableRow : {
//     "& .MuiTypography-root" : {
//         fonFamily: 'Signika Negative',
//         //color: 'red'
//      },
//  }
// }));

// export default useStyles;


import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  Box: {
    width: "100%",
    backgroundColor: "#d7dde0",
    padding: 4,
  },
  topic: {
    fontSize: "30px",
    color: "#0288d1",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
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
    paddingLeft: 50,
  },
}));

export default useStyles;

