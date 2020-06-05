/*
 * Sourced outline from https://github.com/salesforce/sfdx-lwc-jest/tree/master/src/lightning-stubs/input
 */
import { LightningElement, api } from 'lwc';

export default class Input extends LightningElement {
    @api accept;
    @api autocomplete;
    @api checked;
    @api dateAriaControls;
    @api dateAriaDescribedBy;
    @api dateAriaLabel;
    @api dateAriaLabelledBy;
    @api dateStyle;
    _disabled = false;
    @api get disabled() {
        return this._required;
    }
    set disabled(v) {
        this._disabled = v;
        this.manageRequired();
    }
    manageDisabled() {
        this.manageBooleanAttribute(
            this.template.querySelector('.slds-input'),
            'disabled',
            this._disabled
        );
    }
    @api fieldLevelHelp;
    @api files;
    @api formatFractionDigits;
    @api formatter;
    @api isLoading;
    @api label;
    @api max;
    @api maxLength;
    @api messageToggleActive;
    @api messageToggleInactive;
    @api messageWhenBadInput;
    @api messageWhenPatternMismatch;
    @api messageWhenRangeOverflow;
    @api messageWhenRangeUnderflow;
    @api messageWhenStepMismatch;
    @api messageWhenTooLong;
    @api messageWhenTooShort;
    @api messageWhenTypeMismatch;
    @api messageWhenValueMissing;
    _message;
    get message() {
        return this._message;
    }
    @api min;
    @api minLength;
    @api multiple;
    @api name;
    @api pattern;
    @api placeholder;
    _readOnly = false;
    @api get readOnly() {
        return this._required;
    }
    set readOnly(v) {
        this._readOnly = v;
        this.manageRequired();
    }
    manageReadOnly() {
        this.manageBooleanAttribute(
            this.template.querySelector('.slds-input'),
            'readonly',
            this._readOnly
        );
    }
    _required = false;
    @api get required() {
        return this._required;
    }
    set required(v) {
        this._required = v;
        this.manageRequired();
    }
    manageRequired() {
        this.manageBooleanAttribute(
            this.template.querySelector('.slds-input'),
            'required',
            this._required
        );
    }
    @api step;
    @api timeAriaControls;
    @api timeAriaDescribedBy;
    @api timeAriaLabelledBy;
    @api timeStyle;
    @api timezone;
    @api type = 'text';
    @api get validity() {
        return this._validity;
    }
    _validity = true;
    _value = '';
    @api get value() {
        return this._value ? this._value : '';
    }
    set value(v) {
        this._value = v;
    }
    @api variant;

    _booleanAttrSet = false;

    renderedCallback() {
        if (this._booleanAttrSet) {
            return;
        }

        this._booleanAttrSet = true;
        // clean up the control with the boolean attributes
        this.manageRequired();
        this.manageDisabled();
        this.manageReadOnly();
    }

    @api checkValidity() {
        this._validity = true;
        if (this._required) {
            this._validity = this._validity && this.value && this.value !== '';
        }
    }
    @api reportValidity() {}
    @api setCustomValidity() {}
    @api showHelpMessageIfInvalid() {}

    manageBooleanAttribute(control, attrName, setting) {
        if (control) {
            if (setting) {
                control.setAttribute(attrName, attrName);
            } else {
                control.removeAttribute(attrName);
            }
        }
    }

    get inputElement() {
        return this.template.querySelector('input');
    }

    handleOnChange(event) {
        let val = event.target.value;
        this._value = val;
        this.dispatchEvent(new CustomEvent('change'), { detail: { val } });
    }
}
