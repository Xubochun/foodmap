import React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import MuiDrawers from './MuiDrawers'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

const Menubar = () => {
    return <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <MuiDrawers />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Food Map
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    </ThemeProvider>
}

export default Menubar