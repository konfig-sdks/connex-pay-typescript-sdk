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
 * @interface SaleCreateTransaction201ResponseConnexPayTransaction
 */
export interface SaleCreateTransaction201ResponseConnexPayTransaction {
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransaction201ResponseConnexPayTransaction
     */
    'guid'?: string;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransaction201ResponseConnexPayTransaction
     */
    'expectedPayments'?: number;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransaction201ResponseConnexPayTransaction
     */
    'incomingTransCode'?: string;
}
