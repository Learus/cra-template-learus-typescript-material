import React from 'react';
import { createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import logo from '../logo.svg';

const styles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    link: {
        color: theme.palette.secondary.main,
        fontSize: '1.5rem'
    },
    typography: {
        fontSize: '1.8rem'
    }
}));

interface HomeProps {
    toggleTheme: any
};

const Home = ({toggleTheme}: HomeProps) => {
    const classes = styles();
    const theme: Theme = useTheme();

    return (
        <div className={classes.root}>
            <header>
                <img src={logo} style={{cursor: 'pointer'}} alt="logo" onClick={toggleTheme} />
                <Typography className={classes.typography}>
                    Click the icon the toggle Dark and Light themes.
                </Typography>
                <Typography className={classes.typography}>
                    Use <code style={{color: theme.palette.secondary.main}}>./component.sh</code> to create new components
                </Typography>

                <Typography className={classes.typography}>
                    Create new routes by adding <code style={{color: theme.palette.secondary.main}}>{"<Route>"}</code>s to the App.tsx
                </Typography>

                <Typography className={classes.typography}>
                    Fetch data using <code style={{color: theme.palette.secondary.main}}>axios</code> and <code style={{color: theme.palette.secondary.main}}>useEffect()</code>
                </Typography>

                <br/>
                <a
                    className={classes.link}
                    href="https://learus.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See my other projects
                </a>
            </header>
        </div>

    );
};

export default Home;