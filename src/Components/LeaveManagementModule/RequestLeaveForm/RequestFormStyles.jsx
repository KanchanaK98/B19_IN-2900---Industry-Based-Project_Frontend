import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    formHeader : {
display: 'flex',
padding: theme.spacing(3),
"& .MuiSvgIcon-root" : {
    fontSize : theme.spacing(5),
    marginRight :theme.spacing(1), 
}

},
form : {
    padding : theme.spacing(4)
},
input :{
    margin: theme.spacing(2),
   
},
formLabel : {
    "& .MuiFormLabel-root" : {
       fontWeight : 600,
       fontSize: 19
    }
},
button: {
    display: "flex",
    justifyContent: 'flex-end'
}
}))

export default useStyles;