import React from 'react';
import SelectOpt from './SelectOpt';

export default class TyreForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            left_front : '',
            right_front : '',
            left_rear : '',
            spare_tyre : ''
        }

        //Binding the func
        this.onLeftRearChangeHandler = this.onLeftRearChangeHandler.bind(this);
        this.onSpareChangeHandler = this.onSpareChangeHandler.bind(this);
        this.onLeftFrontChangeHandler = this.onLeftFrontChangeHandler.bind(this);
        this.onRightFrontChangeHandler = this.onRightFrontChangeHandler.bind(this);
    }

    //Functions
    onLeftRearChangeHandler(e){
        const val = e.target.value;
        if((val > 100 || val <= 0) && val != ''){
            return ;
        }
        this.setState(() => ({
            left_rear : val,
        }));
    };

    onLeftFrontChangeHandler(e){
        const val = e.target.value;
        if((val > 100 || val <= 0) && val != ''){
            return ;
        }
        this.setState(() => ({
            left_front : val,
        }));
    };

    onRightFrontChangeHandler(e){
        const val = e.target.value;
        if((val > 100 || val <= 0) && val != ''){
            return ;
        }
        this.setState(()=> ({
            right_front : val,
        }));
    };

    onSpareChangeHandler(e){
        const val = e.target.value;
        if((val > 100 || val <= 0) && val != ''){
            return ;
        }
        this.setState(() => ({
            spare_tyre : val,
        }));
    }''

    render(){
        return (
            <div>
                <label for = "left-front-tyre">Left Front Tyre : </label>
                <input 
                    type = "number" 
                    min = "1" 
                    max = "100"
                    value = {this.state.left_front}
                    onChange = {this.onLeftFrontChangeHandler}
                /><br />
                <label for = "right-front-tyre">Right Front Tyre : </label>
                <input 
                    type = "number"
                    min = "1"
                    max = "100"
                    value = {this.state.right_front}
                    onChange = {this.onRightFrontChangeHandler}
                /><br />
                <label for = "left-rear-tyre">Left Rear Tyre : </label>
                <input 
                    type = "number"
                    min = "1"
                    max = "100"
                    value = {this.state.left_rear}
                    onChange = {this.onLeftRearChangeHandler}
                /><br />
                <label for = "spare-tyre">Spare Tyre</label>
                <input 
                    type = "number"
                    min = "1"
                    max = "100"
                    value = {this.state.spare_tyre}
                    onChange = {this.onSpareChangeHandler}
                />
            </div>
        )
    }
}