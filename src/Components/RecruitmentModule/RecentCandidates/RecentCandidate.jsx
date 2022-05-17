import { MoreVert } from "@mui/icons-material";
import {
  Badge,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchRecentCandidates } from "../../../Api/RecruitmentModule/CandidateApi";
import useStyles from "./RecentCandidateStyles";

const RecentCandidate = () => {
  const [candidates, setCandidates] = useState([]);
  const fetchData = async () => {
    setCandidates(await fetchRecentCandidates());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h5">
        Recent Candidates
      </Typography>
      <Paper elevation={5} className={classes.paper}>
        {candidates &&
          candidates.map((candidate) => (
            <Grid container className={classes.candidate}>
              <Grid item className={classes.name} md={7}>
                <Typography variant="title">
                  {candidate.candidateName}
                </Typography>
                <Typography variant="body">{candidate.NIC}</Typography>
              </Grid>
              <Grid item className={classes.status} md={5}>
                <Badge
                  sx={{ mr: 1 }}
                  color="success"
                  overlap="circular"
                  variant="dot"
                ></Badge>
                <Typography variant="body" >Selected</Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        
      </Paper>
    </Box>
  );
};

export default RecentCandidate;
