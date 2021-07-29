import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <div>
            <h2>Car Merchants</h2>
        </div>
        <div>
            <NavLink to = "/">Cars Added</NavLink>
            <NavLink to = "/addCar">Add Car</NavLink>
            <NavLink to = "/orders">Orders</NavLink>
            <NavLink to = "/complains">Complains</NavLink>
            <NavLink to = "/announcements">Announcements</NavLink>
            <NavLink to = "/feedbacks">Feedbacks</NavLink>
        </div>
    </div>
);

export default Header;