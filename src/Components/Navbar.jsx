import React from 'react'
import { Stack } from '@mui/material'
import {logo} from '../Utils/Constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <Stack 
    direction="row"
    alignItems="center"
    sx={{position:"sticky", justifyContent:'space-between',height:70 }}>
      <Link to='/' style={{}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar/>
      
    </Stack>
  )
}

export default Navbar
