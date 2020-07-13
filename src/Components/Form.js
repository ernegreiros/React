import React, { Component } from 'react';


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

        this.stateInicial = {
            nome: '',
            sobrenome: '',
            email: ''
        }

        this.state = this.stateInicial;
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = () => {
        this.props.adicionaLinha(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const cadastro = { ...this.state };
        const { adicionaLinha } = this.props;

        return (
            <form>
                <div className="row">
                    <div className="col">
                        <Input
                            type="text"
                            label="Nome"
                            name="nome"
                            value={cadastro.nome}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input
                            type="text"
                            label="Sobrenome"
                            name="sobrenome"
                            value={cadastro.sobrenome}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col">
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
                    <div className="col">
                        <button
                            style={{ float: "right" }}
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onSubmit}>                            
                            Criar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;