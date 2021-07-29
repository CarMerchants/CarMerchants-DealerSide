import React from 'react';
import SelectOpt from './SelectOpt';

export default class EngineForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            abnormal_noise_check : "No",
            radiator_check : "No",
            start_check : "No",
            wiper_check : "No",
            battery_check : "No"
        }

        //Binding the func
        this.onAbnormalNoiseCheckChange = this.onAbnormalNoiseCheckChange.bind(this);
        this.onRadiatorCheckChange = this.onRadiatorCheckChange.bind(this);
        this.onStartCheckChange = this.onStartCheckChange.bind(this);
        this.onWiperCheckChange = this.onWiperCheckChange.bind(this);
        this.onBatteryCheckChange = this.onBatteryCheckChange.bind(this);
    }

    //Functions
    onAbnormalNoiseCheckChange(){
        const val = document.getElementById("abnormal_noise_check").value;
        this.setState(() => ({
            abnormal_noise_check : val,
        }));
    };

    onRadiatorCheckChange(){
        const val = document.getElementById("radiator_check").value;
        this.setState(() => ({
            radiator_check : val,
        }));
    };

    onStartCheckChange(){
        const val = document.getElementById("start_check").value;
        this.setState(() => ({
            start_check : val,
        }));
    };

    onWiperCheckChange(){
        const val = document.getElementById("wiper_check").value;
        this.setState(() => ({
            wiper_check : val,
        }));
    };

    onBatteryCheckChange(){
        const val = document.getElementById("battery_check").value;
        this.setState(() => ({
            battery_check : val,
        }));
    };

    render(){
        return (
            <div>
                <SelectOpt 
                    for = "abnormal_noise_check"
                    title = "Does Engine Create any abnormal noise?"
                    id = "abnormal_noise_check"
                    name = "abnormal_noise_check"
                    value = {this.state.abnormal_noise_check}
                    onChange = {this.onAbnormalNoiseCheckChange}
                />
                <SelectOpt 
                    for = "radiator_check"
                    title = "Is Radiator in good condition?"
                    id = "radiator_check"
                    name = "radiator_check"
                    value = {this.state.radiator_check}
                    onChange = {this.onRadiatorCheckChange}
                />
                <SelectOpt 
                    for = "start_check"
                    title = "Is Engine starting in a single crank?"
                    id = "start_check"
                    name = "start_check"
                    value = {this.state.start_check}
                    onChange = {this.onStartCheckChange}
                />
                <SelectOpt 
                    for = "wiper_check"
                    title = "Is Wiper working properly?"
                    id = "wiper_check"
                    name = "wiper_check"
                    value = {this.state.wiper_check}
                    onChange = {this.onWiperCheckChange}
                />
                <SelectOpt 
                    for = "battery_check"
                    title = "Is battery in good condition?"
                    id = "battery_check"
                    name = "battery_check"
                    value = {this.state.battery_check}
                    onChange = {this.onBatteryCheckChange}
                />


            </div>
        )
    }
}