// Copyright 2021 Linka Cloud  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {createTheme, PaletteMode, PaletteOptions, ThemeOptions} from '@mui/material'
import { grey } from '@mui/material/colors'
import { PaletteColorOptions } from '@mui/material/styles/createPalette'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './theme.css'

const LinkBehavior = React.forwardRef<
  any,
  Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  return <Link ref={ref} to={href} {...other} />
})

export const configureTheme = (mode: PaletteMode) =>
  createTheme({
    ...theme,
    palette: mode === 'dark' ? darkPalette : lightPalette
  })

const errorsPalette: PaletteColorOptions = {
  main: '#bb0a0a'
}

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#006573'
    // main: '#2E586B',
  },
  background: {
    default: '#f6f6f6'
  },
  error: errorsPalette
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#006573'
  },
  background: {
    default: '#0e0e0e'
  },
  error: errorsPalette
}

const themeOptions = (palette: PaletteOptions): ThemeOptions => ({
  palette,
  shape: {
    borderRadius: 4
  },
  spacing: 8,
  typography: {
    fontFamily: [
      'Metropolis',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Helvetica Neue',
      'sans-serif'
      // 'Quicksand',
      // 'sans-serif',
      // 'Arial',
      // 'sans-serif',
    ].join(',')
  }
})

const theme = createTheme(themeOptions(lightPalette))

theme.components = {
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      position: 'fixed',
      variant: 'outlined'
    },
    styleOverrides: {
      root: {
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0
      }
    }
  },
  MuiDrawer: {
    defaultProps: {
      elevation: 0
    }
  },
  MuiBottomNavigation: {
    styleOverrides: {
      root: {
        // borderRadius: '20% 20% 0% 0%'
        background: 'none'
      }
    }
  },
  MuiList: {
    styleOverrides: {
      padding: {
        padding: 0
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          borderLeft: '2px',
          borderStyle: 'solid',
          boxSizing: 'content-box'
        }
      }
    }
  },
  MuiSkeleton: {
    defaultProps: {
      animation: 'wave'
    }
  },
  MuiLink: {
    defaultProps: {
      // @ts-ignore
      component: LinkBehavior,
      underline: 'none',
      color: 'inherit'
    }
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      LinkComponent: LinkBehavior
    }
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        top: theme.spacing(0.5),
        padding: theme.spacing(1),
        margin: `${theme.spacing(2)} 0px ${theme.spacing(2)} 0px`
      }
    },
    defaultProps: {
      disableElevation: true
    }
  },
  MuiIconButton: {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        '&:hover': {
          background: 'none',
          color: theme.palette.primary.main
        }
      }
    }
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true
    },
    styleOverrides: {
      root: {
        textTransform: 'uppercase',
        fontSize: '1rem'
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      variant: 'standard'
    }
  },
  MuiInput: {
    defaultProps: {
      disableUnderline: true
    },
    styleOverrides: {
      root: {
        border: `1px solid ${grey['300']}`,
        borderRadius: theme.shape.borderRadius,
        top: theme.spacing(0.5),
        padding: theme.spacing(1),
        margin: `${theme.spacing(2)} 0px ${theme.spacing(2)} 0px`,
        outline: `1px solid transparent`,
        '&.Mui-focused': {
          border: `1px solid ${theme.palette.primary.main}`,
          outline: `1px solid ${theme.palette.primary.main}`
        },
        '&.Mui-error': {
          border: `1px solid ${theme.palette.error.main}`,
          outline: `1px solid ${theme.palette.error.main}`
        }
      }
    }
  },
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        paddingBottom: theme.spacing(1)
      }
    }
  },
  MuiPaper: {
    defaultProps: {
      variant: 'elevation',
      elevation: 0
    }
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
      }
    },
    styleOverrides: {
      root: {}
    }
  },
  MuiSnackbarContent: {
    defaultProps: {
      elevation: 0
    }
  },
  MuiAlert: {},
  MuiAvatar: {
    defaultProps: {
      variant: 'square'
    },
    styleOverrides: {
      root: {
        borderRadius: 12
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: {
        marginTop: `-${theme.spacing(1)}`,
        borderCollapse: 'separate',
        // if borderCollapse: "separate",
        borderSpacing: `0 ${theme.spacing(1)}`,
        padding: theme.spacing(1),
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        textTransform: 'uppercase'
      }
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: {}
    }
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,
        td: {
          // if borderCollapse: "collapse",
          // borderTop: `solid ${theme.palette.background.default} 10px`,
          // borderBottom: `solid ${theme.palette.background.default} 10px`,
          '&:first-of-type': {
            borderTopLeftRadius: `${theme.shape.borderRadius}px`,
            borderBottomLeftRadius: `${theme.shape.borderRadius}px`
          },
          '&:last-child': {
            borderTopRightRadius: `${theme.shape.borderRadius}px`,
            borderBottomRightRadius: `${theme.shape.borderRadius}px`
          }
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        border: 'none'
      }
    }
  }
}
