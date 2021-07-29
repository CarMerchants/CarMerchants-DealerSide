import React from 'react';
import { CommaDelimeter,RemoveCommaDelimeter } from '../../functions/InsertCommaDelimiter';
import MonthSelector from '../../sections/MonthSelector';
import YearSelector from '../../sections/YearSelector';

export default class OverviewForm extends React.Component{
    constructor(props){
        super(props);

        //Setting up the state..
        this.state = {
            brand_name : "",
            model_name : "",
            price : "",
            KMs_driven : "",
            location : "",
            transmission : "Auto",
            fuel_type : "Petrol",
            owner : "1st Owner",
            make_year : (new Date()).getFullYear(),
            make_year_mon : (new Date()).getMonth(),
            reg_year: (new Date()).getFullYear(),
            reg_year_mon : (new Date()).getMonth(),
        }

        //Binding all the functions...
        this.onBrandChangeHandler = this.onBrandChangeHandler.bind(this);
        this.onModelChangeHandler = this.onModelChangeHandler.bind(this);
        this.onPriceChangeHandler = this.onPriceChangeHandler.bind(this);
        this.onLocationChangeHandler = this.onLocationChangeHandler.bind(this);
        this.onKmsChangeHandler = this.onKmsChangeHandler.bind(this);
        this.onOwnerChangeHandler = this.onOwnerChangeHandler.bind(this);
        this.onFuelTypeChangeHandler = this.onFuelTypeChangeHandler.bind(this);
        this.onTransmissionChangeHandler = this.onTransmissionChangeHandler.bind(this);
        this.onMakeYearChangeHandler = this.onMakeYearChangeHandler.bind(this);
        this.onMakeYearMonChangeHandler = this.onMakeYearMonChangeHandler.bind(this);
        this.onRegYearChangeHandler = this.onRegYearChangeHandler.bind(this);
        this.onRegYearMonChangeHandler = this.onRegYearMonChangeHandler.bind(this);
    }

    onBrandChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            brand_name : val,
        }));
    };

    onModelChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            model_name : val,
        }));
    };

    onPriceChangeHandler(e){
        const val = RemoveCommaDelimeter(e.target.value);
        let numbers = /^[0-9]+$/;
        if(!val.match(numbers) && val !=""){
            return ;
        }
        this.setState(() => ({
            price : val,
        }));
    };

    onLocationChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            location : val,
        }));
    };

    onKmsChangeHandler(e){
        const val = RemoveCommaDelimeter(e.target.value);
        let numbers = /^[0-9]+$/;
        if(!val.match(numbers) && val !=""){
            return ;
        }
        this.setState(() => ({
            KMs_driven : val,
        }));
    };

    onFuelTypeChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            fuel_type : val,
        }));
    };

    onTransmissionChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            transmission : val,
        }));
    };

    onOwnerChangeHandler(e){
        const val = e.target.value;
        this.setState(() => ({
            owner : val,
        }));
    };

    onMakeYearChangeHandler(e){
        const val = document.getElementById("make_year").value;
        this.setState(() => ({
            make_year : val,
        }));
    }

    onMakeYearMonChangeHandler(){
        const val = document.getElementById("make_year_mon").value;
        this.setState(() => ({
            make_year_mon : val
        }))
    }

    onRegYearChangeHandler(){
        const val = document.getElementById("reg_year").value;
        this.setState(() => ({
            reg_year : val
        }))
    };

    onRegYearMonChangeHandler(){
        const val = document.getElementById("reg_year_mon").value;
        this.setState(() => ({
            reg_year_mon : val
        }))
    }


    render(){
        return (
            <div>
                <form>
                    <input 
                        type = "text" 
                        placeholder = "Brand Name"
                        value = {this.state.brand_name}
                        onChange = {this.onBrandChangeHandler}
                    /><br/>
                    <input 
                        type = "text" 
                        placeholder = "Model Name"
                        value = {this.state.model_name}
                        onChange = {this.onModelChangeHandler}
                    /><br />
                    <input 
                        type = "text" 
                        placeholder = "Price"
                        value = {CommaDelimeter(this.state.price)}
                        onChange = {this.onPriceChangeHandler}
                    /><br />
                    <input 
                        type = "text" 
                        placeholder = "Car Location"
                        value = {this.state.location}
                        onChange = {this.onLocationChangeHandler}
                    /><br />
                    <input 
                        type = "text" 
                        placeholder = "KMs Driven"
                        value = {CommaDelimeter(this.state.KMs_driven)}
                        onChange = {this.onKmsChangeHandler} 
                    /><br />
                    <label for = "transmission">Transmission Type : </label>
                    <select 
                        name = "transmission"
                        value = {this.state.transmission}
                        onChange = {this.onTransmissionChangeHandler}
                    >
                        <option>Manual</option>
                        <option>Auto</option>
                    </select><br />
                    <label for = "owner">Owner : </label>
                    <select 
                        name = "owner"
                        value = {this.state.owner}
                        onChange = {this.onOwnerChangeHandler}
                    >
                        <option>1st Owner</option>
                        <option>2nd Owner</option>
                    </select><br />
                    <label for = "fuel_type">Fuel : </label>
                    <select 
                        name = "fuel_type"
                        value = {this.state.fuel_type}
                        onChange = {this.onFuelTypeChangeHandler}
                    >
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>
                        <option>Electic</option>
                    </select><br/>
                    <label for = "make_year">Make Year : </label>
                    <YearSelector 
                        name = "make_year" 
                        id = "make_year"
                        value = {this.state.make_year}
                        onChange = {this.onMakeYearChangeHandler}
                    />
                    <MonthSelector 
                        name = "make_year"
                        id = "make_year_mon"
                        value = {this.state.make_year_mon}
                        onChange = {this.onMakeYearMonChangeHandler}
                    /><br />
                    <label for = "reg_year">Registration Year : </label>
                    <YearSelector 
                        name = "reg_year" 
                        id = "reg_year"
                        value = {this.state.reg_year}
                        onChange = {this.onRegYearChangeHandler}
                    />
                    <MonthSelector 
                        name = "reg_year"
                        id = "reg_year_mon"
                        value = {this.state.reg_year_mon}
                        onChange = {this.onRegYearMonChangeHandler}
                    />
                </form>
            </div>
        )
    }
}