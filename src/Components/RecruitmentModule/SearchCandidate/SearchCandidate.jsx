import {
  Avatar,
  Card,
  CardActionArea,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { searchCandidate } from "../../../Api/RecruitmentModule/CandidateApi";

const SearchCandidate = ({ setCandidateData, setCandidateId }) => {
  const [NIC, setNIC] = useState("");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCandidates(await searchCandidate(NIC));
    }
    if (NIC) fetchData();
  }, [NIC]);
  const handleUpdate = (candidate) => {
    setCandidateData({
      firstName: candidate.candidateName.split(" ")[0],
      lastName: candidate.candidateName.split(" ")[1],
      appliedPosition : candidate.appliedPosition,
      NIC: candidate.NIC,
      phoneNumber: candidate.phoneNumber,
      email: candidate.email,
      cv: candidate.cv,
    });
    setCandidateId(candidate._id);
    setCandidates(null);
    //ref.current.value = " ";
    setNIC("");
  };

  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        p: "15px 5px 30px 20px",
        ml: 3,
      }}
    >
      <Grid container>
        <Grid item md={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircleIcon fontSize="large" sx={{ mr: 2 }} />
          <TextField
            label="Search by NIC"
            variant="standard"
            autoComplete="off"
            value={NIC}
            onChange={(event) => setNIC(event.target.value)}
          />
        </Grid>
        <Grid item md={12} sx={{ mt: 4 }}>
          {candidates &&
            candidates.map((candidate) => (
              <Card elevation={3} key={candidate._id} sx={{ mb: 3, p: 1 }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    p: 1,
                  }}
                  onClick={() => handleUpdate(candidate)}
                >
                  <Avatar sx={{ bgcolor: "blue" }}>
                    {candidate.candidateName[0].toUpperCase()}
                  </Avatar>
                  <Grid>
                    <Typography
                      sx={{ ml: 2, fontSize: 17, fontWeight: 430, mb: -0.5 }}
                    >
                      {candidate.candidateName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"gray"}
                      sx={{ ml: 2 }}
                    >
                      {candidate.NIC}
                    </Typography>
                  </Grid>
                </CardActionArea>
              </Card>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchCandidate;
