import React, { useContext } from 'react'
import Spinner from '../../layouts/Spinner';
import UserItem from "./UserItems";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading,users } = githubContext;
    if(loading){
    return <Spinner />
    } else {
        return (
            <div style={userStyles}>
            {users.map(user => (
                <UserItem key = {user.id} user = {user}/>
            ))}
            </div>
        );
    }
    
     
}



const userStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
    backgroundColor: "#F3B63A"
  
} 

export default Users
