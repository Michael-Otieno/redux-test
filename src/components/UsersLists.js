import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  apiError, apiStatus, fetchData,getAllUsers } from "../features/service/userSlice";



const UsersList = () =>{
  const data = useSelector(getAllUsers);
  const status = useSelector(apiStatus);
  const error = useSelector(apiError)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>;
}
if (!data) {
  return <div>No data available</div>;
}

if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <section>
      <h1>users</h1>
      {
        // Users details not showing because of cors issue
        data.map((user)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
    </section>
  )
}

export default UsersList;