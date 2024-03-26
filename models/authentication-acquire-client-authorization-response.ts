/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AuthenticationAcquireClientAuthorizationResponseCard } from './authentication-acquire-client-authorization-response-card';
import { AuthenticationAcquireClientAuthorizationResponseEnhancedData } from './authentication-acquire-client-authorization-response-enhanced-data';
import { AuthenticationAcquireClientAuthorizationResponseRiskResponse } from './authentication-acquire-client-authorization-response-risk-response';

/**
 * 
 * @export
 * @interface AuthenticationAcquireClientAuthorizationResponse
 */
export interface AuthenticationAcquireClientAuthorizationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'guid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'batchStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'effectiveAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'orderNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'deviceGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'cardDataSource'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'customerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'batchGuid'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'sendReceipt'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'allowCardEmv'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'processorStatusCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'processorResponseMessage'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'wasProcessed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'authCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'refNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'invoiceNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'customerReceipt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'statementDescription'?: string;
    /**
     * 
     * @type {AuthenticationAcquireClientAuthorizationResponseEnhancedData}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'enhancedData'?: AuthenticationAcquireClientAuthorizationResponseEnhancedData;
    /**
     * 
     * @type {AuthenticationAcquireClientAuthorizationResponseCard}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'card'?: AuthenticationAcquireClientAuthorizationResponseCard;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'addressVerificationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'addressVerificationResult'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'cvvVerificationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'cvvVerificationResult'?: string;
    /**
     * 
     * @type {AuthenticationAcquireClientAuthorizationResponseRiskResponse}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'riskResponse'?: AuthenticationAcquireClientAuthorizationResponseRiskResponse;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponse
     */
    'type'?: string;
}
