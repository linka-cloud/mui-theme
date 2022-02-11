import { ColorModeThemeProvider, UiMode } from '@linka-cloud/theme'
import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'

import "@linka-cloud/theme/dist/index.css"

const Home = () => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
    <Paper sx={{padding: 10}}>Home</Paper>
  </Box>
)

const App = () => {
  const [mode, setMode] = useState<UiMode>('light')
  return (
    <ColorModeThemeProvider mode={mode} setMode={setMode}>
      <Home />
    </ColorModeThemeProvider>
  )
}

export default App
