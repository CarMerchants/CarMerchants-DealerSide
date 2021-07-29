import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to = "../../addCar/features_specs" exact = {true}>Fuel & Performance</NavLink>
        <NavLink to = "../../addCar/features_specs/ssb">Suspension, Steering & brakes</NavLink>
        <NavLink to = "../../addCar/features_specs/et">Engine & Transmission</NavLink>
        <NavLink to = "../../addCar/features_specs/ext">Exterior</NavLink>
    </div>
);

export default Header;