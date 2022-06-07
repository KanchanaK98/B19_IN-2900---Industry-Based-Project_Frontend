import { Box, Grid } from '@mui/material'
import React from 'react'
import CreateEmployee from '../../../Components/ReportersManagementModule/CreateEmployeeForm/CreateEmployee'
import ProductCountUp from "../../../Components/ReportersManagementModule/CountUps/CountUpStack";
import CustomizedTeamView from "../../../Components/ReportersManagementModule/CustomizedTemView/CustomizedTeamView";

function CreateEmployeePage() {
  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <Box padding={2}>
            <ProductCountUp />
           <Grid sx={{mt:2}}>
           <CreateEmployee/>
           </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box padding={2} sx={{ mt: 4 }}>
            <CustomizedTeamView />
          </Box>
        </Grid>
      </Grid></div>
  )
}

export default CreateEmployeePage