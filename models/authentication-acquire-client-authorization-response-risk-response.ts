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
 * @interface AuthenticationAcquireClientAuthorizationResponseRiskResponse
 */
export interface AuthenticationAcquireClientAuthorizationResponseRiskResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseRiskResponse
     */
    'transactionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseRiskResponse
     */
    'response'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseRiskResponse
     */
    'reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseRiskResponse
     */
    'score'?: string;
}

