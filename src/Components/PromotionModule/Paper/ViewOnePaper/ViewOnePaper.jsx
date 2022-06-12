import { useState, useEffect } from "react";
import { Box, Grid, Card, Typography, Button, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { viewOnePaperApi } from "../../../../Api/PromotionModule/PaperApi/viewOnePaperApi";
import { useParams } from "react-router-dom";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { deletePaperAPi } from "../../../../Api/PromotionModule/PaperApi/deletePaperAPi";
import useStyles from "./ViewOnePaperStyles";

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

  return (
    <Box className={classes.Box}>
      <Grid item xs={12} md={12}>
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
          spacing={2}
          columns={12}
        >
          <Grid item xs={6}>
            <Typography variant="h4" className={classes.topic}>
              Paper : {PaperID}
            </Typography>
          </Grid>
          <Grid item xs={6} align="right" marginTop={4} marginBottom={2}>
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
                <Typography className={classes.name}>
                  Paper ID : {p.PaperID}
                </Typography>
                <Typography className={classes.name}>
                  Paper Name : {p.PaperName}
                </Typography>
                <Typography className={classes.name}>
                  Paper Type : {p.PaperType}
                </Typography>
                <Typography className={classes.name}>
                  Date Created : {p.DateCreated}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }}></Divider>
                <Typography className={classes.name}>Questions :</Typography>

                {p.Questions.map((item, key) => (
                  <Card className={classes.card1} key={key}>
                    <ul>
                      <li>
                        <Typography className={classes.text}>
                          Question ID : {item.QuestionID}
                        </Typography>
                        <Typography className={classes.text}>
                          Question Catogory : {item.QuestionCatogory}
                        </Typography>
                        <Typography className={classes.text}>
                          QuestionBody : {item.QuestionBody}
                        </Typography>
                      </li>
                    </ul>
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
                  onClick={() => {
                    deletePaperAPi(p.PaperID).then(() => {
                      window.open("/promotion/Paper", "_self");
                    });
                  }}
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
