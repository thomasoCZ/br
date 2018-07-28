import React, {Component} from 'react';
import Form from '../components/Form';

class FormContainer extends Component {

    state = {
        web: "",
        name: "",
        animation: "",
        address: "",
        message: "",
        shop: "",
        consulting: "",
        app: "",
        other: "",
        secondStep: false,
        finalStep: false
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

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            web: "",
            name: "",
            animation: "",
            address: "",
            message: "",
            shop: "",
            consulting: "",
            app: "",
            other: "",
        });
    }
    /**
     * @param event
     */
    handleSubmit = (event) => {
        event.preventDefault();


        var obj = JSON.stringify(this.state);
        fetch("http://localhost/br/sendMail.php", {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: obj
        }).then(function (data) {

        }).then(
            this.setState({
            secondStep: false,
            finalStep: true
        })).catch(function (error) {
                console.log('Request failed', error);
            });
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

