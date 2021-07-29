import React from 'react';
import SelectOpt from './SelectOpt';

export default class ExteriorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dent_check : "No",
            corrosion_check : "No",
            replacement_check : "No",
            cracks_check : "No",
            lights_check : "No"
        }

        //Binding the func
        this.onDentCheckChange = this.onDentCheckChange.bind(this);
        this.onCorrosionCheckChange = this.onCorrosionCheckChange.bind(this);
        this.onReplacementCheckChange = this.onReplacementCheckChange.bind(this);
        this.onCracksCheckChange = this.onCracksCheckChange.bind(this);
        this.onLightsCheckChange = this.onLightsCheckChange.bind(this);
    }

    //Functions
    onDentCheckChange(){
        const val = document.getElementById("dent_check").value;
        this.setState(() => ({
            dent_check : val,
        }));
    };

    onCorrosionCheckChange(){
        const val = document.getElementById("corrosion_check").value;
        this.setState(() => ({
            corrosion_check : val,
        }));
    };

    onReplacementCheckChange(){
        const val = document.getElementById("replacement_check").value;
        this.setState(() => ({
            replacement_check : val,
        }));
    };

    onCracksCheckChange(){
        const val = document.getElementById("cracks_check").value;
        this.setState(() => ({
            cracks_check : val,
        }));
    };

    onLightsCheckChange(){
        const val = document.getElementById("lights_check").value;
        this.setState(() => ({
            lights_check : val,
        }));
    };

    render(){
        return (
            <div>
                <SelectOpt 
                    for = "dent_check"
                    title = "Are the Exterior body parts Dent Free?"
                    id = "dent_check"
                    name = "dent_check"
                    value = {this.state.dent_check}
                    onChange = {this.onDentCheckChange}
                />
                <SelectOpt 
                    for = "corrosion_check"
                    title = "Is Exterior Body Part Corrosion Free?"
                    id = "corrosion_check"
                    name = "corrosion_check"
                    value = {this.state.corrosion_check}
                    onChange = {this.onCorrosionCheckChange}
                />
                <SelectOpt 
                    for = "replacement_check"
                    title = "Is Any Part Replaced From Exterior?"
                    id = "replacement_check"
                    name = "replacement_check"
                    value = {this.state.replacement_check}
                    onChange = {this.onReplacementCheckChange}
                />
                <SelectOpt 
                    for = "cracks_check"
                    title = "Are there any cracks in the exterior body parts?"
                    id = "cracks_check"
                    name = "cracks_check"
                    value = {this.state.cracks_check}
                    onChange = {this.onCracksCheckChange}
                />
                <SelectOpt 
                    for = "lights_check"
                    title = "Are the signal lights working fine?"
                    id = "lights_check"
                    name = "lights_check"
                    value = {this.state.lights_check}
                    onChange = {this.onLightsCheckChange}
                />


            </div>
        )
    }
}