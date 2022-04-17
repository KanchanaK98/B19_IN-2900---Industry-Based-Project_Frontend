import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import useStyles from "./InterviewPageHeadStyles";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

const InterviewPageHead = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper elevation={3} square sx={{ p: 2 }}>
        <Grid container>
          <Grid md={6} item className={classes.header}>
            <AppsIcon fontSize="large" sx={{ mr: 1 }} />
            <Typography variant="h4" color="initial" fontWeight={500}>
              Recent Interviews
            </Typography>
          </Grid>
          <Grid md={6} item className={classes.button}>
            <Button
              component={Link}
              to={"/interview/create"}
              variant="contained"
              color="secondary"
            >
              Create Interview
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InterviewPageHead;
