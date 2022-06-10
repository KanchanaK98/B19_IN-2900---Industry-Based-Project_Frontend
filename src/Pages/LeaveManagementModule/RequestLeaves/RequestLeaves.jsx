import {Grid} from '@mui/material'
import React from 'react'
import RemaningLeaves from '../../../Components/LeaveManagementModule/RemaningLeaves/RemaningLeaves'
import RequestLeaveForm from '../../../Components/LeaveManagementModule/RequestLeaveForm/RequestLeaveForm'
import TeamLead from '../../../Components/LeaveManagementModule/TeamLead/TeamLead'

const RequestLeaves = () => {
  return (
    
      <Grid container>
        <Grid item sm={8} md={8}>
          <Grid container>
            <Grid item sm={12} md={12}>
              <RemaningLeaves />
            </Grid>
            <Grid item sm={12} md={12}>
              <RequestLeaveForm />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4} md={4}>
          <TeamLead/>
        </Grid>
      </Grid>
    
  )
}

export default RequestLeaves