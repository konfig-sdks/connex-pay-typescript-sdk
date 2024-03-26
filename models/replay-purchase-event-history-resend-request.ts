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
 * @interface ReplayPurchaseEventHistoryResendRequest
 */
export interface ReplayPurchaseEventHistoryResendRequest {
    /**
     * The unique GUID for a particular purchase.  This would be the Guid returned on your virtual card, lodged card, physical card or ACH issue call.
     * @type {string}
     * @memberof ReplayPurchaseEventHistoryResendRequest
     */
    'SourceGuid'?: string;
    /**
     * Include your Merchant Guid instead of the Source Guid if you want to see all events for a given date range (you must also include the date range parameters)
     * @type {string}
     * @memberof ReplayPurchaseEventHistoryResendRequest
     */
    'MerchantGuid'?: string;
    /**
     * Transaction ID as displayed in Bridge
     * @type {string}
     * @memberof ReplayPurchaseEventHistoryResendRequest
     */
    'EventGuid'?: string;
    /**
     * From date
     * @type {string}
     * @memberof ReplayPurchaseEventHistoryResendRequest
     */
    'FromDateTime'?: string;
    /**
     * To date
     * @type {string}
     * @memberof ReplayPurchaseEventHistoryResendRequest
     */
    'ToDateTime'?: string;
}
