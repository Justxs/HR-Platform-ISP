import React from 'react'
import { useNavigate } from "react-router-dom";
function JobAdPage() {
  let navigate = useNavigate();
  return (
    <div>JobAdPage
        <button onClick={() => {navigate("/jobsad/id")}}>aplicate to job</button>
    </div>
  )
}

export default JobAdPage