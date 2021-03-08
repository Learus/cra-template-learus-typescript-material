import React, { useState } from 'react';

// Routing
import { Switch, Route } from 'react-router-dom';

// Theming
import { ThemeProvider } from '@material-ui/styles';
import { LightTheme, DarkTheme } from '../style/Theme';
import { CssBaseline, Theme } from '@material-ui/core';

import Home from './Home';

function App() {
    const [theme, setTheme] = useState<Theme>(LightTheme);

    const toggleTheme = () => {
        console.log(theme);

        if (theme.palette.type === 'dark') setTheme(LightTheme);
        else setTheme(DarkTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline/>
                <Switch>
                    <Route path='/' component={() => <Home toggleTheme={toggleTheme}/>}/>
                </Switch>
            </div>
        </ThemeProvider>
    );
}

export default App;
