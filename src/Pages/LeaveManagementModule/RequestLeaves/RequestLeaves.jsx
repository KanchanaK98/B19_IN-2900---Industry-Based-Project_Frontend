import { Box, Grid } from '@mui/material'
import React from 'react'
import RemaningLeaves from '../../../Components/LeaveManagementModule/RemaningLeaves/RemaningLeaves'
import RequestLeaveForm from '../../../Components/LeaveManagementModule/RequestLeaveForm/RequestLeaveForm'

const RequestLeaves = () => {
  return (
    <Box>
        <Grid container>
            <Grid item sm={8} md={8} >
                <RequestLeaveForm />
            </Grid>
            <Grid item sm={4} md={4} >
                <RemaningLeaves />
            </Grid>

        </Grid>
        
    </Box>
  )
}

export default RequestLeaves