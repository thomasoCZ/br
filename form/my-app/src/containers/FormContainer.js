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
        finalStep: false,
        isValid: ""
    };


    isSomethingChecked = (state) => {

        let helperObject = ["web",
            "animation",
            "shop",
            "consulting",
            "app",
            "other"
        ];
        let result = false;
        helperObject.map(function (service) {
            if (state[service] == true) {
                result = true;
            }
        });
        return result;

    };


    nextStepChange = (event) => {
        event.preventDefault();


        this.setState({
            secondStep: this.isSomethingChecked(this.state),
            isValid: this.isSomethingChecked(this.state)
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

        let formEmail = new FormData();
        formEmail.append('formData', JSON.stringify( this.state ));

        fetch("https://brivestudio.com/sendMail.php", {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: formEmail
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

