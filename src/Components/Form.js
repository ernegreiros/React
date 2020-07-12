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

    state = {
        nome: '',
        sobrenome: '',
        email: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event, cadastro, adicionaLinha) => {
         adicionaLinha(event, cadastro);
         this.setState({
            nome: '',
            sobrenome: '',
            email: ''
         });
    }

    render() {
        const cadastro = { ...this.state };
        const { adicionaLinha } = this.props;

        return (
            <form onSubmit={event => this.onSubmit(event, cadastro, adicionaLinha)} >
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
                            type="submit"
                            className="btn btn-primary">
                            Criar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;