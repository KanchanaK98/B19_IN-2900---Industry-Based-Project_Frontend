import React from 'react'
import CreateTeams from '../../../Components/ReportersManagementModule/TeamCreate/CreateTeams'

function CreateTeamPage({teamcreate}) {
  return (
    <div><CreateTeams teamcreate={teamcreate}/></div>
  )
}

export default CreateTeamPage