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
import { VerificationCardBankAccountRequest } from '../models';
// @ts-ignore
import { VerificationCardBankAccountRequestBankAccount } from '../models';
// @ts-ignore
import { VerificationCardBankAccountRequestCard } from '../models';
// @ts-ignore
import { VerificationCardBankAccountResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VerificationApi - axios parameter creator
 * @export
 */
export const VerificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Call to Verify Card or Bank Account
         * @summary Verify
         * @param {VerificationCardBankAccountRequest} [verificationCardBankAccountRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cardBankAccount: async (verificationCardBankAccountRequest?: VerificationCardBankAccountRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/verify`;
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
                requestBody: verificationCardBankAccountRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/verify',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(verificationCardBankAccountRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VerificationApi - functional programming interface
 * @export
 */
export const VerificationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VerificationApiAxiosParamCreator(configuration)
    return {
        /**
         * Call to Verify Card or Bank Account
         * @summary Verify
         * @param {VerificationApiCardBankAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cardBankAccount(requestParameters: VerificationApiCardBankAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VerificationCardBankAccountResponse>> {
            const verificationCardBankAccountRequest: VerificationCardBankAccountRequest = {
                DeviceGuid: requestParameters.DeviceGuid,
                Card: requestParameters.Card,
                BankAccount: requestParameters.BankAccount
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.cardBankAccount(verificationCardBankAccountRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VerificationApi - factory interface
 * @export
 */
export const VerificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VerificationApiFp(configuration)
    return {
        /**
         * Call to Verify Card or Bank Account
         * @summary Verify
         * @param {VerificationApiCardBankAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cardBankAccount(requestParameters: VerificationApiCardBankAccountRequest, options?: AxiosRequestConfig): AxiosPromise<VerificationCardBankAccountResponse> {
            return localVarFp.cardBankAccount(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cardBankAccount operation in VerificationApi.
 * @export
 * @interface VerificationApiCardBankAccountRequest
 */
export type VerificationApiCardBankAccountRequest = {
    
} & VerificationCardBankAccountRequest

/**
 * VerificationApiGenerated - object-oriented interface
 * @export
 * @class VerificationApiGenerated
 * @extends {BaseAPI}
 */
export class VerificationApiGenerated extends BaseAPI {
    /**
     * Call to Verify Card or Bank Account
     * @summary Verify
     * @param {VerificationApiCardBankAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VerificationApiGenerated
     */
    public cardBankAccount(requestParameters: VerificationApiCardBankAccountRequest, options?: AxiosRequestConfig) {
        return VerificationApiFp(this.configuration).cardBankAccount(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
