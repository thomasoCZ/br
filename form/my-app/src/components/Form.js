import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="contact-form">
                <h2>What do you need from us ?</h2>
                <form onSubmit={this.props.handleSubmit}>
                    <div className={this.props.state.secondStep === false ? 'active' : ''}>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="web"
                                   name="web"
                                   checked={this.props.state.web}
                                   onChange={this.props.handleInputChange}

                            />
                            Website development
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="animation"
                                   name="animation"
                                   onChange={this.props.handleInputChange}
                            />
                            Animation / Video
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="shop"
                                   name="shop"
                                   onChange={this.props.handleInputChange}
                            />
                            Shop/Ecommerce solution
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="consulting"
                                   name="consulting"
                                   onChange={this.props.handleInputChange}
                            />
                            UX / Design / Marketing Consulting
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="app"
                                   name="app"
                                   onChange={this.props.handleInputChange}
                            />
                           Web App
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="other"
                                   name="other"
                                   onChange={this.props.handleInputChange}
                            />
                            Other ?
                        </label>
                    </div>
                    <button  className="btn" onClick={this.props.nextStepChange}>
                        <span className="btn__text">Continue</span>
                    </button>
                    </div>
                    <div className={this.props.state.secondStep === true ? 'active' : ''}>
                        <label>
                            Full Name:
                            <input type="text"
                                   name="name"
                                   value={this.props.state.name}
                                   onChange={this.props.handleInputChange}
                                   required="required"
                            />
                        </label>
                        <div>
                        <label>Emal Address:</label>
                            <input type="text"
                                   name="address"
                                   value={this.props.state.address}
                                   onChange={this.props.handleInputChange}
                                   required="required"
                            />
                        </div>
                        <div>
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-input"
                                name="message"
                                rows="5"
                                value={this.props.state.message}
                                onChange={this.props.handleInputChange}
                                placeholder=""
                                required="required"
                            />
                        </div>
                        <button type="submit" className="btn">
                            <span className="btn__text">Odeslat</span>
                        </button>
                    </div>
                    <div className={this.props.state.finalStep === true ? 'active' : ''}>
                        <h3>Thank you for your message</h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;

