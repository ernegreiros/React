import React, { Component } from 'react';
import FormValidator from './FormValidator';

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
                nomeCampo: 'nome',
                tipoValidacao: 'isEmpty',
                eValidoQuando: false,
                mensagem: 'Por favor, digite um nome!'
            },
            {
                nomeCampo: 'sobrenome',
                tipoValidacao: 'isEmpty',
                eValidoQuando: false,
                mensagem: 'Por favor, digite um sobrenome!'
            },
            {
                nomeCampo: 'email',
                tipoValidacao: 'isEmail',
                eValidoQuando: true,
                mensagem: 'Email invalido!'
            },
        ]);

        this.stateInicial = {
            nome: '',
            sobrenome: '',
            email: '',
            validacao: this.formValidator.valido()
        }

        this.state = this.stateInicial;
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = () => {

        const validacao = this.formValidator.validar(this.state);

        if (validacao.isValid) {
            this.props.adicionaLinha(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, sobrenome, email } = validacao;
            const campos = [nome, sobrenome, email]

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            })

            camposInvalidos.forEach(console.log);
        }

    }

    render() {

        const cadastro = { ...this.state };

        return (
            <form>
                <div className="row">
                    <div className="col s6">
                        <Input
                            type="text"
                            label="Nome"
                            name="nome"
                            value={cadastro.nome}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col s6">
                        <Input
                            type="text"
                            label="Sobrenome"
                            name="sobrenome"
                            value={cadastro.sobrenome}
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
                            value={cadastro.email}
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