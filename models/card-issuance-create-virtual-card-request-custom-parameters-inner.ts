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
 * @interface CardIssuanceCreateVirtualCardRequestCustomParametersInner
 */
export interface CardIssuanceCreateVirtualCardRequestCustomParametersInner {
    /**
     * The custom parameter name can be anything you want to label the field. You can include as many custom parameters as needed to provide additional data to be included for the virtual card.
     * @type {string}
     * @memberof CardIssuanceCreateVirtualCardRequestCustomParametersInner
     */
    'Name'?: string;
    /**
     * The value associated with this parameter. For example, if you are including an invoice number with your virtual card request, you would populate the custom parameter \'Name\' as \'Invoice\' and the custom parameter \'Value\' as the invoice number.
     * @type {string}
     * @memberof CardIssuanceCreateVirtualCardRequestCustomParametersInner
     */
    'Value'?: string;
}

