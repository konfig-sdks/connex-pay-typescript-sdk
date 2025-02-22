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
 * @interface TokenIssueAuthenticationTokenRequest
 */
export interface TokenIssueAuthenticationTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof TokenIssueAuthenticationTokenRequest
     */
    'grant_type': string;
    /**
     * CXP provided username
     * @type {string}
     * @memberof TokenIssueAuthenticationTokenRequest
     */
    'username': string;
    /**
     * CXP provided password
     * @type {string}
     * @memberof TokenIssueAuthenticationTokenRequest
     */
    'password': string;
}

