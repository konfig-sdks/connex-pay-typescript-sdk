/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SaleCreateTransactionRequestCustomParametersInner } from './sale-create-transaction-request-custom-parameters-inner';
import { TransactionCaptureAuthorizationRequestConnexPayTransaction } from './transaction-capture-authorization-request-connex-pay-transaction';

/**
 * 
 * @export
 * @interface TransactionCaptureAuthorizationRequest
 */
export interface TransactionCaptureAuthorizationRequest {
    /**
     * Device\'s Guid provided by ConnexPay.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'DeviceGuid': string;
    /**
     * Guid received from the AuthOnly operation.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'AuthOnlyGuid': string;
    /**
     * Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'SequenceNumber'?: string;
    /**
     * 
     * @type {TransactionCaptureAuthorizationRequestConnexPayTransaction}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'ConnexPayTransaction'?: TransactionCaptureAuthorizationRequestConnexPayTransaction;
    /**
     * This is the most common number you\'ll see throughout the ConnexPay Portal. Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field. The maximum length is 50 alpha-numeric characters and allows dashes ( - ). If you provided an order number in the AUTH request it will be overwritten with the order number in the CAPTURE endpoint.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'OrderNumber'?: string;
    /**
     * Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes. The maximum length is 100 characters and is alpha-numeric.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'CustomerID'?: string;
    /**
     * Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.
     * @type {string}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'AssociationID'?: string;
    /**
     * You can add custom parameters to your sale request in the event that you need to associate additional information with the pay-in. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \"invoice\" and the value parameter as the invoice number. This requires customized reporting so you\'ll need to work with your implementations specialist to determine what\'s required.
     * @type {Array<SaleCreateTransactionRequestCustomParametersInner>}
     * @memberof TransactionCaptureAuthorizationRequest
     */
    'CustomParameters'?: Array<SaleCreateTransactionRequestCustomParametersInner>;
}

