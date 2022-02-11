# @linka-cloud/theme

> 

[![NPM](https://img.shields.io/npm/v/@linka-cloud/theme.svg)](https://www.npmjs.com/package/@linka-cloud/theme) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @linka-cloud/theme
```

## Usage

```tsx
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
```

## License

MIT © [](https://github.com/)
