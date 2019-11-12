import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes';

import Home from '~/pages/Home';

export default function Router() {
    return (
        <Switch>
            <Routes path="/" exact component={Home} />
        </Switch>
    );
}
