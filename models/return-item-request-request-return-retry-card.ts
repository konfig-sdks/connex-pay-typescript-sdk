/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Card data to be used in the event a sale return to the original card is declined and a retry to a new card should be attempted. This attempt needs to be made within 7 days of the failed return authorization
 * @export
 * @interface ReturnItemRequestRequestReturnRetryCard
 */
export interface ReturnItemRequestRequestReturnRetryCard {
    /**
     * Card number. Must be 16 characters.
     * @type {string}
     * @memberof ReturnItemRequestRequestReturnRetryCard
     */
    'CardNumber'?: string;
    /**
     * Cardholder\'s name
     * @type {string}
     * @memberof ReturnItemRequestRequestReturnRetryCard
     */
    'CardHolderName'?: string;
    /**
     * The three or four digit CVV code at the back side of the credit and debit card
     * @type {number}
     * @memberof ReturnItemRequestRequestReturnRetryCard
     */
    'Cvv2'?: number;
    /**
     * Card\'s expiry date in the YYMM format
     * @type {string}
     * @memberof ReturnItemRequestRequestReturnRetryCard
     */
    'ExpirationDate'?: string;
}

