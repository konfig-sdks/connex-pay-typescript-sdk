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
 * @interface SaleCreateTransactionResponseConnexPayTransaction
 */
export interface SaleCreateTransactionResponseConnexPayTransaction {
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseConnexPayTransaction
     */
    'guid'?: string;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransactionResponseConnexPayTransaction
     */
    'expectedPayments'?: number;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseConnexPayTransaction
     */
    'incomingTransCode'?: string;
}

