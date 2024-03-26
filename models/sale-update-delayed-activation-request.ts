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
 * @interface SaleUpdateDelayedActivationRequest
 */
export interface SaleUpdateDelayedActivationRequest {
    /**
     * Device\'s Guid provided by ConnexPay.
     * @type {string}
     * @memberof SaleUpdateDelayedActivationRequest
     */
    'DeviceGuid': string;
    /**
     * Sales\'s Guid that was provided by ConnexPay upon initial creation of the delayed activation sale.
     * @type {string}
     * @memberof SaleUpdateDelayedActivationRequest
     */
    'SaleGuid': string;
    /**
     * Amount of the transaction that will be processed. Note: this value is submitted multiple times (in different formats) within the integration to support different purposes i.e. risk analysis, merchant processing, etc.  The minimun amount is: $0.50.
     * @type {number}
     * @memberof SaleUpdateDelayedActivationRequest
     */
    'Amount': number;
    /**
     * Set a future date on which to run this sale, at least one day from creation date and within 600 days.
     * @type {string}
     * @memberof SaleUpdateDelayedActivationRequest
     */
    'ActivationDate'?: string;
}
