/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VerifyCardResponseExampleCard } from './verify-card-response-example-card';

/**
 * 
 * @export
 * @interface VerifyCardResponseExample
 */
export interface VerifyCardResponseExample {
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'guid'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'deviceGuid'?: string;
    /**
     * 
     * @type {VerifyCardResponseExampleCard}
     * @memberof VerifyCardResponseExample
     */
    'card'?: VerifyCardResponseExampleCard;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'addressVerificationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'cvvVerificationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyCardResponseExample
     */
    'processorStatusCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VerifyCardResponseExample
     */
    'wasProcessed'?: boolean;
}
