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
 * @interface VoidSearchVoidsResponseSearchResultDTOInnerSaleCard
 */
export interface VoidSearchVoidsResponseSearchResultDTOInnerSaleCard {
    /**
     * 
     * @type {any}
     * @memberof VoidSearchVoidsResponseSearchResultDTOInnerSaleCard
     */
    'cardHolderName'?: any;
    /**
     * 
     * @type {string}
     * @memberof VoidSearchVoidsResponseSearchResultDTOInnerSaleCard
     */
    'cardType'?: string;
    /**
     * 
     * @type {string}
     * @memberof VoidSearchVoidsResponseSearchResultDTOInnerSaleCard
     */
    'last4'?: string;
}

