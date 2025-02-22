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
 * @interface TransactionCreateAchCreditPaymentResponse
 */
export interface TransactionCreateAchCreditPaymentResponse {
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'merchantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'incomingTransactionCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'paymentId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'isCredit'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'payeeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'paymentStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'scheduleDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'receiptDate'?: string;
    /**
     * 
     * @type {any}
     * @memberof TransactionCreateAchCreditPaymentResponse
     */
    'processingDate'?: any;
}

