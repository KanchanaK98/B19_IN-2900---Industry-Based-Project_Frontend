import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    item : {
        display: 'flex',
        margin: theme.spacing(1)
    },
    buttonUpdate : {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttons: {
        margin: theme.spacing(1)
    }
}))

export default useStyles;