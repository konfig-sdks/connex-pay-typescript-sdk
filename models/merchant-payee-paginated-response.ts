/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MerchantPayeeDto } from './merchant-payee-dto';

/**
 * 
 * @export
 * @interface MerchantPayeePaginatedResponse
 */
export interface MerchantPayeePaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof MerchantPayeePaginatedResponse
     */
    'totalCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof MerchantPayeePaginatedResponse
     */
    'totalPageCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof MerchantPayeePaginatedResponse
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof MerchantPayeePaginatedResponse
     */
    'currentPage'?: number;
    /**
     * 
     * @type {Array<MerchantPayeeDto>}
     * @memberof MerchantPayeePaginatedResponse
     */
    'searchResults'?: Array<MerchantPayeeDto>;
}

