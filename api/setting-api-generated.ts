/* tslint:disable */
/* eslint-disable */
/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SettingTokenizeBankAccountInfoRequest } from '../models';
// @ts-ignore
import { SettingTokenizeBankAccountInfoRequestAccountHolder } from '../models';
// @ts-ignore
import { SettingTokenizeBankAccountInfoResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SettingApi - axios parameter creator
 * @export
 */
export const SettingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows you to create and tokenize a suppliers bank account information without actually making the Issue ACH call. That tokenized bank account can then be used in future Issue ACH or Issue ACH Lite API requests so you don\'t have to store the actual bank account information.
         * @summary Merchant Supplier Setting
         * @param {SettingTokenizeBankAccountInfoRequest} [settingTokenizeBankAccountInfoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenizeBankAccountInfo: async (settingTokenizeBankAccountInfoRequest?: SettingTokenizeBankAccountInfoRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/merchantsupplier/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: settingTokenizeBankAccountInfoRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/merchantsupplier/settings',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(settingTokenizeBankAccountInfoRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingApi - functional programming interface
 * @export
 */
export const SettingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows you to create and tokenize a suppliers bank account information without actually making the Issue ACH call. That tokenized bank account can then be used in future Issue ACH or Issue ACH Lite API requests so you don\'t have to store the actual bank account information.
         * @summary Merchant Supplier Setting
         * @param {SettingApiTokenizeBankAccountInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenizeBankAccountInfo(requestParameters: SettingApiTokenizeBankAccountInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingTokenizeBankAccountInfoResponse>> {
            const settingTokenizeBankAccountInfoRequest: SettingTokenizeBankAccountInfoRequest = {
                MerchantGuid: requestParameters.MerchantGuid,
                SupplierName: requestParameters.SupplierName,
                AccountHolder: requestParameters.AccountHolder
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenizeBankAccountInfo(settingTokenizeBankAccountInfoRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SettingApi - factory interface
 * @export
 */
export const SettingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingApiFp(configuration)
    return {
        /**
         * This endpoint allows you to create and tokenize a suppliers bank account information without actually making the Issue ACH call. That tokenized bank account can then be used in future Issue ACH or Issue ACH Lite API requests so you don\'t have to store the actual bank account information.
         * @summary Merchant Supplier Setting
         * @param {SettingApiTokenizeBankAccountInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenizeBankAccountInfo(requestParameters: SettingApiTokenizeBankAccountInfoRequest, options?: AxiosRequestConfig): AxiosPromise<SettingTokenizeBankAccountInfoResponse> {
            return localVarFp.tokenizeBankAccountInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tokenizeBankAccountInfo operation in SettingApi.
 * @export
 * @interface SettingApiTokenizeBankAccountInfoRequest
 */
export type SettingApiTokenizeBankAccountInfoRequest = {
    
} & SettingTokenizeBankAccountInfoRequest

/**
 * SettingApiGenerated - object-oriented interface
 * @export
 * @class SettingApiGenerated
 * @extends {BaseAPI}
 */
export class SettingApiGenerated extends BaseAPI {
    /**
     * This endpoint allows you to create and tokenize a suppliers bank account information without actually making the Issue ACH call. That tokenized bank account can then be used in future Issue ACH or Issue ACH Lite API requests so you don\'t have to store the actual bank account information.
     * @summary Merchant Supplier Setting
     * @param {SettingApiTokenizeBankAccountInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApiGenerated
     */
    public tokenizeBankAccountInfo(requestParameters: SettingApiTokenizeBankAccountInfoRequest, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).tokenizeBankAccountInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
