import { useState, useEffect, React } from "react";
import { Grid } from "@mui/material";
import DisplayTeam from "./DisplayTeam";
import { viewAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";

// const fetchHandler = async () => {
//   return await axios
//     .get("http://localhost:8070/employee/viewTeam")
//     .then((res) => {
//       res.data.data.map((team) => {
//         let teamMembers = [];
//         team.TeamWithEmp.map((member) => {
//           const {
//             employeeFirstName,
//             employeeLastName,
//             employeeID,
//             profilePic,
//           } = member;

//           teamMembers.push({
//             employeeName: employeeFirstName + " " + employeeLastName,
//             employeeID,
//             profilePic,
//           });
//         });
//         team.TeamWithEmp = teamMembers;
//       });
//       // console.log(res.data.data);
//       return res.data.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
function DisplayTeams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setTeams(await viewAllTeams());
    }
    fetchData();
  }, []);

  return (
    <div component="div">
      <Grid
        container
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {teams &&
          teams.map((tm) => {
            return (
              <div key={tm._id} component="div">
                <Grid item xs={12} sm={6} md={6} component="div" padding={2}>
                  <DisplayTeam team={tm} />
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}

export default DisplayTeams;
