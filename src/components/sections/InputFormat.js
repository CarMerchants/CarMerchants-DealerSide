import React from 'react';

const InputFormat = (props) => (
    <div>
        <label for = {props.for}>{props.title} : </label>
        <input 
            type = {props.type}
            value = {props.value}
            name = {props.name}
            id = {props.id}
            onChange = {props.onChange}
        />
    </div>
)

export default InputFormat;