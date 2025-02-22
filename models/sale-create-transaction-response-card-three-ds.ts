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
 * @interface SaleCreateTransactionResponseCardThreeDS
 */
export interface SaleCreateTransactionResponseCardThreeDS {
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'SecureCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'Cavv'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'Version'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'DirectoryServerTransactionID'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'AcsTransactionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponseCardThreeDS
     */
    'ECI'?: string;
}

