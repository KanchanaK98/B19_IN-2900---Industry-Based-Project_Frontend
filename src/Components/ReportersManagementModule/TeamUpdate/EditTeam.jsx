import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import {
  Button,
  Paper,
  Typography,
  Grid,
  MenuItem,
  Divider,
  FormLabel,
  TextField,
  IconButton,
  Chip,
  Avatar,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import TeamMemberDialog from "./TeamMemberDialog";
import { updateTeam } from "../../../Api/ReportersManagementModule/TeamsApi";
import { getEmployeesWithoutTeam } from "../../../Api/ReportersManagementModule/TeamsApi";
function EditTeam() {
  const { id } = useParams();
  const [members, setMembers] = useState([]);
  const location = useLocation();
  const { team } = location.state;
  const [editTeam, setEditTeam] = useState({
    teamName: team.teamName,
    //teamLeadID: team.teamLeadID,
    teamMembers: team.TeamWithEmp.filter(
      (member) => member.employeeID !== team.teamLeadID
    ),

    teamLeader: team.TeamWithEmp.filter(
      (member) => member.employeeID === team.teamLeadID
    )[0],
    // TeamWithEmp: team.TeamWithEmp,
    // ProductOfTeam: team.ProductOfTeam,
    // team.TeamWithEmp.length > 0 &&
    // team.TeamWithEmp.map((tm, i) => {
    //   if (tm.employeeID === team.teamLeadID) {
    //     tm.teamLeder = tm.employeeFirstName + " " + tm.employeeLastName;
    //     return tm.teamLeder;
    //   }
    // }),
  });
  // console.log(team);
  // console.log(editTeam);
  // const sendRequest = async () => {
  //   await axios
  //     .put(`http://localhost:8070/employee/updateTeam/${team._id}`, {
  //       teamName: editTeam.teamName,
  //       teamLeadID: editTeam.teamLeader.employeeID,
  //       teamMembers:editTeam.teamMembers.map((member) => member.employeeID)
  //       // teamLeader: editTeam.teamLeader,
  //     })
  //     .then((res) => res.data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleChange = (e) => {
    setEditTeam((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateTeam(editTeam, team._id);

    // sendRequest()
    // .then((res) => {})
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  // const handleAddMembers = async () => {
  //   return await axios
  //     .get("http://localhost:8070/employee/get")
  //     .then((res) => res.data.data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     setMembers(await handleAddMembers());
  //   }
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   setMembers(await getEmployeesWithoutTeam({}));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      setMembers(await getEmployeesWithoutTeam());
    }
    fetchData();
  }, []);

  console.log(members);
  // team.TeamWithEmp.map((tm, i) => {
  //   if (tm.employeeID === team.teamLeadID) {
  //     tm.teamLeder = tm.employeeFirstName + " " + tm.employeeLastName;
  //   }
  // });
  //-------------------------
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  //-----------------------------------
  return (
    <div>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h5" sx={{ mb: 5, fontWeight: "bold" }}>
          <GroupAddIcon />
          &nbsp; Update Team
        </Typography>
        <Divider sx={{ mb: 5, mt: 2 }}></Divider>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Grid container sx={{ mb: 5 }}>
              <Grid item sm={4} md={4}>
                <FormLabel>Team Name:</FormLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  name="teamName"
                  value={editTeam.teamName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item sm={4} md={4}>
                <FormLabel>Team Members:</FormLabel>
              </Grid>

              <Grid item sm={8} md={8}>
                <IconButton onClick={handleOpenDialog}>
                  <AddCircleIcon sx={{ color: "gray" }} fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={handleOpenDialog}
                  disabled={team.TeamWithEmp.length === 0 ? true : false}
                >
                  <EditIcon sx={{ color: "gray" }} fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <TeamMemberDialog
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              editTeam={editTeam}
              setEditTeam={setEditTeam}
              employees={members}
              setEmployee={setMembers}
            />

            <Grid container sx={{ mb: 5 }}>
              <Grid item sm={4} md={4}></Grid>
              <Grid item sm={8} md={8}>
                {editTeam.teamMembers.length > 0 &&
                  editTeam.teamMembers.map((member, i) => (
                    <Chip
                      label={member.employeeName}
                      key={member.employeeID}
                      sx={{
                        mr: 0.5,
                        mt: 1,
                        bgcolor: "rgba(49, 24, 62, 1)",
                        color: "white",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    />
                  ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={12} md={6}>
            <Grid container>
              <Grid item sm={4} md={4}>
                <FormLabel>Team Lead :</FormLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <TextField
                  id="data"
                  // placeholder={team.TeamWithEmp.map((tm, i) => {
                  //   if (tm.employeeID === team.teamLeadID) {
                  //     tm.teamLeder =
                  //       tm.employeeFirstName + " " + tm.employeeLastName;
                  //     return tm.teamLeder;
                  //   }
                  // })}
                  variant="filled"
                  name="teamLeader"
                  select
                  value={editTeam.teamLeader}
                  onChange={handleChange}
                  fullWidth
                  SelectProps={{
                    renderValue: (mem) => mem.employeeName,
                  }}
                >
                  {members &&
                    members.map((mem) => (
                      <MenuItem value={mem} key={mem.employeeID}>
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Grid item>
                            <Avatar
                              src={mem.profilePic}
                              sx={{ height: 35, width: 35 }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography sx={{ mb: -0.7, ml: 1 }}>
                              {mem.employeeName}
                            </Typography>
                            <Typography variant="body2" sx={{ ml: 1.3 }}>
                              {mem.employeeID}
                            </Typography>
                          </Grid>
                        </Grid>
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          Update Team
        </Button>
      </Paper>
    </div>
  );
}

export default EditTeam;
