import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="contact-form">

                <form onSubmit={this.props.handleSubmit}>
                    <div
                        className={this.props.state.secondStep === false && this.props.state.finalStep === false ? 'active' : 'hide'}>
                        <h2>S čím Vám můžeme pomoci</h2>
                        <div className="checkboxGrid">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="web"
                                           name="web"
                                           checked={this.props.state.web}
                                           onChange={this.props.handleInputChange}

                                    />
                                    <span className="square"></span>
                                    Vývoj a správa webových stránek
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="animation"
                                           name="animation"
                                           onChange={this.props.handleInputChange}

                                    />
                                    <span className="square"></span>
                                    Animace / Video
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="shop"
                                           name="shop"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Eshop / Prodej a platby přes internet
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="consulting"
                                           name="consulting"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Design / Marketing
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="app"
                                           name="app"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Webové aplikace
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="other"
                                           name="other"
                                           onChange={this.props.handleInputChange}
                                    />
                                    <span className="square"></span>
                                    Něco jiného
                                </label>
                            </div>

                            {this.props.state.isValid === false &&
                            <div className="isNotValid">
                                Prosím vyberte alespoň jednu službu
                            </div>
                            }

                        </div>
                        <button className="button--outline button" onClick={this.props.nextStepChange}>
                            <span className="btn__text">Pokračovat</span>
                        </button>
                    </div>
                    <div className={this.props.state.secondStep === true ? 'active' : 'hide'}>
                        <h2>Napište nám</h2>
                        <div className="formGrid">

                            <div className="has-float-label">
                                <input type="text"
                                       name="name"
                                       value={this.props.state.name}
                                       onChange={this.props.handleInputChange}
                                       required="required"
                                       id="name"
                                       placeholder="Jméno"
                                />
                                <label htmlFor="name">Vaše jméno:</label>
                            </div>
                            <div className="has-float-label">
                                <input type="email"
                                       name="address"
                                       value={this.props.state.address}
                                       onChange={this.props.handleInputChange}
                                       required="required"
                                       id="address"
                                       placeholder="Email"
                                />
                                <label htmlFor="address">Váš email:</label>

                            </div>
                            <div className="has-float-label">
                                <textarea
                                    className="form-input"
                                    name="message"
                                    rows="5"
                                    value={this.props.state.message}
                                    onChange={this.props.handleInputChange}
                                    placeholder="Zpráva"
                                    required="required"
                                    id="message"
                                />
                                <label className="form-label" htmlFor="message">Doplnění Vašeho požadavku</label>
                            </div>
                        </div>
                        <button type="submit" className="button--outline button">
                            <span className="btn__text">Odeslat</span>
                        </button>
                    </div>
                    <div className={this.props.state.finalStep === true ? 'active' : 'hide'}>
                        <h3>Děkujeme za Vaši zprávu.<br />
                            Ozveme se Vám co nejdříve na {this.props.state.address}.
                        </h3>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;

