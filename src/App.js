import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './Components/NavBar';
import Modal from './Components/Modal';
import Tabela from './Components/Tabela';
import Form from './Components/Form';
import PopUp from './Components/PopUp';

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

    PopUp.showPopUp('error', 'Removido com sucesso!');

  }

  adicionaLinha = novaLinha => {
    this.setState({ autores: [...this.state.autores, novaLinha] });
    PopUp.showPopUp('success', 'Adicionado com sucesso!');
  }

  render() {
    const modalAdicionarId = 'modalAdd';

    return (
      <Fragment>
        <NavBar />
        <div className="container" style={{marginTop: "3%" }}>
          <h2>Usuários</h2>
          <Tabela autores={this.state.autores} removeLinha={this.removeLinha} />
          <button
            type="button"
            style={{ margin: "2%", float: "right" }}
            className="btn blue-grey darken-4 modal-trigger"
            data-target={modalAdicionarId}>
            Adicionar Linha
        </button>
          <Modal
            ModalId={modalAdicionarId}
            ModalHeader="Cadastro"
            ModalBody={<Form adicionaLinha={this.adicionaLinha} />}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
