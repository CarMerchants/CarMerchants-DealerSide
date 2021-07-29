import React from 'react';

const SelectOpt = (props) => (
    <div>
        <label for = {props.for}>{props.title} : </label>
        <select name = {props.name} value = {props.value} id = {props.id} onChange = {props.onChange}>
            <option>Yes</option>
            <option>No</option>
        </select>
    </div>
);

export default SelectOpt;