/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SettingTokenizeBankAccountInfoResponseAccountHolder } from './setting-tokenize-bank-account-info-response-account-holder';

/**
 * 
 * @export
 * @interface SettingTokenizeBankAccountInfoResponse
 */
export interface SettingTokenizeBankAccountInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'merchantGuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'supplierName'?: string;
    /**
     * 
     * @type {string}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {number}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'idUser'?: number;
    /**
     * 
     * @type {number}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'idMerchantSupplierSettings'?: number;
    /**
     * 
     * @type {SettingTokenizeBankAccountInfoResponseAccountHolder}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'accountHolder'?: SettingTokenizeBankAccountInfoResponseAccountHolder;
    /**
     * 
     * @type {string}
     * @memberof SettingTokenizeBankAccountInfoResponse
     */
    'userName'?: string;
}

