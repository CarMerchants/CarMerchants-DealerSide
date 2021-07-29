import React from 'react';
import { Route,Switch } from 'react-router';
import DentMap from './DentMap';
import Feature_specs from './Features_specs';
import Header from './Header';
import Overview from './Overview';
import Report from './Report';


const AddCarFormRouter = () => (
    <div>
        <Header />
        <Switch>
            <Route path = "/addCar" component = {Overview} exact = {true}/>
            <Route path = "/addCar/report" component = {Report}/>
            <Route path = "/addCar/dentMap" component = {DentMap}/>
            <Route path = "/addCar/features_specs" component = {Feature_specs}/>
        </Switch>
    </div>
)
export default AddCarFormRouter;