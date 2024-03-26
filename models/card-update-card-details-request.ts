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
 * @interface CardUpdateCardDetailsRequest
 */
export interface CardUpdateCardDetailsRequest {
    /**
     * Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \'01\' (Airline), \'02\' (Hotels and Resorts), \'03\' (Car Rental), \'04\' (Cable, Satellite, Television, and Radio Services),  \'05\' (Cruise Lines), \'11\' (Medical Services and Health Practitioners), \'21\' (Advertising Services), \'22\' (Misc Advertising and Business Services), \'23\' (Ticketing), \'31\' (Insurance Sales, Underwriting, and Premiums), \'91\' (Restaurants and Food Services), and \'93\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.
     * @type {string}
     * @memberof CardUpdateCardDetailsRequest
     */
    'PurchaseType'?: string;
    /**
     * MID = Merchant ID. Whitelisted MIDs are a supplement to Purchase Type. Utilize if you have a supplier MID(s) where the card can be used if that MID is categorized in an MCC other than the Purchase Type selected. Or use instead of Purchase Type. (e.g., [\'273154000108778\', \'900074LKM\'])
     * @type {Array<string>}
     * @memberof CardUpdateCardDetailsRequest
     */
    'MIDWhitelist'?: Array<string>;
    /**
     * MID = Merchant ID. The list of MIDs where the virtual card will always be DECLINED regardless of PurchaseType or MIDWhitelist. MIDBlacklist overrides all other specifications. (eg. [\'273594000108778\'].)
     * @type {Array<string>}
     * @memberof CardUpdateCardDetailsRequest
     */
    'MIDBlacklist'?: Array<string>;
    /**
     * Security Control: Maximum number of times the card may be authorized. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined. Even though a virtual card is often considered a “one-time-use” card, some suppliers may need to authorize a card multiple times (pre-authorizations, a purchase comprised of multiple tickets, etc.) and you may consider a value that is not overly restrictive to avoid unwanted declines.
     * @type {number}
     * @memberof CardUpdateCardDetailsRequest
     */
    'UsageLimit'?: number;
    /**
     * Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.
     * @type {string}
     * @memberof CardUpdateCardDetailsRequest
     */
    'AssociationId'?: string;
    /**
     * The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated VCCs.
     * @type {string}
     * @memberof CardUpdateCardDetailsRequest
     */
    'TerminateDate'?: string;
    /**
     * Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.
     * @type {number}
     * @memberof CardUpdateCardDetailsRequest
     */
    'AmountLimit'?: number;
}
