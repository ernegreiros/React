import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.users.map((user) => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                    <button
                        onClick = {() => {props.removeUser(user.id)}}
                        style={{ margin: "1%" }}
                        type="button"
                        className="btn-small red darken-4">
                        X
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
}

class Table extends Component {

    render() {
        const { users, removeUser } = this.props;

        return (
            <table className="table highlight centered responsive-table ">
                <TableHead />
                <TableBody users={users} removeUser={removeUser} />
            </table>
        );
    }

}

export default Table;