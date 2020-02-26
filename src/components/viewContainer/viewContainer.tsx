import React, { CSSProperties, Fragment } from 'react';
import DetialView from './detailView';
import MasterView from './masterView';
import { Switch, Route } from 'react-router-dom';
import DetailView from './detailView';


/** React function component */
export default function ViewContainer() {

    const detailViews = ['forest', 'sky', 'desert'];


return (
    <Switch>
        <Route exact path="/">
            <MasterView/>
        </Route>
        <Route path="/" component={DetailView}/>
    </Switch>
)
}