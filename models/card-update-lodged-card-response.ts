/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CardUpdateLodgedCardResponseCard } from './card-update-lodged-card-response-card';

/**
 * 
 * @export
 * @interface CardUpdateLodgedCardResponse
 */
export interface CardUpdateLodgedCardResponse {
    /**
     * 
     * @type {CardUpdateLodgedCardResponseCard}
     * @memberof CardUpdateLodgedCardResponse
     */
    'card'?: CardUpdateLodgedCardResponseCard;
    /**
     * 
     * @type {string}
     * @memberof CardUpdateLodgedCardResponse
     */
    'mccGroupName'?: string;
}

