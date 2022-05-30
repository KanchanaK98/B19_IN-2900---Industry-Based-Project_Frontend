import { FactCheckOutlined, HourglassTopOutlined, PersonAddAlt } from "@mui/icons-material";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./InterviewstatsStyles";

const InterviewStats = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h5">
        Interview Stats
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Card elevation={6} className={classes.card1}>
            <Grid container>
              <Grid item md={8} className={classes.cardText}>
                <Typography variant="h2">10</Typography>
                <Typography>Total Interviews Completed</Typography>
              </Grid>
              <Grid item md={4} className={classes.cardIcon}>
                <FactCheckOutlined />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card elevation={6} className={classes.card2}>
          <Grid container>
              <Grid item md={8} className={classes.cardText}>
                <Typography variant="h2">08</Typography>
                <Typography>Total Interviews to conduct</Typography>
              </Grid>
              <Grid item md={4} className={classes.cardIcon}>
                <HourglassTopOutlined />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card elevation={6} className={classes.card3}>
          <Grid container>
              <Grid item md={9} className={classes.cardText}>
                <Typography variant="h2">17</Typography>
                <Typography>Non-Interviewed candidates</Typography>
              </Grid>
              <Grid item md={3} className={classes.cardIcon}>
                <PersonAddAlt />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterviewStats;
