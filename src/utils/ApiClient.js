const urlApi = 'http://localhost:8000';

const ApiClient = {
    GetUsers: () => {
        return fetch(`${urlApi}/api/users`)
            .then(response => ApiClient.CatchError(response))
            .then(response => response.json());
    },
    CreateUser: user => {
        return fetch(`${urlApi}/api/user`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: user })
            .then(response => ApiClient.CatchError(response))
            .then(response => response.json());
    },
    GetNames: () => {
        return fetch(`${urlApi}/api/user/nome`)
            .then(response => ApiClient.CatchError(response))
            .then(response => response.json());
    },
    GetLastName: () => {
        return fetch(`${urlApi}/api/user/sobrenome`)
            .then(response => ApiClient.CatchError(response))
            .then(response => response.json());
    },
    DeleteUser: id => {
        return fetch(`${urlApi}/api/user/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
            .then(response => ApiClient.CatchError(response))
            .then(response => response.json());
    },
    CatchError: response => {
        if (!response.ok) {
            throw Error(response.responseText);
        }
        return response;
    }
}

export default ApiClient;
