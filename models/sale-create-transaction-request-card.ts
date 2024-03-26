/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SaleCreateTransactionRequestCardCustomer } from './sale-create-transaction-request-card-customer';
import { SaleCreateTransactionRequestCardThreeDS } from './sale-create-transaction-request-card-three-ds';

/**
 * Customer\'s card data. Mandatory if TenderType is Credit or not set. This will be ignored if TenderType is Cash or ACH.
 * @export
 * @interface SaleCreateTransactionRequestCard
 */
export interface SaleCreateTransactionRequestCard {
    /**
     * Mandatory if Guid field is not provided. Card number.  Must be 16 characters. (example: 4532538795426624) or token (example: FfL7exC7Xe2y6624)
     * @type {string}
     * @memberof SaleCreateTransactionRequestCard
     */
    'CardNumber'?: string;
    /**
     * Cardholder\'s name. Providing information in this field allows a user of the ConnexPay portal to search for a transaction using the cardholder name
     * @type {string}
     * @memberof SaleCreateTransactionRequestCard
     */
    'CardHolderName'?: string;
    /**
     * The three or four digit CVV code at the back side of the credit and debit card. This value is required for all card-not-present processing environments
     * @type {string}
     * @memberof SaleCreateTransactionRequestCard
     */
    'Cvv2'?: string;
    /**
     * Optional with Token. Card\'s expiry date in the YYMM format
     * @type {string}
     * @memberof SaleCreateTransactionRequestCard
     */
    'ExpirationDate'?: string;
    /**
     * Guid is the unique identifier for a card info generated by Connexpay upon previous Sale creation. Create Sale API will accept either card info or Guid, but not both
     * @type {string}
     * @memberof SaleCreateTransactionRequestCard
     */
    'Guid'?: string;
    /**
     * Flagging a transaction as \"IsRecurring\": true allows a recurring sale to be submitted without a valid CVV code, which is only intended for scenarios where you might be storing card data to perform repeated payments on the same card, such as a monthly subscriptions. Typically IsRecurring can be defaulted to False.
     * @type {boolean}
     * @memberof SaleCreateTransactionRequestCard
     */
    'IsRecurring'?: boolean;
    /**
     * 
     * @type {SaleCreateTransactionRequestCardCustomer}
     * @memberof SaleCreateTransactionRequestCard
     */
    'Customer'?: SaleCreateTransactionRequestCardCustomer;
    /**
     * 
     * @type {SaleCreateTransactionRequestCardThreeDS}
     * @memberof SaleCreateTransactionRequestCard
     */
    'ThreeDS'?: SaleCreateTransactionRequestCardThreeDS;
}

