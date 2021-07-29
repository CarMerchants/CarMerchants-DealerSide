import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to = "../../addCar" exact = {true}>Overview</NavLink>
        <NavLink to = "../../addCar/report">Report</NavLink>
        <NavLink to = "../../addCar/DentMap">Dent Map</NavLink>
        <NavLink to = "../../addCar/features_specs">Features & Specs</NavLink>
    </div>
);

export default Header;