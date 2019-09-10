import React, { useState, useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { jssPreset, createGenerateClassName } from '@material-ui/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

const AppProvider = props => {
    useEffect(() => {
        setDirection(props.direction);
    }, [props.direction]);

    useEffect(() => {
        setType(props.type);
    }, [props.type]);

    const [direction, setDirection] = useState(props.direction);
    const [type, setType] = useState(props.type);
    const theme = createMuiTheme({
        direction,
        palette: {
            type,
            // primary: {
            //     light: '#5be88a',
            //     main: '#0db55c',
            //     dark: '#008430',
            //     contrastText: '#fff',
            // },
            // secondary: red,
            // error: red,
        },
        typography: {
            useNextVariants: true,
            //fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
            fontFamily: 'Arial',
            headline: {
                fontSize: 16,
            },
            subheading: {
                fontSize: 14,
            },
            button: {
                fontWeight: 400,
                textTransform: 'initial'
            }
        },
        shape: {
            borderRadius: 4
        }
    });

    return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
        </JssProvider>
    )
};

export default AppProvider;