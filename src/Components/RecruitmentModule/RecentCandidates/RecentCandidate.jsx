import { MoreVert } from "@mui/icons-material";
import {
  Badge,
  Box,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchRecentCandidates } from "../../../Api/RecruitmentModule/CandidateApi";
import useStyles from "./RecentCandidateStyles";

const RecentCandidate = () => {
  const [candidates, setCandidates] = useState(null);
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
        {!candidates ? (
          <Grid  className={classes.skeleton}>
            <Skeleton variant="rectangular" width={310} height={60} />
            <Skeleton variant="rectangular" width={310} height={60} />
            <Skeleton variant="rectangular" width={310} height={60} />
            <Skeleton variant="rectangular" width={310} height={60} />
          </Grid>
        ) : candidates.length === 0 ? (
          <Typography sx={{mt: 1}}>Candidate not available</Typography>
        ) : (
          candidates.map((candidate) => (
            <Grid key={candidate._id} container className={classes.candidate}>
              <Grid item className={classes.name} md={8}>
                <Typography variant="title">
                  {candidate.candidateName}
                </Typography>
                <Typography variant="body">{candidate.NIC}</Typography>
              </Grid>
              <Grid item className={classes.status} md={3}>
                <Badge
                  sx={{ mr: 1 }}
                  color={
                    candidate.status === "Recruited"
                      ? "success"
                      : candidate.status === "Failed"
                      ? "error"
                      : "primary"
                  }
                  var
                  overlap="circular"
                  variant="dot"
                />
                <Typography
                  color={
                    candidate.status === "Recruited"
                      ? "green"
                      : candidate.status === "Failed"
                      ? "error"
                      : "primary"
                  }
                  variant="body"
                >
                  {candidate.status}
                </Typography>
              </Grid>
              <Grid item md={1}>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Grid>
            </Grid>
          ))
        )}
      </Paper>
    </Box>
  );
};

export default RecentCandidate;
