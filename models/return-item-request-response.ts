/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReturnItemRequestResponseSale } from './return-item-request-response-sale';

/**
 * 
 * @export
 * @interface ReturnItemRequestResponse
 */
export interface ReturnItemRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'guid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'batchStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'deviceGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'saleGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof ReturnItemRequestResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'batchGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'processorStatusCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnItemRequestResponse
     */
    'wasProcessed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'authCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'refNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'invoiceNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'customerReceipt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnItemRequestResponse
     */
    'sequenceNumber'?: string;
    /**
     * 
     * @type {ReturnItemRequestResponseSale}
     * @memberof ReturnItemRequestResponse
     */
    'sale'?: ReturnItemRequestResponseSale;
}

