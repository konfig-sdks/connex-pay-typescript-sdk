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
 * @interface FundingMerchantCashBalanceRequest
 */
export interface FundingMerchantCashBalanceRequest {
    /**
     * The merchant\'s GUID. Value provided by ConnexPay.
     * @type {string}
     * @memberof FundingMerchantCashBalanceRequest
     */
    'merchantGUID': string;
    /**
     * Self-service funding amount that will be processed. Maximum transaction and daily funding limits are set by ConnexPay.
     * @type {number}
     * @memberof FundingMerchantCashBalanceRequest
     */
    'amount': number;
    /**
     * true: Fund your merchant cash balance from your merchant bank account. false: Withdraw your merchant cash balance and ConnexPay will credit your merchant bank account.
     * @type {boolean}
     * @memberof FundingMerchantCashBalanceRequest
     */
    'isFundCashBalance': boolean;
}
