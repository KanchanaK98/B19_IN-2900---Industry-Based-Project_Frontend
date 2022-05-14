import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
// import { Multiselect } from "multiselect-react-dropdown";
import { Avatar, IconButton, Box } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Chip } from "@mui/material";
import {
  FormLabel,
  TextField,
  Divider,
  Paper,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TeamMemberDialog from "./TeamMemberDialog";
import {
  createTeams,
  getEmployeesWithoutTeam,
} from "../../../Api/ReportersManagementModule/TeamsApi";

function CreateTeams() {
  const [teaminputs, setTeaminputs] = useState({
    teamName: "",
    teamLead: {},
    teamMembers: [],
  });

  //const filterMembers=setMembers(members.filter((mem)=>(mem.name==='teamLead')))
  // console.log(teaminputs)
  const handleChange = (e) => {
    setTeaminputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "teamLead") {
      setMembers(members.filter((mem) => mem !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(teaminputs);
    createTeams(teaminputs);

    setTeaminputs({
      teamName: "",
      teamLead: {},
      teamMembers: [],
    });
  };
  //---------------------------------------------------------
  //----------------------------------------------------------

  const [members, setMembers] = useState([]);

  // const handleAddMembers = async () => {
  //   return await axios
  //     .get("http://localhost:8070/employee/get")
  //     .then((res) => res.data.data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    async function fetchData() {
      setMembers(await getEmployeesWithoutTeam());
    }
    fetchData();
  }, []);
  // if (members.length > 0) {
  //   members.map((mem) => {
  //     mem.fullName = mem.employeeFirstName + " " + mem.employeeLastName;
  //   });
  // }
  console.log(members);
  //----------------------------------------------------
  //----------------------------------------------------

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  //add snackbar-------------------------

  //----------------------------------------
  return (
    <div>
      <Box padding={4}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h5" sx={{ mb: 5 }}>
            <GroupAddIcon />
            Create Team
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
                    value={teaminputs.teamName}
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
                    disabled={
                      teaminputs.teamMembers.length === 0 ? true : false
                    }
                  >
                    <EditIcon sx={{ color: "gray" }} fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
              <TeamMemberDialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                teaminputs={teaminputs}
                setTeaminputs={setTeaminputs}
                employees={members}
                setEmployee={setMembers}
              />

              <Grid container sx={{ mb: 5 }}>
                <Grid item sm={4} md={4}></Grid>
                <Grid item sm={8} md={8}>
                  {teaminputs.teamMembers &&
                    teaminputs.teamMembers.map((member) => (
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
                    label="Team Leader"
                    variant="filled"
                    name="teamLead"
                    select
                    value={teaminputs.teamLead}
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
                              <Avatar sx={{ height: 35, width: 35 }}>
                                {mem.employeeFirstName}
                              </Avatar>
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

                {/* <Multiselect
              options={members}
              displayValue="fullName"
            ></Multiselect> */}
              </Grid>
            </Grid>
          </Grid>

          {/* <Divider sx={{ mt: 5, mb: 5 }}></Divider> */}
          {/* <FormLabel sx={{ mt: 2, mr: 2 }} className="label">
          Team Members :
          <Multiselect options={members} displayValue="fullName"></Multiselect>
        </FormLabel> */}
          <Grid sx={{ textAlign: "right" }}>
            <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
              Save New Team
            </Button>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default CreateTeams;
