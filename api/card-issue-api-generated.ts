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
import { CardIssuanceCreateVirtualCardRequestCustomParametersInner } from '../models';
// @ts-ignore
import { CardIssueCreateVirtualCardLiteRequest } from '../models';
// @ts-ignore
import { CardIssueCreateVirtualCardLiteRequestTransmission } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CardIssueApi - axios parameter creator
 * @export
 */
export const CardIssueApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * For our lite clients, we provide the ability to issue a VCC (Virtual Credit Card) via API without the requirement to process a sale first.  If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Lite
         * @param {CardIssueCreateVirtualCardLiteRequest} [cardIssueCreateVirtualCardLiteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVirtualCardLite: async (cardIssueCreateVirtualCardLiteRequest?: CardIssueCreateVirtualCardLiteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/IssueCard/IssueLite`;
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
                requestBody: cardIssueCreateVirtualCardLiteRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/IssueCard/IssueLite',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(cardIssueCreateVirtualCardLiteRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CardIssueApi - functional programming interface
 * @export
 */
export const CardIssueApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardIssueApiAxiosParamCreator(configuration)
    return {
        /**
         * For our lite clients, we provide the ability to issue a VCC (Virtual Credit Card) via API without the requirement to process a sale first.  If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Lite
         * @param {CardIssueApiCreateVirtualCardLiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVirtualCardLite(requestParameters: CardIssueApiCreateVirtualCardLiteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const cardIssueCreateVirtualCardLiteRequest: CardIssueCreateVirtualCardLiteRequest = {
                MerchantGuid: requestParameters.MerchantGuid,
                FirstName: requestParameters.FirstName,
                LastName: requestParameters.LastName,
                Phone: requestParameters.Phone,
                Address1: requestParameters.Address1,
                Address2: requestParameters.Address2,
                City: requestParameters.City,
                State: requestParameters.State,
                ZipCode: requestParameters.ZipCode,
                Country: requestParameters.Country,
                UsageLimit: requestParameters.UsageLimit,
                AmountLimit: requestParameters.AmountLimit,
                ExpirationDate: requestParameters.ExpirationDate,
                TerminateDate: requestParameters.TerminateDate,
                PurchaseType: requestParameters.PurchaseType,
                MIDWhitelist: requestParameters.MIDWhitelist,
                MIDBlacklist: requestParameters.MIDBlacklist,
                SequenceNumber: requestParameters.SequenceNumber,
                SupplierId: requestParameters.SupplierId,
                NonDomesticSupplier: requestParameters.NonDomesticSupplier,
                OrderNumber: requestParameters.OrderNumber,
                CustomerID: requestParameters.CustomerID,
                Transmission: requestParameters.Transmission,
                ReturnCardData: requestParameters.ReturnCardData,
                CustomParameters: requestParameters.CustomParameters,
                ActivationDate: requestParameters.ActivationDate,
                AssociationId: requestParameters.AssociationId,
                LabelIDs: requestParameters.LabelIDs
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVirtualCardLite(cardIssueCreateVirtualCardLiteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardIssueApi - factory interface
 * @export
 */
export const CardIssueApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardIssueApiFp(configuration)
    return {
        /**
         * For our lite clients, we provide the ability to issue a VCC (Virtual Credit Card) via API without the requirement to process a sale first.  If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Lite
         * @param {CardIssueApiCreateVirtualCardLiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVirtualCardLite(requestParameters: CardIssueApiCreateVirtualCardLiteRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.createVirtualCardLite(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createVirtualCardLite operation in CardIssueApi.
 * @export
 * @interface CardIssueApiCreateVirtualCardLiteRequest
 */
export type CardIssueApiCreateVirtualCardLiteRequest = {
    
} & CardIssueCreateVirtualCardLiteRequest

/**
 * CardIssueApiGenerated - object-oriented interface
 * @export
 * @class CardIssueApiGenerated
 * @extends {BaseAPI}
 */
export class CardIssueApiGenerated extends BaseAPI {
    /**
     * For our lite clients, we provide the ability to issue a VCC (Virtual Credit Card) via API without the requirement to process a sale first.  If you aren\'t sure which Issuance API to use, please contact your client support representative.
     * @summary Issue Lite
     * @param {CardIssueApiCreateVirtualCardLiteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardIssueApiGenerated
     */
    public createVirtualCardLite(requestParameters: CardIssueApiCreateVirtualCardLiteRequest, options?: AxiosRequestConfig) {
        return CardIssueApiFp(this.configuration).createVirtualCardLite(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}