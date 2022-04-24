import { Grid } from '@mui/material'
import React from 'react'
import LeaveHistoryHeader from '../../../Components/LeaveManagementModule/LeaveHistory/LeaveHistoryHeader'
import LeaveHistoryTable from '../../../Components/LeaveManagementModule/LeaveHistory/LeaveHistoryTable'

const LeaveHistory = () => {
  return (
    <Grid container>
        <Grid item sm={12} md={12}>
            <LeaveHistoryHeader/>

        </Grid>
        <Grid item sm={12} md={12}>
            <LeaveHistoryTable/>

        </Grid>
    </Grid>
  )
}

export default LeaveHistory
