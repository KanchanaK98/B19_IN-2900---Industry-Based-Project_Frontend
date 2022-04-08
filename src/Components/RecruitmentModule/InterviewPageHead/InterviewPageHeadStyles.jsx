import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container : {
        height : '30vh',
        width: '100%',
        backgroundColor : 'rgb(0, 0, 255)',
        padding: theme.spacing(4),
        borderRadius : theme.spacing(0, 0, 4, 4),
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