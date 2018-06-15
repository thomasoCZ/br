import React, {Component} from 'react';
import Form from '../components/Form';

class FormContainer extends Component {

    state = {
        web:"",
        name:"",
        animation:"",
        address:"",
        message:"",
        shop:"",
        consulting:"",
        app:"",
        other:"",
        secondStep: false
    };

    handleOnBlur = (event) => {

    };


    nextStepChange = (event) => {
        event.preventDefault();
        this.setState({
            secondStep: true
        });
    };


    /**
     * @param event
     */
    handleInputChange = (event) => {

        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    };

    /**
     * @param event
     */
    handleSubmit = (event) => {

        event.preventDefault();
        var obj = JSON.stringify(this.state);

        console.log(obj);
    };

    render = () => {
        return (
            <Form state={this.state} handleOnChange={this.handleOnChange}
                        handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}
                        handleOnBlur={this.handleOnBlur}
                        nextStepChange={this.nextStepChange}


            />
        );
    };
}

export default FormContainer;

