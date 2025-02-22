/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AuthenticationResult } from './authentication-result';

/**
 * 
 * @export
 * @interface PayoutAuthResponse
 */
export interface PayoutAuthResponse {
    /**
     * 
     * @type {AuthenticationResult}
     * @memberof PayoutAuthResponse
     */
    'AuthenticationResult'?: AuthenticationResult;
}

