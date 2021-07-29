import React from 'react';

const SelectFormat = (props) => (
    <div>
        <label for = {props.for}>{props.title} : </label>
        <select value = {props.value} id = {props.id} name = {props.name} onChange = {props.onChange}>
            {props.arr.map((ar) => (
                <option key = {ar}>{ar}</option>
            ))}
        </select>
    </div>
);

export default SelectFormat;