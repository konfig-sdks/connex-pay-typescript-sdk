/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AchCreateCreditPaymentRequestAccountHolder } from './ach-create-credit-payment-request-account-holder';

/**
 * 
 * @export
 * @interface AchCreateCreditPaymentRequest
 */
export interface AchCreateCreditPaymentRequest {
    /**
     * Merchant\'s guid. Application level value that indicates the ACH payment is being requested for clients account. Value provided by ConnexPay.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'MerchantGuid': string;
    /**
     * Payment amount with the minimum amount > 0.5.
     * @type {number}
     * @memberof AchCreateCreditPaymentRequest
     */
    'Amount': number;
    /**
     * Payee name up to 100 characters.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'PayeeName': string;
    /**
     * Company Name to display Bank Statement. The first 16 characters will display on the bank account holders statement.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'StatementCompanyName'?: string;
    /**
     * For banks who accept statement descriptors, the first 10 characters will display on the bank account holders statement.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'Description'?: string;
    /**
     * 
     * @type {AchCreateCreditPaymentRequestAccountHolder}
     * @memberof AchCreateCreditPaymentRequest
     */
    'AccountHolder': AchCreateCreditPaymentRequestAccountHolder;
    /**
     * This is the most common number you\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'OrderNumber'?: string;
    /**
     * Transaction sequence number within client environment. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'SequenceNumber'?: string;
    /**
     * This parameter allows you to input an up to 100 character association ID that can be used to tie this ACH Purchase to a sale (Association ID also needs to be included on the sale request). This is useful if you issue the ACH purchase prior to creating the sale that associates to it.
     * @type {string}
     * @memberof AchCreateCreditPaymentRequest
     */
    'AssociationId'?: string;
}

