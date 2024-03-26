/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Payee\'s Bank Account info
 * @export
 * @interface TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount
 */
export interface TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount {
    /**
     * Routing number up to 9 characters
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount
     */
    'RoutingNumber': string;
    /**
     * Account number up to 17 characters
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount
     */
    'AccountNumber': string;
    /**
     * \'Checking\' or \'Saving\'
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount
     */
    'AccountType': string;
    /**
     * Account holder name up to 150 characters
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount
     */
    'AccountHolderName': string;
}
