/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VoidCreateVoidResponseSaleCardCustomer } from './void-create-void-response-sale-card-customer';

/**
 * 
 * @export
 * @interface VoidCreateVoidResponseSaleCard
 */
export interface VoidCreateVoidResponseSaleCard {
    /**
     * 
     * @type {string}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'first4'?: string;
    /**
     * 
     * @type {string}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'last4'?: string;
    /**
     * 
     * @type {string}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'cardNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'cardHolderName'?: string;
    /**
     * 
     * @type {string}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'expirationDate'?: string;
    /**
     * 
     * @type {VoidCreateVoidResponseSaleCardCustomer}
     * @memberof VoidCreateVoidResponseSaleCard
     */
    'customer'?: VoidCreateVoidResponseSaleCardCustomer;
}

