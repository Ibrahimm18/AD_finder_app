import React, { Fragment } from 'react'
import Search from '../Search';
import Users from "../users/Users";

export const Home = () => {
    return (
        <Fragment>
          <Search />
          <Users />  
        </Fragment>
    )
}

export default Home;
