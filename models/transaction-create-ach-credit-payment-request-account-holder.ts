/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TransactionCreateAchCreditPaymentRequestAccountHolderAddress } from './transaction-create-ach-credit-payment-request-account-holder-address';
import { TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount } from './transaction-create-ach-credit-payment-request-account-holder-bank-account';

/**
 * Payee\'s account information
 * @export
 * @interface TransactionCreateAchCreditPaymentRequestAccountHolder
 */
export interface TransactionCreateAchCreditPaymentRequestAccountHolder {
    /**
     * Conditional -  Payee\'s First name between 2 to 40 characters. Can be left blank if BusinessName is provided
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'FirstName'?: string;
    /**
     * Conditional - Payee\'s Last name between 2 to 40 characters. Can be left blank if BusinessName is provided
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'LastName'?: string;
    /**
     * Payee\'s Middle name
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'MiddleName'?: string;
    /**
     * Conditional - Can be left blank if FirstName and LastName are provided
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'BusinessName'?: string;
    /**
     * Email up to 100 characters
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'Email'?: string;
    /**
     * Phone number up to 10 characters
     * @type {string}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'Phone'?: string;
    /**
     * 
     * @type {TransactionCreateAchCreditPaymentRequestAccountHolderAddress}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'Address'?: TransactionCreateAchCreditPaymentRequestAccountHolderAddress;
    /**
     * 
     * @type {TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount}
     * @memberof TransactionCreateAchCreditPaymentRequestAccountHolder
     */
    'BankAccount'?: TransactionCreateAchCreditPaymentRequestAccountHolderBankAccount;
}

