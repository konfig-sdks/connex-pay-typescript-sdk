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
import { SaleCreateTransactionRequestCustomParametersInner } from '../models';
// @ts-ignore
import { TransactionCaptureAuthorizationRequest } from '../models';
// @ts-ignore
import { TransactionCaptureAuthorizationRequestConnexPayTransaction } from '../models';
// @ts-ignore
import { TransactionCaptureAuthorizationResponse } from '../models';
// @ts-ignore
import { TransactionCreateAchCreditPaymentRequest } from '../models';
// @ts-ignore
import { TransactionCreateAchCreditPaymentRequestAccountHolder } from '../models';
// @ts-ignore
import { TransactionCreateAchCreditPaymentResponse } from '../models';
// @ts-ignore
import { TransactionSearchVirtualCardHistoryResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Call this endpoint to Capture an Authorization so that it settles
         * @summary Capture
         * @param {TransactionCaptureAuthorizationRequest} [transactionCaptureAuthorizationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        captureAuthorization: async (transactionCaptureAuthorizationRequest?: TransactionCaptureAuthorizationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/Captures`;
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
                requestBody: transactionCaptureAuthorizationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/Captures',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(transactionCaptureAuthorizationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint creates an ACH Credit payment.
         * @summary Issue ACH
         * @param {TransactionCreateAchCreditPaymentRequest} [transactionCreateAchCreditPaymentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAchCreditPayment: async (transactionCreateAchCreditPaymentRequest?: TransactionCreateAchCreditPaymentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/IssueACH`;
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
                requestBody: transactionCreateAchCreditPaymentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/IssueACH',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(transactionCreateAchCreditPaymentRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API allows you to pull back history of the Virtual Card. This is the same API (and data) that is used when clicking the “Transactions” button on the Virtual Card in the Portal to display the transaction history. The API will return the merchant name where the Virtual Card was used, the date and time, transaction type (auth, settlement, refund, void, etc.), the response/memo which correlates to the transaction type and the amount.
         * @summary Search Virtual Card History
         * @param {string} cardGuid Global Unique Identifier for the Card. Required parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchVirtualCardHistory: async (cardGuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardGuid' is not null or undefined
            assertParamExists('searchVirtualCardHistory', 'cardGuid', cardGuid)
            const localVarPath = `/api/v1/Cards/Transactions/{cardGuid}`
                .replace(`{${"CardGuid"}}`, encodeURIComponent(String(cardGuid !== undefined ? cardGuid : `-CardGuid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/Cards/Transactions/{cardGuid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionApi - functional programming interface
 * @export
 */
export const TransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * Call this endpoint to Capture an Authorization so that it settles
         * @summary Capture
         * @param {TransactionApiCaptureAuthorizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async captureAuthorization(requestParameters: TransactionApiCaptureAuthorizationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionCaptureAuthorizationResponse>> {
            const transactionCaptureAuthorizationRequest: TransactionCaptureAuthorizationRequest = {
                DeviceGuid: requestParameters.DeviceGuid,
                AuthOnlyGuid: requestParameters.AuthOnlyGuid,
                SequenceNumber: requestParameters.SequenceNumber,
                ConnexPayTransaction: requestParameters.ConnexPayTransaction,
                OrderNumber: requestParameters.OrderNumber,
                CustomerID: requestParameters.CustomerID,
                AssociationID: requestParameters.AssociationID,
                CustomParameters: requestParameters.CustomParameters
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.captureAuthorization(transactionCaptureAuthorizationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint creates an ACH Credit payment.
         * @summary Issue ACH
         * @param {TransactionApiCreateAchCreditPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAchCreditPayment(requestParameters: TransactionApiCreateAchCreditPaymentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionCreateAchCreditPaymentResponse>> {
            const transactionCreateAchCreditPaymentRequest: TransactionCreateAchCreditPaymentRequest = {
                MerchantGuid: requestParameters.MerchantGuid,
                Amount: requestParameters.Amount,
                PayeeName: requestParameters.PayeeName,
                StatementCompanyName: requestParameters.StatementCompanyName,
                Description: requestParameters.Description,
                IncomingTransactionCode: requestParameters.IncomingTransactionCode,
                AccountHolder: requestParameters.AccountHolder
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAchCreditPayment(transactionCreateAchCreditPaymentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This API allows you to pull back history of the Virtual Card. This is the same API (and data) that is used when clicking the “Transactions” button on the Virtual Card in the Portal to display the transaction history. The API will return the merchant name where the Virtual Card was used, the date and time, transaction type (auth, settlement, refund, void, etc.), the response/memo which correlates to the transaction type and the amount.
         * @summary Search Virtual Card History
         * @param {TransactionApiSearchVirtualCardHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchVirtualCardHistory(requestParameters: TransactionApiSearchVirtualCardHistoryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionSearchVirtualCardHistoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchVirtualCardHistory(requestParameters.cardGuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionApiFp(configuration)
    return {
        /**
         * Call this endpoint to Capture an Authorization so that it settles
         * @summary Capture
         * @param {TransactionApiCaptureAuthorizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        captureAuthorization(requestParameters: TransactionApiCaptureAuthorizationRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionCaptureAuthorizationResponse> {
            return localVarFp.captureAuthorization(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint creates an ACH Credit payment.
         * @summary Issue ACH
         * @param {TransactionApiCreateAchCreditPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAchCreditPayment(requestParameters: TransactionApiCreateAchCreditPaymentRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionCreateAchCreditPaymentResponse> {
            return localVarFp.createAchCreditPayment(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows you to pull back history of the Virtual Card. This is the same API (and data) that is used when clicking the “Transactions” button on the Virtual Card in the Portal to display the transaction history. The API will return the merchant name where the Virtual Card was used, the date and time, transaction type (auth, settlement, refund, void, etc.), the response/memo which correlates to the transaction type and the amount.
         * @summary Search Virtual Card History
         * @param {TransactionApiSearchVirtualCardHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchVirtualCardHistory(requestParameters: TransactionApiSearchVirtualCardHistoryRequest, options?: AxiosRequestConfig): AxiosPromise<TransactionSearchVirtualCardHistoryResponse> {
            return localVarFp.searchVirtualCardHistory(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for captureAuthorization operation in TransactionApi.
 * @export
 * @interface TransactionApiCaptureAuthorizationRequest
 */
export type TransactionApiCaptureAuthorizationRequest = {
    
} & TransactionCaptureAuthorizationRequest

/**
 * Request parameters for createAchCreditPayment operation in TransactionApi.
 * @export
 * @interface TransactionApiCreateAchCreditPaymentRequest
 */
export type TransactionApiCreateAchCreditPaymentRequest = {
    
} & TransactionCreateAchCreditPaymentRequest

/**
 * Request parameters for searchVirtualCardHistory operation in TransactionApi.
 * @export
 * @interface TransactionApiSearchVirtualCardHistoryRequest
 */
export type TransactionApiSearchVirtualCardHistoryRequest = {
    
    /**
    * Global Unique Identifier for the Card. Required parameter.
    * @type {string}
    * @memberof TransactionApiSearchVirtualCardHistory
    */
    readonly cardGuid: string
    
}

/**
 * TransactionApiGenerated - object-oriented interface
 * @export
 * @class TransactionApiGenerated
 * @extends {BaseAPI}
 */
export class TransactionApiGenerated extends BaseAPI {
    /**
     * Call this endpoint to Capture an Authorization so that it settles
     * @summary Capture
     * @param {TransactionApiCaptureAuthorizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiGenerated
     */
    public captureAuthorization(requestParameters: TransactionApiCaptureAuthorizationRequest, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).captureAuthorization(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint creates an ACH Credit payment.
     * @summary Issue ACH
     * @param {TransactionApiCreateAchCreditPaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiGenerated
     */
    public createAchCreditPayment(requestParameters: TransactionApiCreateAchCreditPaymentRequest, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).createAchCreditPayment(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows you to pull back history of the Virtual Card. This is the same API (and data) that is used when clicking the “Transactions” button on the Virtual Card in the Portal to display the transaction history. The API will return the merchant name where the Virtual Card was used, the date and time, transaction type (auth, settlement, refund, void, etc.), the response/memo which correlates to the transaction type and the amount.
     * @summary Search Virtual Card History
     * @param {TransactionApiSearchVirtualCardHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApiGenerated
     */
    public searchVirtualCardHistory(requestParameters: TransactionApiSearchVirtualCardHistoryRequest, options?: AxiosRequestConfig) {
        return TransactionApiFp(this.configuration).searchVirtualCardHistory(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
