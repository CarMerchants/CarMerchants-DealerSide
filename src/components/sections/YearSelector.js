import React from 'react';

const YearSelector = (props) => {
    const curr_year = (new Date()).getFullYear()
    const year_arr = new Array();

    for(var i=0;i<=25;i++){
        year_arr.push(curr_year-i);
    }

    return (
        <select name = {props.name} id = {props.id} value = {props.value} onChange = {props.onChange}>
            {
            year_arr.map((year) => (
                <option key = {year}>{year}</option>
            ))
            }
        </select>
    );
};

export default YearSelector;