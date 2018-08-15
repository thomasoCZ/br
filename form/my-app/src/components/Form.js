import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="contact-form">

                <form onSubmit={this.props.handleSubmit}>
                    <div
                        className={this.props.state.secondStep === false && this.props.state.finalStep === false ? 'active' : 'hide'}>
                        <h2>What do you need from us ?</h2>
                        <div className="checkboxGrid">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="web"
                                           name="web"
                                           checked={this.props.state.web}
                                           onChange={this.props.handleInputChange}

                                    />
                                    <span className="square"></span>
                                    Website development
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="animation"
                                           name="animation"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Animation / Video
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="shop"
                                           name="shop"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Shop/Ecommerce solution
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="consulting"
                                           name="consulting"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    UX / Design / Marketing Consulting
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="app"
                                           name="app"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Web App
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="other"
                                           name="other"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Other ?
                                </label>
                            </div>

                            {this.props.state.isValid === false &&
                            <div className="isNotValid">
                                Please chose some service
                            </div>
                            }

                        </div>
                        <button className="button--outline button" onClick={this.props.nextStepChange}>
                            <span className="btn__text">Continue</span>
                        </button>
                    </div>
                    <div className={this.props.state.secondStep === true ? 'active' : 'hide'}>
                        <h2>Leave us a message</h2>
                        <div className="formGrid">

                            <div className="has-float-label">
                                <input type="text"
                                       name="name"
                                       value={this.props.state.name}
                                       onChange={this.props.handleInputChange}
                                       required="required"
                                       id="name"
                                />
                                <label htmlFor="name">Full Name:</label>
                            </div>
                            <div className="has-float-label">
                                <input type="email"
                                       name="address"
                                       value={this.props.state.address}
                                       onChange={this.props.handleInputChange}
                                       required="required"
                                       id="address"
                                />
                                <label htmlFor="address">Emal Address:</label>

                            </div>
                            <div className="has-float-label">
                                <textarea
                                    className="form-input"
                                    name="message"
                                    rows="5"
                                    value={this.props.state.message}
                                    onChange={this.props.handleInputChange}
                                    placeholder=""
                                    required="required"
                                    id="message"
                                />
                                <label className="form-label" htmlFor="message">Message</label>
                            </div>
                        </div>
                        <button type="submit" className="button--outline button">
                            <span className="btn__text">Odeslat</span>
                        </button>
                    </div>
                    <div className={this.props.state.finalStep === true ? 'active' : 'hide'}>
                        <h3>Thank you for your message<br />
                            We will back to you soon
                        </h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;

