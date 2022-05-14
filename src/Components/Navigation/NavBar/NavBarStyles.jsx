import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        padding: theme.spacing(1)
    }, 
    breadcrumb: {
        display: "flex",
        alignItems: "center"
    },
    arrowIcon : {
        display : 'flex',
        backgroundColor: "rgb(0, 0, 0, 0.2)",
        height : "30px",
        width : "30px",
    },
    avatar : {
        display: "flex",
        justifyContent: "center"
    }
}))

export default useStyles;