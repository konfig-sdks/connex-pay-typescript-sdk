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
import { CardIssuanceCreateVirtualCardRequest } from '../models';
// @ts-ignore
import { CardIssuanceCreateVirtualCardRequestCustomParametersInner } from '../models';
// @ts-ignore
import { CardIssuanceCreateVirtualCardRequestTransmission } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CardIssuanceApi - axios parameter creator
 * @export
 */
export const CardIssuanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use this endpoint to issue virtual cards associated with a credit or ACH sale. Do not use this endpoint if you fund your virtual cards from cash and therefor don\'t have an associated sale. If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Card
         * @param {CardIssuanceCreateVirtualCardRequest} [cardIssuanceCreateVirtualCardRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVirtualCard: async (cardIssuanceCreateVirtualCardRequest?: CardIssuanceCreateVirtualCardRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/IssueCard`;
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
                requestBody: cardIssuanceCreateVirtualCardRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/IssueCard',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(cardIssuanceCreateVirtualCardRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CardIssuanceApi - functional programming interface
 * @export
 */
export const CardIssuanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardIssuanceApiAxiosParamCreator(configuration)
    return {
        /**
         * Use this endpoint to issue virtual cards associated with a credit or ACH sale. Do not use this endpoint if you fund your virtual cards from cash and therefor don\'t have an associated sale. If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Card
         * @param {CardIssuanceApiCreateVirtualCardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVirtualCard(requestParameters: CardIssuanceApiCreateVirtualCardRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const cardIssuanceCreateVirtualCardRequest: CardIssuanceCreateVirtualCardRequest = {
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
                OrderNumber: requestParameters.OrderNumber,
                IncomingTransactionCode: requestParameters.IncomingTransactionCode,
                SupplierId: requestParameters.SupplierId,
                NonDomesticSupplier: requestParameters.NonDomesticSupplier,
                Transmission: requestParameters.Transmission,
                ReturnCardData: requestParameters.ReturnCardData,
                CustomerID: requestParameters.CustomerID,
                AssociationId: requestParameters.AssociationId,
                CustomParameters: requestParameters.CustomParameters,
                LabelIDs: requestParameters.LabelIDs
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVirtualCard(cardIssuanceCreateVirtualCardRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardIssuanceApi - factory interface
 * @export
 */
export const CardIssuanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardIssuanceApiFp(configuration)
    return {
        /**
         * Use this endpoint to issue virtual cards associated with a credit or ACH sale. Do not use this endpoint if you fund your virtual cards from cash and therefor don\'t have an associated sale. If you aren\'t sure which Issuance API to use, please contact your client support representative.
         * @summary Issue Card
         * @param {CardIssuanceApiCreateVirtualCardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVirtualCard(requestParameters: CardIssuanceApiCreateVirtualCardRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.createVirtualCard(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createVirtualCard operation in CardIssuanceApi.
 * @export
 * @interface CardIssuanceApiCreateVirtualCardRequest
 */
export type CardIssuanceApiCreateVirtualCardRequest = {
    
} & CardIssuanceCreateVirtualCardRequest

/**
 * CardIssuanceApiGenerated - object-oriented interface
 * @export
 * @class CardIssuanceApiGenerated
 * @extends {BaseAPI}
 */
export class CardIssuanceApiGenerated extends BaseAPI {
    /**
     * Use this endpoint to issue virtual cards associated with a credit or ACH sale. Do not use this endpoint if you fund your virtual cards from cash and therefor don\'t have an associated sale. If you aren\'t sure which Issuance API to use, please contact your client support representative.
     * @summary Issue Card
     * @param {CardIssuanceApiCreateVirtualCardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardIssuanceApiGenerated
     */
    public createVirtualCard(requestParameters: CardIssuanceApiCreateVirtualCardRequest, options?: AxiosRequestConfig) {
        return CardIssuanceApiFp(this.configuration).createVirtualCard(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
