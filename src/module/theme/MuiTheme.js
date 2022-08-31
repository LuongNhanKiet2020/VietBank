import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './index'
import React from 'react';

const MuiTheme = ({children}) =>{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}