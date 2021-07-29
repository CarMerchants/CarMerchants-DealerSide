import React from 'react';
import { Route,Switch } from 'react-router';
import Engine from './Engine';
import Exterior from './Exterior';
import Header from './Header';
import Interior from './Interior';
import Tyre from './Tyre';
import Underbody from './Underbody';

const ReportFormRouter = () => (
    <div>
        <switch>
            <Header />
            <Route path = "/addCar/report" component = {Interior} exact = {true}/>
            <Route path = "/addCar/report/exterior" component = {Exterior}/>
            <Route path = "/addCar/report/underbody" component = {Underbody}/>
            <Route path = "/addCar/report/engine" component = {Engine}/>
            <Route path = "/addCar/report/tyre" component = {Tyre}/>
        </switch>
    </div>
)

export default ReportFormRouter; 