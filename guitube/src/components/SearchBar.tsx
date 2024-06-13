import { IconButton, Paper} from '@mui/material'
import Search from '@mui/icons-material/Search'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={(e) => {}
        }      
        sx={{
        pl: '1vw',
        alignItems: 'center',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: "none",
        mr: { sm: 2 },



      }}
    >
      <input
      className='search-bar'
        style={{
          border: 'none',
          outline: 'none',
          fontFamily: 'inherit',
        }}
        placeholder='Pesquisar'
        onChange={(e) => { }}
      />
        <IconButton type='submit' sx={{ color: 'red', pr: "0.5vw"}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar