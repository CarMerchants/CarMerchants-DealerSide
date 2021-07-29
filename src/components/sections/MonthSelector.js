import React from 'react';

const MonthSelector = (props) => {
    const month_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    return (
        <select name = {props.name} id = {props.id} value = {props.value} onChange = {props.onChange}>
            {month_arr.map((month) => (
                <option key = {month}>{month}</option>
            ))}
        </select>
    );
};

export default MonthSelector;