import React, { useState } from 'react'
import { Drawer, Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'


const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <div>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
        >
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    </div>
}

export default MuiDrawer