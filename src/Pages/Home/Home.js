import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from '../../Components/NavBar/NavBar';
import Modal from '../../Components/Modal/Modal';
import Table from '../../Components/Table/Table';
import Form from '../../Components/Form/Form';
import PopUp from '../../Components/PopUp/PopUp';
import ApiClient from '../../utils/ApiClient';

class Home extends Component {

  constructor(props) {

    super(props);

    this.state = {
      users: [],
    };

  }

  removeUser = id => {
    const { users } = this.state;
    const usersWithoutRemoved = users.filter((user) => { return user.id !== id; })

    ApiClient.DeleteUser(id)
      .then(response => {
        if (response.message === 'deleted') {
          this.setState({
            users: [...usersWithoutRemoved]
          })
          PopUp.showPopUp('error', 'Removido com sucesso!')
        }
      })
      .catch(err => PopUp.showPopUp('error', 'Falha ao se comunicar com a api'));
  }

  addUser = newUser => {
    ApiClient.CreateUser(JSON.stringify(newUser))
      .then(response => response.data)
      .then(user => {
        this.setState({ users: [...this.state.users, user] });
        PopUp.showPopUp('success', 'Adicionado!');
      })
      .catch(err => PopUp.showPopUp('error', 'Falha ao se comunicar com a api'));
  }

  componentDidMount() {
    ApiClient.GetUsers()
      .then(response => {
          this.setState({ users: [...this.state.users, ...response.data] })
      })
      .catch(err => PopUp.showPopUp('error', 'Falha ao se comunicar com a api'));
  }

  render() {
    const formModalId = 'modalAdd';

    return (
      <Fragment>
        <NavBar />
        <div className="container" style={{ marginTop: "3%" }}>
          <h2>Usuários</h2>
          <Table users={this.state.users} removeUser={this.removeUser} />
          <button
            type="button"
            style={{ margin: "2%", float: "right" }}
            className="btn blue-grey darken-4 modal-trigger"
            data-target={formModalId}>
            Adicionar Linha
          </button>
          <Modal
            ModalId={formModalId}
            ModalHeader="Cadastro"
            ModalBody={<Form addUser={this.addUser} />}
          />
        </div>
      </Fragment>
    );
  }
}
export default Home;
