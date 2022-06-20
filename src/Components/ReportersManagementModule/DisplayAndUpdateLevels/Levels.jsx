import React, { useEffect, useState } from "react";
import { getLevels } from "../../../Api/ReportersManagementModule/OrganizationApi";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Button, Grid, Typography } from "@mui/material";
import useStyles from "../DisplayAndUpdateLevels/LevelsStyles";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LevelUpdateDialog from "./LevelUpdateDialog";
import { Link,  } from "react-router-dom";
function Levels() {
  const [levels, setLevels] = useState([]);


  useEffect(() => {
    async function fetchData() {
      setLevels(await getLevels());
    }
    fetchData();
  }, []);
  const classes = useStyles();
//----------------------------

  return (
    <div>
      <Box padding={8} bgcolor="#d7dde0">
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#183d78" }}>
          <CreditScoreIcon sx={{ width: 50, height: 50 }} />
          &nbsp; Update Levels
        </Typography>
        <Divider sx={{ mt: 5, mb: 5 }}></Divider>
        <Grid
          container
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          {levels.length > 0 &&
            levels.map((level) => {
              return (
                <Grid padding={2} key={level._id}>
                  <Paper className={classes.paper}>
                    <Grid container>
                      <Grid item md={12}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          {level.level}
                        </Typography>
                        <br />
                        {level.jobRole &&
                          level.jobRole.map((job, i) => {
                            return (
                              <Typography
                                variant="h6"
                                sx={{
                                  color: "#c1dce8",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                }}
                                key={i}
                              >
                                {job}
                              </Typography>
                            );
                          })}
                        <br />
                      </Grid>
                      <Grid item md={12} sx={{ textAlign: "center" }}>
                        <LevelUpdateDialog level={level} />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
        <Button 
         LinkComponent={Link}
         to={"/dashboard/organization/create"}
        sx={{ mt: 5 }} className={classes.button}>
          create levels
        </Button>{" "}
      </Box>
    </div>
  );
}

export default Levels;
