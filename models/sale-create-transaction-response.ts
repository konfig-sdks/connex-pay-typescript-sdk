/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SaleCreateTransactionResponseCard } from './sale-create-transaction-response-card';
import { SaleCreateTransactionResponseConnexPayTransaction } from './sale-create-transaction-response-connex-pay-transaction';
import { SaleCreateTransactionResponseRiskResponse } from './sale-create-transaction-response-risk-response';

/**
 * 
 * @export
 * @interface SaleCreateTransactionResponse
 */
export interface SaleCreateTransactionResponse {
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'guid'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'batchStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'timeStamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'deviceGuid'?: string;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransactionResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SaleCreateTransactionResponse
     */
    'activated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'tenderType'?: string;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransactionResponse
     */
    'effectiveAmount'?: number;
    /**
     * 
     * @type {SaleCreateTransactionResponseRiskResponse}
     * @memberof SaleCreateTransactionResponse
     */
    'riskResponse'?: SaleCreateTransactionResponseRiskResponse;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'orderNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'cardDataSource'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'customerID'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'batchGuid'?: string;
    /**
     * 
     * @type {SaleCreateTransactionResponseConnexPayTransaction}
     * @memberof SaleCreateTransactionResponse
     */
    'connexPayTransaction'?: SaleCreateTransactionResponseConnexPayTransaction;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'associationId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'processorStatusCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'processorResponseMessage'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaleCreateTransactionResponse
     */
    'wasProcessed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'authCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'refNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'customerReceipt'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'statementDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'generatedBy'?: string;
    /**
     * 
     * @type {SaleCreateTransactionResponseCard}
     * @memberof SaleCreateTransactionResponse
     */
    'Card'?: SaleCreateTransactionResponseCard;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'addressVerificationResult'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'cvvVerificationCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'cvvVerificationResult'?: string;
    /**
     * 
     * @type {string}
     * @memberof SaleCreateTransactionResponse
     */
    'cavvResponseCode'?: string;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransactionResponse
     */
    'walletProvider'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SaleCreateTransactionResponse
     */
    'isFromIssueLite'?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof SaleCreateTransactionResponse
     */
    'labelIds'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof SaleCreateTransactionResponse
     */
    'remainingAmount'?: number;
}
