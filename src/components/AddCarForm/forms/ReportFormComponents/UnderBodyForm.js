import React from 'react';
import SelectOpt from './SelectOpt';

export default class UnderBodyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oil_check : "No",
            joint_check : "No",
        }

        //Binding the func
        this.onOilCheckChange = this.onOilCheckChange.bind(this);
        this.onJointCheckChange = this.onJointCheckChange.bind(this);
    }

    //Functions
    onOilCheckChange(){
        const val = document.getElementById("oil_check").value;
        this.setState(() => ({
            oil_check : val,
        }));
    };

    onJointCheckChange(){
        const val = document.getElementById("joint_check").value;
        this.setState(() => ({
            joint_check : val,
        }));
    };

    render(){
        return (
            <div>
                <SelectOpt 
                    for = "oil_check"
                    title = "Are there any oil leak signs?"
                    id = "oil_check"
                    name = "oil_check"
                    value = {this.state.oil_check}
                    onChange = {this.onOilCheckChange}
                />
                <SelectOpt 
                    for = "joint_check"
                    title = "Is Universal Joint in good condition?"
                    id = "joint_check"
                    name = "joint_check"
                    value = {this.state.joint_check}
                    onChange = {this.onJointCheckChange}
                />
            </div>
        )
    }
}