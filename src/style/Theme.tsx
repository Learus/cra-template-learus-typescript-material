import { createMuiTheme, responsiveFontSizes, useMediaQuery, Theme } from '@material-ui/core';
import { teal, pink } from '@material-ui/core/colors';
import cloneDeep from 'lodash/cloneDeep';

const themeBase: any = {
    palette: {
        primary: {
            main: "#24292e"
        },
        secondary: {
            main: "#26A69A"
        },
        error: pink,
        divider: "#707070",
        background: {
            default: "#fff"
        },
        type: 'light'
    },
    overrides: {
        MuiButton: {
            text: {
                color: "#fff"
            }
        },
        MuiTab: {
            root: {
                "&$selected": {
                    color: teal.A400
                }
            }
        }
    },
    spacing: 5,
    typography: {
        fontFamily: 
            `"Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol"`,
        h1: {
            fontWeight: 400
        }
    }
}


let darkThemeBase = cloneDeep(themeBase);
darkThemeBase.palette.background = {
    default: "#24292e"
};
darkThemeBase.palette.type = "dark"


export const LightTheme = responsiveFontSizes(createMuiTheme(themeBase));
export const DarkTheme = responsiveFontSizes(createMuiTheme(darkThemeBase));

export type ResponsiveWidth = {
    xsDown: number,
    smDown: number,
    mdDown: number,
    mdUp: number
}

export const useWidth = (theme: Theme, width: ResponsiveWidth, offset: number = 0) => {
    // const [_width, setWidth] = useState(width.smUp);

    let w = 0;

	let xsDown = useMediaQuery(theme.breakpoints.down(321));
    if (xsDown) w = width.xsDown + offset;
    
    let smDown = useMediaQuery(theme.breakpoints.down(601));
    if (smDown && !xsDown) w = width.smDown + offset;

    let mdDown = useMediaQuery(theme.breakpoints.down('md'));
    if (mdDown && !smDown && !xsDown) w = width.mdDown + offset;

    let mdUp = useMediaQuery(theme.breakpoints.up('md'));
    if (mdUp) w = width.mdUp + offset

    return w;
}

export const active = "&:active";
export const hover = "&:hover";