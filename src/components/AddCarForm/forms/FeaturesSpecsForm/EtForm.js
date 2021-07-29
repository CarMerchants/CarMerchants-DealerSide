import React from 'react';
import InputFormat from '../../../sections/InputFormat';
import SelectFormat from '../../../sections/SelectFormat';

export default class EtForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            no_of_grs : 0,
            transmission_type : "Auto",
            valve_cyl : 0,
            gearbox : 0
        }

        //Binding Funcs
        this.onGearBoxChange = this.onGearBoxChange.bind(this);
        this.onNoOfGrsChange = this.onNoOfGrsChange.bind(this);
        this.onValveCylChange = this.onValveCylChange.bind(this);
        this.onTransmissionChange = this.onTransmissionChange.bind(this);
    }

    //functions
    onNoOfGrsChange(){
        const val = document.getElementById("no_of_grs").value;
        this.setState(() => ({
            no_of_grs : val,
        }));
    };

    onGearBoxChange(){
        const val = document.getElementById("gearbox").value;
        this.setState(() => ({
            gearbox : val,
        }));
    };

    onValveCylChange(){
        const val = document.getElementById("valve_cyl").value;
        this.setState(() => ({
            valve_cyl : val,
        }));
    };
    
    onTransmissionChange(){
        const val = document.getElementById("transmission_type").value;
        this.setState(() => ({
            transmission_type : val,
        }));
    };

    render(){
        return (
            <div>
                <form>
                    <InputFormat 
                        type = "number"
                        title = "No of gears"
                        name  = "no_of_grs"
                        for = "no_of_gr"
                        id = "no_of_gr"
                        value = {this.state.no_of_gr}
                        onChange = {this.onNoOfGrsChange}
                    />
                    <InputFormat 
                        type = "number"
                        title = "Valve/Cylinder"
                        name = "valve_cyl"
                        id = "valve_cyl"
                        for = "valve_cyl"
                        value = {this.state.valve_cyl}
                        onChange = {this.onValveCylChange}
                    />
                    <InputFormat 
                        type = "number"
                        title = "Gearbox"
                        name = "gearbox"
                        id = "gearbox"
                        for = "gearbox"
                        value = {this.state.gearbox}
                        onChange = {this.onGearBoxChange}
                    />
                    <SelectFormat 
                        for = "transmission_type"
                        id = "transmission_type"
                        name = "transmission_type"
                        title = "Transmission Type"
                        value = {this.state.transmission_type}
                        arr = {["Auto","Manual"]}
                        onChange = {this.onTransmissionChange}
                    />
                </form>
            </div>
        )
    }
}