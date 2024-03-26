/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VoidSearchVoidsResponseSearchResultDTOInnerSaleCard } from './void-search-voids-response-search-result-dtoinner-sale-card';

/**
 * 
 * @export
 * @interface VoidSearchVoidsResponseSearchResultDTOInnerSale
 */
export interface VoidSearchVoidsResponseSearchResultDTOInnerSale {
    /**
     * 
     * @type {number}
     * @memberof VoidSearchVoidsResponseSearchResultDTOInnerSale
     */
    'amount'?: number;
    /**
     * 
     * @type {VoidSearchVoidsResponseSearchResultDTOInnerSaleCard}
     * @memberof VoidSearchVoidsResponseSearchResultDTOInnerSale
     */
    'card'?: VoidSearchVoidsResponseSearchResultDTOInnerSaleCard;
}

