import React, { Component } from 'react';
import FormValidator from '../../utils/FormValidator';
import PopUp from '../PopUp/PopUp';

const Input = props => {
    return (
        <input
            style={{ marginTop: "1%", marginBottom: "1%" }}
            type={props.type}
            className="form-control"
            placeholder={props.label}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
        />
    );
}

class Form extends Component {

    constructor(props) {
        super(props);

        this.formValidator = new FormValidator([
            {
                fieldName: 'name',
                validationMethod: 'isEmpty',
                isValidWhen: false,
                message: 'Por favor, digite um nome!'
            },
            {
                fieldName: 'lastname',
                validationMethod: 'isEmpty',
                isValidWhen: false,
                message: 'Por favor, digite um sobrenome!'
            },
            {
                fieldName: 'email',
                validationMethod: 'isEmail',
                isValidWhen: true,
                message: 'Email invalido!'
            },
        ]);

        this.InitialState = {
            name: '',
            lastname: '',
            email: '',
            validation: this.formValidator.valid()
        }

        this.state = this.InitialState;
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = () => {

        const validation = this.formValidator.validate(this.state);

        if (validation.isValid) {
            this.props.addUser(this.state);
            this.setState(this.InitialState);
        } else {
            const { name, lastname, email } = validation;
            const fields = [name, lastname, email]

            const invalidFields = fields.filter(elem => {
                return elem.isInvalid;
            })

            invalidFields.forEach(field => {
                PopUp.showPopUp('error', field.message);
            });
        }

    }

    render() {
        const formValues = { ...this.state };

        return (
            <form>
                <div className="row">
                    <div className="col s6">
                        <Input
                            type="text"
                            label="Nome"
                            name="name"
                            value={formValues.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col s6">
                        <Input
                            type="text"
                            label="Sobrenome"
                            name="lastname"
                            value={formValues.lastname}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Input
                            type="text"
                            label="Email"
                            name="email"
                            value={formValues.email}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <button
                        style={{ float: "right" }}
                        type="button"
                        className="btn blue-grey darken-4"
                        onClick={this.onSubmit}>
                        Criar
                        </button>
                </div>
            </form>
        );
    }
}

export default Form;