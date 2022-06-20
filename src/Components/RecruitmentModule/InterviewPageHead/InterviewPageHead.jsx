import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./InterviewPageHeadStyles";
import { Link } from "react-router-dom";

const InterviewPageHead = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      
        <Grid container>
          <Grid md={6} item className={classes.header}>
            <Typography variant="h5" >
               Interviews List
            </Typography>
          </Grid>
          <Grid md={6} item className={classes.button}>
            <Button
              component={Link}
              to={"/interview/create"}
              variant="contained"
              color="primary"
            >
              Create Interview
            </Button>
          </Grid>
        </Grid>
     
    </Box>
  );
};

export default InterviewPageHead;
