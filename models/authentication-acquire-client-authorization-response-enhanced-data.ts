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
 * @interface AuthenticationAcquireClientAuthorizationResponseEnhancedData
 */
export interface AuthenticationAcquireClientAuthorizationResponseEnhancedData {
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'saleTax'?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'purchaseOrder'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalTaxDetailTaxCategory'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalTaxDetailTaxType'?: string;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalTaxDetailTaxAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalTaxDetailTaxRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'shippingCharges'?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'dutyCharges'?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'shipToZip'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'shipFromZip'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'destinationCountryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'customerVATNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'summaryCommodityCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'vatInvoice'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'orderDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'supplierReferenceNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'customerRefID'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'chargeDescriptor'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'productName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'productCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'price'?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationAcquireClientAuthorizationResponseEnhancedData
     */
    'additionalAmountType'?: string;
}
