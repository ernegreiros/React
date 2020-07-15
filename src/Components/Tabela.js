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
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.sobrenome}</td>
                <td>{linha.email}</td>
                <td>
                    <button
                        onClick = {() => {props.removeLinha(index)}}
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
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {
        const { autores, removeLinha } = this.props;

        return (
            <table className="table highlight centered responsive-table ">
                <TableHead />
                <TableBody autores={autores} removeLinha={removeLinha} />
            </table>
        );
    }

}

export default Tabela;