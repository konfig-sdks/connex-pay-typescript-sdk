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
 * @interface AddendumCreateAchPurchaseRequest
 */
export interface AddendumCreateAchPurchaseRequest {
    /**
     * Guid for the ACH Purchase you are attaching information to with this addendum request. This Guid was returned to client when the ACH Purchase was initially created.
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'ItemGuid'?: string;
    /**
     * Character data to associate with the Virtual card.
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'Value'?: string;
    /**
     * Can be used by client to specify a desired category for an Addenda item. Consistent category parameters will aid in reporting consistently. See note below regarding the \"MultipleSales\" category and how to use the category specifically to associate an ACH Purchase to an existing sale(s).
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'Category'?: string;
    /**
     * Can be supplied by client to associate this addendum with an ID in client\'s data.
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'IdExternal'?: string;
    /**
     * Additional information to associate with this addendum, as desired.
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'Note'?: string;
    /**
     * If client creates multiple addenda for a single ACH Purchase this sequence can be specified if a client desires.
     * @type {string}
     * @memberof AddendumCreateAchPurchaseRequest
     */
    'Sequence'?: string;
}

