import React, { Component, Fragment } from 'react';
import './App.css';
import Modal from './Components/Modal';
import Tabela from './Components/Tabela';
import Form from './Components/Form';

class App extends Component {
  state = {
    autores: [
      {
        nome: "Diogenes",
        sobrenome: "Uilia",
        email: "Diogenes@example.com"
      },
      {
        nome: "maria",
        sobrenome: "montana",
        email: "maria@example.com"
      },
      {
        nome: "julia",
        sobrenome: "maria",
        email: "julia@example.com"
      }
    ],
  };

  removeLinha = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((pessoa, posicao) => {
          return posicao !== index;
        }),
      }
    );
  }

  adicionaLinha = novaLinha => {
    this.setState({ autores: [...this.state.autores, novaLinha] })
  }

  render() {
    const modalAdicionarId = 'modalAdd';

    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeLinha={this.removeLinha} />
        <button
          type="button"
          style={{ margin: "1%", float: "right" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target={"#" + modalAdicionarId}>
          Adicionar Linha
        </button>
        <Modal
          modalHeader="Novo Registro"
          modalBody={<Form adicionaLinha={this.adicionaLinha} />}
          modalId={modalAdicionarId}
        />
      </Fragment>
    );
  }
}

export default App;
