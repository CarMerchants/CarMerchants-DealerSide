import React from 'react';
import InputFormat from '../../../sections/InputFormat';

export default class ExtForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wheelbase : 0,
            wheel_size : 0,
            rear_tread : 0
        }

        //Binding Funcs
        this.onWheelBaseChange = this.onWheelBaseChange.bind(this);
        this.onAlloyWheelChange = this.onAlloyWheelChange.bind(this);
        this.onRearTreadChange = this.onRearTreadChange.bind(this);
    }

    //functions
    onWheelBaseChange(){
        const val = document.getElementById("wheelbase").value;
        this.setState(() => ({
            wheelbase : val,
        }));
    };

    onAlloyWheelChange(){
        const val = document.getElementById("wheel_size").value;
        this.setState(() => ({
            wheel_size : val,
        }));
    };

    onRearTreadChange(){
        const val = document.getElementById("rear_tread").value;
        this.setState(() => ({
            rear_tread : val,
        }));
    };

    render(){
        return (
            <div>
                <form>
                    <InputFormat 
                        type = "number"
                        title = "WheelBase"
                        name  = "wheelbase"
                        for = "wheelbase"
                        id = "wheelbase"
                        value = {this.state.wheelbase}
                        onChange = {this.onWheelBaseChange}
                    />
                    <InputFormat 
                        type = "number"
                        title = "Alloy Wheel Size"
                        name = "wheel_size"
                        id = "wheel_size"
                        for = "wheel_size"
                        value = {this.state.wheel_size}
                        onChange = {this.onAlloyWheelChange}
                    />
                    <InputFormat 
                        type = "number"
                        title = "Rear Tread(mm)"
                        name = "rear_tread"
                        id = "rear_tread"
                        for = "rear_tread"
                        value = {this.state.rear_tread}
                        onChange = {this.onRearTreadChange}
                    />
                    
                </form>
            </div>
        )
    }
}