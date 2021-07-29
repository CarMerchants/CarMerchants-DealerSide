import React from 'react';
import { NavLink, Switch,Route } from 'react-router-dom';
import Et from './Et';
import Ext from './Ext';
import Fp from './fp';
import Header from './Header';
import SSB from './SSB';

const FeatureSpecsFormRouter = () => (
    <div>
        <Header/>
        <Switch>
            <Route path = "/addCar/features_specs" component = {Fp} exact = {true}/>
            <Route path = "/addCar/features_specs/ssb" component = {SSB}/>
            <Route path = "/addCar/features_specs/et" component = {Et}/>
            <Route path = "/addCar/features_specs/ext" component = {Ext}/>
        </Switch>
    </div>
)

export default FeatureSpecsFormRouter;