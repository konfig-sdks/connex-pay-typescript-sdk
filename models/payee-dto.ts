/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PayeeDto
 */
export interface PayeeDto {
    /**
     * Guid for the created Payee that is returned by ConnexPay upon creation of a Payee. Ignored if provided in a Payee creation request.
     * @type {string}
     * @memberof PayeeDto
     */
    'payeeGuid'?: string;
    /**
     * Merchant guid for the Payee to be created.
     * @type {string}
     * @memberof PayeeDto
     */
    'merchantGuid': string;
    /**
     * First name for the Payee to be created.
     * @type {string}
     * @memberof PayeeDto
     */
    'firstName': string;
    /**
     * Last name for the Payee to be created.
     * @type {string}
     * @memberof PayeeDto
     */
    'lastName': string;
    /**
     * Email address for the Payee.
     * @type {string}
     * @memberof PayeeDto
     */
    'email': string;
    /**
     * Postal address line 1 for the Payee. Alphanumerics and [,.-\'] are allowed.
     * @type {string}
     * @memberof PayeeDto
     */
    'address1'?: string;
    /**
     * Postal address line 2 for the Payee. Alphanumerics and [,.-\'] are allowed.
     * @type {string}
     * @memberof PayeeDto
     */
    'address2'?: string;
    /**
     * Postal address city for the Payee.
     * @type {string}
     * @memberof PayeeDto
     */
    'city'?: string;
    /**
     * Postal address state for the Payee.
     * @type {string}
     * @memberof PayeeDto
     */
    'state'?: string;
    /**
     * Postal code for the Payee.
     * @type {string}
     * @memberof PayeeDto
     */
    'zipCode'?: string;
    /**
     * Phone number for the Payee, up to 10-character string.
     * @type {string}
     * @memberof PayeeDto
     */
    'phone': string;
    /**
     * Status for the Payee.
     * @type {string}
     * @memberof PayeeDto
     */
    'status'?: string;
    /**
     * Unique identifier that refers to the card saved for a Payee when using the Payment Widget. It will be null when a Payee is created but will have a value once stored for the Payee using the Payment Widget.
     * @type {string}
     * @memberof PayeeDto
     */
    'cardId'?: string;
}
