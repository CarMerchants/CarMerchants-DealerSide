import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to = "../../../addCar/report">Interior</NavLink>
        <NavLink to = "../../addCar/report/exterior">Exterior</NavLink>
        <NavLink to = "../../addCar/report/engine">Engine</NavLink>
        <NavLink to = "../../addCar/report/underbody">Underbody</NavLink>
        <NavLink to = "../../addCar/report/tyre">Tyre</NavLink>
    </div>
);

export default Header;