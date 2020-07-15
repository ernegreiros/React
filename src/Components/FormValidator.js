import validator from 'validator';

class FormValidator {

    constructor(validacoes) {

        this.validacoes = validacoes;
    }

    validar(state) {

        let validacao = this.valido();

        this.validacoes.forEach(regraDeValidacao => {

            const valorCampo = state[regraDeValidacao.nomeCampo];
            const args = regraDeValidacao.args || [];
            const metodoValidacao = validator[regraDeValidacao.tipoValidacao];

            if (metodoValidacao(valorCampo, ...args, state) !== regraDeValidacao.eValidoQuando) {

                validacao[regraDeValidacao.nomeCampo] = {
                    isInvalid: true,
                    message: regraDeValidacao.mensagem
                }
                
                validacao.isValid = false;
            }
        });

        return validacao;
    }

    valido() {
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.nomeCampo] = { isInvalid: false, message: '' }
        ));

        return { isValid: true, ...validacao }
    }

}

export default FormValidator;