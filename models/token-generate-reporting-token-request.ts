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
 * @interface TokenGenerateReportingTokenRequest
 */
export interface TokenGenerateReportingTokenRequest {
    /**
     * Assigned username for CXP Bridge
     * @type {string}
     * @memberof TokenGenerateReportingTokenRequest
     */
    'UserName': string;
    /**
     * Assigned password for CXP Bridge
     * @type {string}
     * @memberof TokenGenerateReportingTokenRequest
     */
    'Password': string;
}

