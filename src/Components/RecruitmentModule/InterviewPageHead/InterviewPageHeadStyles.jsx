import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container : {
        // height : '40vh',
        width: '100%',
        backgroundColor : 'rgb(0, 0, 255)',
        borderRadius : theme.spacing(0, 100, 100, 0),
        //boxShadow: theme.spacing(0, 2, 5, 0.1),
    },
    header :{
        display: 'flex',
       // margin: theme.spacing(5),
        alignItems: 'center'
    },
    button : {
        display: 'flex',
        justifyContent : 'flex-end'
    }
}))

export default useStyles;