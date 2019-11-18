import { FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { ParamMap } from '@angular/router';

/**
 * A custom implementation of ErrorStateMatcher that allows the Angular Material input components to
 * recognise both individual field validation errors and cross field validation errors. Since each
 * of the number input field pairings have their own associated error, the constructor accepts as its
 * argument the name of the key to check on the forms errors object. 
 */
export class RangeErrorMatcher implements ErrorStateMatcher {
    constructor(private errorType: string) {}
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        console.log(control.errors);
        return control.invalid || (form.errors && form.errors[this.errorType])
    }
}


/**
 * A factory for creating custom cross field validators for the reactive form. Operates on a
 * specific field pairing determined by the fieldGroup argument passed to it, and triggers an
 * error on the form when the _gt and _lt fields for the field pairing are set to conflicting 
 * values.
 * @param fieldGroup - the common prefix for the field pairing on which to operate.
 */
export const rangeValidatorFactory = (fieldGroup: string) => (form: FormGroup) => {
    const gtControlValue = form.get(`${fieldGroup}_gt`).value;
    const ltControlValue = form.get(`${fieldGroup}_lt`).value;
    console.log(gtControlValue, ltControlValue);
    return ltControlValue > gtControlValue ? null : { [`${fieldGroup}RangeError`]: true }
}

/**
 * A factory that produces a function that can determine which error to show for a given field
 * based on the form state, and returns that error message.
 * @param form - the FormGroup instance to use.
 * @param fieldGroup - the common prefix for the field pairing that the field this function will
 * operate on belongs to.
 * @param isGt - whether this field is the _gt or _lt field within its field pairing.
 */
export const errorMessageGetterFactory = (form: FormGroup, fieldGroup: string, isGt: boolean) => {
    const errorName = `${fieldGroup}RangeError`;
    const controlName = `${fieldGroup}_${isGt ? 'gt' : 'lt'}`;
    return () => {
        if (form.errors && form.errors[errorName]) {
            return `Must be ${isGt ? 'less' : 'greater'} than adjacent field`;
        } else {
            const control = form.controls[controlName];
            if (control.errors && control.errors.required) {
                return 'This field is required';
            } else if (control.errors && control.errors.min) {
                return 'This field must be 0 or greater';
            }
        }
    }
}

/**
 * Sanitises values from the query params, falling back to a default value when appropriate and ensures
 * that the value is converted to the correct type, then returns this safe value.
 * @param params - the ParamMap instance to grab the value from.
 * @param key - the key at which the value can be found on the ParamMap.
 * @param defaultValue - the default value to use if required.
 * @param shouldParseToInt - when true the string value will be converted to an integer.
 */
export const getSafeValue = (params: ParamMap, key: string, defaultValue: string|number, shouldParseToInt?: boolean): string|number => {
    if (shouldParseToInt) {
        const value = parseInt( params.get(key) );
        return Number.isNaN(value) ? defaultValue : value;
    } else {
        const value = params.get(key);
        return value === null ? defaultValue : value;
    }
}

