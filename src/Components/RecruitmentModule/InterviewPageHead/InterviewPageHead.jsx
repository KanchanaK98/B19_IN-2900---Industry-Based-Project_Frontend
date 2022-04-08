import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./InterviewPageHeadStyles";
import AppsIcon from "@mui/icons-material/Apps";

const InterviewPageHead = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container >
        <Grid md={6} item className={classes.header}>
          <AppsIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h4" color="initial" fontWeight={500}>
            Recent Interviews
          </Typography>
        </Grid>
        <Grid Grid md={6} item className={classes.button}>
          <Button variant="contained" color="secondary">Create Interview</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterviewPageHead;
