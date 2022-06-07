import { useState, useEffect } from "react";
import { Box, Grid, Card, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
import { viewAllPapersListApi } from "../../../Api/PromotionModule/PaperApi/viewAllPapersListApi";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    boxShadow: "1px 1px #9da1a6",
    "&:hover": {
      backgroundColor: "#eceff1",
    },
  },
  text: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    justifyContent: "center",
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    shadow: "red",
  },
  button_eval: {
    justifyContent: "left",
  },
});
const ViewAllPapersList = () => {
  const classes = useStyles();
  const [PaperList, setPaperList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPaperList(await viewAllPapersListApi());
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#d7dde0",
        padding: 3,
        marginTop: false,
      }}
    >
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            sx={{
              m1: 2,
              fontWeight: "Bold",
              color: "#183d78",
              mb: 2,
              ml: 2,
            }}
          >
            Evaluation Papers
          </Typography>
        </Grid>
      </Grid>{" "}
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {" "}
        {PaperList.map((paper, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", color: "#546e7a" }}>
                  Paper ID :
                </Typography>
                <Typography
                  className={classes.text}
                  color="textSecondary"
                  gutterBottom
                >
                  {paper.PaperID}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#546e7a" }}>
                  Paper Name :
                </Typography>
                <Typography
                  className={classes.text}
                  color="textSecondary"
                  gutterBottom
                >
                  {paper.PaperName}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#546e7a" }}>
                  Paper Type :
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                  {paper.PaperType}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#546e7a" }}>
                  Date Created :
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                  {paper.DateCreated}
                </Typography>
              </CardContent>
              <CardActions className={classes.pos}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() =>
                    window.open(
                      `/promotion/Paper/display/${paper.PaperID}`,
                      "_self"
                    )
                  }
                >
                  View Paper&nbsp;
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ViewAllPapersList;
