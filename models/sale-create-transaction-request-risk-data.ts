/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SaleCreateTransactionRequestRiskDataFlightData } from './sale-create-transaction-request-risk-data-flight-data';
import { SaleCreateTransactionRequestRiskDataFlightPassengersInner } from './sale-create-transaction-request-risk-data-flight-passengers-inner';

/**
 * Mandatory if TenderType is Credit or not set. This will be ignored if TenderType is Cash or ACH
 * @export
 * @interface SaleCreateTransactionRequestRiskData
 */
export interface SaleCreateTransactionRequestRiskData {
    /**
     * If you are using Kount\'s Device Data Collector, this would be the SessionId from that particular session. Do not include this property if not using Kount\'s Device Data Collector.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'SessionId'?: string;
    /**
     * This is the name of the individual making the purchase i.e. cardholder who may or may not also be the customer. This value is submitted in multiple integration points for different purposes. This value/object is specific to fraud mitigation. Note: for airline ticket purchases this value may or may not be the same as the passenger. Max Length = 64
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'Name'?: string;
    /**
     * Cardholder gender. \"M\" or \"F\".
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'Gender'?: string;
    /**
     * Cardholder date of birth
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'DateOfBirth'?: string;
    /**
     * Phone number associated with cardholder making purchase. Cardholder billing phone number. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.  Phone number up to 15 characters. Numbers and plus sign (+) allowed only.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingPhoneNumber'?: string;
    /**
     * Cardholder billing address 1. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingAddress1'?: string;
    /**
     * Cardholder billing address 2. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingAddress2'?: string;
    /**
     * Cardholder billing city. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingCity'?: string;
    /**
     * Cardholder billing state. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingState'?: string;
    /**
     * Cardholder billing postal code. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option. Max Length = 15. Alphanumerics and \"-\" allowed.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingPostalCode'?: string;
    /**
     * Cardholder billing country code. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.  Length = 2.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'BillingCountryCode'?: string;
    /**
     * Cardholder\'s valid email address. This value is used in risk analysis and decisioning. More specifically, can be used for rule creation or additional identity validation using the White Pages Pro add on option.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'Email'?: string;
    /**
     * Generalized description of the item added passed as plain text. This could be flight, tour, hotel, etc. (This is part of shopping cart information in Kount Console). Each transaction submitted for risk analysis and decisioning must be submitted with one shopping cart item.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'ProductType'?: string;
    /**
     * Attribute for a specific description of the item being purchased i.e. airline ticket. This information is general shopping cart information that describes the type of item being purchased. ConnexPay suggests clients submitted a high level description such as Flight, Hotel, Car Rental, etc... and leverage custom parameters to submit more detailed information that can be used for rule creation and transaction decisioning.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'ProductDescription'?: string;
    /**
     * Typically the SKU for an item passed as plain text. This information is general shopping cart information to provide secondary detail to the ProductDesc above. ConnexPay suggests clients submit a high level description such as One Way, Round Trip, Seven Nights, etc...and several customer parameters to submit more detailed information that can be used for rule creation and transaction decisioning.  Field is required by Kount therefore some value must be submitted. Alphanumeric.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'ProductItem'?: string;
    /**
     * Quantity of the item being purchased in the shopping cart. This is just a general quantity field.
     * @type {number}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'ProductQuantity'?: number;
    /**
     * Price per unit item, displayed in lowest currency factor - expressed in cents. Example: 42400 (which is $424.00).
     * @type {number}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'ProductPrice'?: number;
    /**
     * Transaction ID within client environment associated with the order. The value is searchable and reportable in the Kount portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 32 alpha-numeric characters and allows dashes ( - ).
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'OrderNumber'?: string;
    /**
     * Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the Kount portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 32 characters.
     * @type {string}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'SellerId'?: string;
    /**
     * 
     * @type {SaleCreateTransactionRequestRiskDataFlightData}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'FlightData'?: SaleCreateTransactionRequestRiskDataFlightData;
    /**
     * 
     * @type {Array<SaleCreateTransactionRequestRiskDataFlightPassengersInner>}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'FlightPassengers'?: Array<SaleCreateTransactionRequestRiskDataFlightPassengersInner>;
    /**
     * Custom Parameters. Array.
     * @type {object}
     * @memberof SaleCreateTransactionRequestRiskData
     */
    'CustomParameters'?: object;
}
