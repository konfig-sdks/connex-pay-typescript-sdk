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
 * @interface FundingTransferMerchantCashBalanceRequest
 */
export interface FundingTransferMerchantCashBalanceRequest {
    /**
     * The merchant\'s GUID of the withdrawn account. Value provided by ConnexPay.
     * @type {string}
     * @memberof FundingTransferMerchantCashBalanceRequest
     */
    'TransferredFrom': string;
    /**
     * The merchant\'s GUID of the deposited account. Value provided by ConnexPay.
     * @type {string}
     * @memberof FundingTransferMerchantCashBalanceRequest
     */
    'TransferredTo': string;
    /**
     * Transferred funding amount that will be processed. Maximum transaction and daily funding limits are set by ConnexPay.
     * @type {number}
     * @memberof FundingTransferMerchantCashBalanceRequest
     */
    'Amount': number;
}

