import React from 'react';
import SelectOpt from './SelectOpt';

export default class InteriorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roof_lining_check : "No",
            ac_check : "No",
            carpet_check : "No",
            lock_check : "No",
            upholstery_check : "No"
        }

        //Binding the func
        this.onRoofLiningCheckChange = this.onRoofLiningCheckChange.bind(this);
        this.onAcCheckChange = this.onAcCheckChange.bind(this);
        this.onCarpetCheckChange = this.onCarpetCheckChange.bind(this);
        this.onLockCheckChange = this.onLockCheckChange.bind(this);
        this.onUpholsteryCheckChange = this.onUpholsteryCheckChange.bind(this);
    }

    //Functions
    onRoofLiningCheckChange(){
        const val = document.getElementById("roof_lining_check").value;
        this.setState(() => ({
            roof_lining_check : val,
        }));
    };

    onAcCheckChange(){
        const val = document.getElementById("ac_check").value;
        this.setState(() => ({
            ac_check : val,
        }));
    };

    onCarpetCheckChange(){
        const val = document.getElementById("carpet_check").value;
        this.setState(() => ({
            carpet_check : val,
        }));
    };

    onLockCheckChange(){
        const val = document.getElementById("lock_check").value;
        this.setState(() => ({
            lock_check : val,
        }));
    };

    onUpholsteryCheckChange(){
        const val = document.getElementById("upholstery_check").value;
        this.setState(() => ({
            upholstery_check : val,
        }));
    };

    render(){
        return (
            <div>
                <SelectOpt 
                    for = "roof_lining_check"
                    title = "Is Roof Lining in good condition?"
                    id = "roof_lining_check"
                    name = "roof_lining_check"
                    value = {this.state.roof_lining_check}
                    onChange = {this.onRoofLiningCheckChange}
                />
                <SelectOpt 
                    for = "ac_check"
                    title = "Is AC working fine?"
                    id = "ac_check"
                    name = "ac_check"
                    value = {this.state.ac_check}
                    onChange = {this.onAcCheckChange}
                />
                <SelectOpt 
                    for = "carpet_check"
                    title = "Are Carpets and floor mats free of cuts?"
                    id = "carpet_check"
                    name = "carpet_check"
                    value = {this.state.carpet_check}
                    onChange = {this.onCarpetCheckChange}
                />
                <SelectOpt 
                    for = "lock_check"
                    title = "Is central lock system working fine?"
                    id = "lock_check"
                    name = "lock_check"
                    value = {this.state.lock_check}
                    onChange = {this.onLockCheckChange}
                />
                <SelectOpt 
                    for = "upholstery_check"
                    title = "Is Upholstery in good condition?"
                    id = "upholstery_check"
                    name = "upholstery_check"
                    value = {this.state.upholstery_check}
                    onChange = {this.onUpholsteryCheckChange}
                />


            </div>
        )
    }
}