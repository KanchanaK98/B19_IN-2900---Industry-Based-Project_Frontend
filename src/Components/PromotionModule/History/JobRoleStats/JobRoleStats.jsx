import { People } from "@mui/icons-material";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./JobRoleStatsStyles";

const JobRoleStats = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container className={classes.header}>
        <Typography variant="h5">Promotion History List</Typography>
      </Grid>

      <Grid container>
        <Grid item md={12}>
          <Card square className={classes.card1}>
            <Grid container>
              <Grid item md={6} className={classes.icon1}>
                <People />
              </Grid>
              <Grid item md={5} className={classes.content}>
                <Typography variant="h2">10</Typography>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h5">Employees</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card square className={classes.card2}>
                <Grid container>
                  <Grid item md={6} className={classes.icon2}>
                    <People />
                  </Grid>
                  <Grid item md={5} className={classes.content}>
                    <Typography variant="h2">10</Typography>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h5">Employees</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobRoleStats;
