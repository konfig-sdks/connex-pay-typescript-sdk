/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReturnSearchSaleReturnsResponseSearchResultDTOInnerCard } from './return-search-sale-returns-response-search-result-dtoinner-card';

/**
 * 
 * @export
 * @interface ReturnSearchSaleReturnsResponseSearchResultDTOInner
 */
export interface ReturnSearchSaleReturnsResponseSearchResultDTOInner {
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'amount'?: number;
    /**
     * 
     * @type {ReturnSearchSaleReturnsResponseSearchResultDTOInnerCard}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'card'?: ReturnSearchSaleReturnsResponseSearchResultDTOInnerCard;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'processorStatusCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'batchStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'guid'?: string;
    /**
     * 
     * @type {any}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'relatedVoid'?: any;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'deviceGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'cardDataSource'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReturnSearchSaleReturnsResponseSearchResultDTOInner
     */
    'allowCardEmv'?: boolean;
}
