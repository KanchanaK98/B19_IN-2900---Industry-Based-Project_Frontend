import { useState, useEffect } from "react";
import { Box, Grid, Card, Typography, Button, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@mui/styles";
import { viewOnePaperApi } from "../../../Api/PromotionModule/PaperApi/viewOnePaperApi";
import { useParams } from "react-router-dom";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { deletePaperAPi } from "../../../Api/PromotionModule/PaperApi/deletePaperAPi";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    boxShadow: "1px 1px #9da1a6",
    width: "100%",
    backgroundColor: "#eceff1",
  },
  text: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#000a12",
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
  card1: {
    marginLeft: 60,
    marginBottom: 10,
    width: "85%",
    padding: 2,
    backgroundColor: "#e0e0e0",
    "&:hover": {
      backgroundColor: "#e8eaf6",
    },
  },
});
export default function ViewOnePaper() {
  const { PaperID } = useParams();
  const classes = useStyles();
  const [Paper, setPaper] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPaper(await viewOnePaperApi(PaperID));
    }
    fetchData();
  }, [PaperID]);

  // const updateAssetFunction = async (id, asset) => {
  //   const index = Paper.findIndex((assets) => assets._id === id);
  //   const newAssets = [...assets];
  //   newAssets[index].assetCategory = asset.assetCategory;
  //   newAssets[index].model = asset.model;
  //   newAssets[index].serialNumber = asset.serialNumber;
  //   newAssets[index].status = asset.status;
  //   setAssets(newAssets);
  // };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#d7dde0",
        padding: 3,
        marginTop: false,
      }}
    >
      <Grid item xs={12} md={12}>
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          spacing={2}
          columns={12}
        >
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
              Paper : {PaperID}
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#183d78" }}
              onClick={() => window.open("/promotion/Paper", "_self")}
            >
              <ArrowBackIosSharpIcon />
              &nbsp; Paper List&nbsp;
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.gridContainer} justify="center">
        {" "}
        {Paper.map((p, key) => (
          <Grid item xs={12} md={12} key={key}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Paper ID : {p.PaperID}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Paper Name : {p.PaperName}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Paper Type : {p.PaperType}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Date Created : {p.DateCreated}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }}></Divider>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#546e7a",
                    marginLeft: "20px",
                  }}
                >
                  Questions :
                </Typography>

                {p.Questions.map((item, key) => (
                  <Card className={classes.card1} key={key}>
                    <Typography className={classes.text}>
                      Question ID : {item.QuestionID}
                    </Typography>
                    <Typography className={classes.text}>
                      Question Catogory : {item.QuestionCatogory}
                    </Typography>
                    <Typography className={classes.text}>
                      QuestionBody : {item.QuestionBody}
                    </Typography>
                  </Card>
                ))}
              </CardContent>
              <CardActions className={classes.pos}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() =>
                    window.open(
                      `/promotion/Paper/updatePaperDetails/${PaperID}`,
                      "_self"
                    )
                  }
                >
                  Edit Paper Details&nbsp;
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  // onClick={() => window.open(`${EmployeeID}/previous`, "_self")}
                >
                  Add More Questions&nbsp;
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() => {
                    deletePaperAPi(p.PaperID).then(() => {
                      window.open("/promotion/Paper", "_self");
                    });
                  }}
                  // onClick={() => window.open(`${EmployeeID}/previous`, "_self")}
                >
                  Delete&nbsp;
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
