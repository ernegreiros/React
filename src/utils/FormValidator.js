import validator from 'validator';

class FormValidator {

    constructor(validations) {
        this.validations = validations;
    }

    validate(state) {

        let validation = this.valid();

        this.validations.forEach(validationRule => {

            const fieldValue = state[validationRule.fieldName];
            const args = validationRule.args || [];
            const validationMethod = validator[validationRule.validationMethod];

            if (validationMethod(fieldValue, ...args, state) !== validationRule.isValidWhen) {

                validation[validationRule.fieldName] = {
                    isInvalid: true,
                    message: validationRule.message
                }
                
                validation.isValid = false;
            }
        });

        return validation;
    }

    valid() {
        const validation = {};

        this.validations.map(rule => (
            validation[rule.fieldName] = { isInvalid: false, message: '' }
        ));

        return { isValid: true, ...validation }
    }

}

export default FormValidator;