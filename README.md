<div align="center">

[![Visit Connexpay](./header.png)](https://connexpay.com&#x2F;)

# [Connexpay](https://connexpay.com&#x2F;)<a id="connexpay"></a>

REST API for retrieving reporting data. Currently Daily Accounting data only.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`connexpay.aCH.createCreditPayment`](#connexpayachcreatecreditpayment)
  * [`connexpay.accounting.getDailyDetail`](#connexpayaccountinggetdailydetail)
  * [`connexpay.accounting.getDailySummary`](#connexpayaccountinggetdailysummary)
  * [`connexpay.addendum.createAchPurchase`](#connexpayaddendumcreateachpurchase)
  * [`connexpay.addendum.createVirtualCard`](#connexpayaddendumcreatevirtualcard)
  * [`connexpay.addendum.deleteItem`](#connexpayaddendumdeleteitem)
  * [`connexpay.authentication.acquireClientAuthorization`](#connexpayauthenticationacquireclientauthorization)
  * [`connexpay.authentication.obtain3dSecureAuthentication`](#connexpayauthenticationobtain3dsecureauthentication)
  * [`connexpay.cancellation.entireTripCancellation`](#connexpaycancellationentiretripcancellation)
  * [`connexpay.card.activateDelayed`](#connexpaycardactivatedelayed)
  * [`connexpay.card.cancelVirtualCard`](#connexpaycardcancelvirtualcard)
  * [`connexpay.card.createLodgedCard`](#connexpaycardcreatelodgedcard)
  * [`connexpay.card.getDetail`](#connexpaycardgetdetail)
  * [`connexpay.card.resendTransmissionInfo`](#connexpaycardresendtransmissioninfo)
  * [`connexpay.card.searchIssuedVirtualCards`](#connexpaycardsearchissuedvirtualcards)
  * [`connexpay.card.terminateByDate`](#connexpaycardterminatebydate)
  * [`connexpay.card.updateCardDetails`](#connexpaycardupdatecarddetails)
  * [`connexpay.card.updateDelayedActivation`](#connexpaycardupdatedelayedactivation)
  * [`connexpay.card.updateLodgedCard`](#connexpaycardupdatelodgedcard)
  * [`connexpay.cardIssuance.createVirtualCard`](#connexpaycardissuancecreatevirtualcard)
  * [`connexpay.cardIssue.createVirtualCardLite`](#connexpaycardissuecreatevirtualcardlite)
  * [`connexpay.funding.merchantCashBalance`](#connexpayfundingmerchantcashbalance)
  * [`connexpay.funding.transferMerchantCashBalance`](#connexpayfundingtransfermerchantcashbalance)
  * [`connexpay.funds.getAvailableDetails`](#connexpayfundsgetavailabledetails)
  * [`connexpay.merchantPayees.createPayee`](#connexpaymerchantpayeescreatepayee)
  * [`connexpay.merchantPayees.deletePayee`](#connexpaymerchantpayeesdeletepayee)
  * [`connexpay.merchantPayees.getPayee`](#connexpaymerchantpayeesgetpayee)
  * [`connexpay.merchantPayees.getPayees`](#connexpaymerchantpayeesgetpayees)
  * [`connexpay.merchantPayees.updatePayee`](#connexpaymerchantpayeesupdatepayee)
  * [`connexpay.pushToCard.cancelPayments`](#connexpaypushtocardcancelpayments)
  * [`connexpay.pushToCard.createPayee`](#connexpaypushtocardcreatepayee)
  * [`connexpay.pushToCard.createPayout`](#connexpaypushtocardcreatepayout)
  * [`connexpay.pushToCard.getAuthenticationTokenAsync`](#connexpaypushtocardgetauthenticationtokenasync)
  * [`connexpay.pushToCard.getPayee`](#connexpaypushtocardgetpayee)
  * [`connexpay.pushToCard.getPayoutDetails`](#connexpaypushtocardgetpayoutdetails)
  * [`connexpay.pushToCard.managePayee`](#connexpaypushtocardmanagepayee)
  * [`connexpay.pushToCard.pushFundsToCardAsync`](#connexpaypushtocardpushfundstocardasync)
  * [`connexpay.pushToCard.updatePayee`](#connexpaypushtocardupdatepayee)
  * [`connexpay.replay.purchaseEventHistoryResend`](#connexpayreplaypurchaseeventhistoryresend)
  * [`connexpay.return.itemRequest`](#connexpayreturnitemrequest)
  * [`connexpay.return.searchSaleReturns`](#connexpayreturnsearchsalereturns)
  * [`connexpay.sale.activateDelayed`](#connexpaysaleactivatedelayed)
  * [`connexpay.sale.createTransaction`](#connexpaysalecreatetransaction)
  * [`connexpay.sale.getChargebacksByUser`](#connexpaysalegetchargebacksbyuser)
  * [`connexpay.sale.searchSales`](#connexpaysalesearchsales)
  * [`connexpay.sale.updateDelayedActivation`](#connexpaysaleupdatedelayedactivation)
  * [`connexpay.setting.tokenizeBankAccountInfo`](#connexpaysettingtokenizebankaccountinfo)
  * [`connexpay.settlement.searchVirtualCardSettlements`](#connexpaysettlementsearchvirtualcardsettlements)
  * [`connexpay.statusGroup._3dsAuthenticationStatus`](#connexpaystatusgroup_3dsauthenticationstatus)
  * [`connexpay.token.generateReportingToken`](#connexpaytokengeneratereportingtoken)
  * [`connexpay.token.issueAuthenticationToken`](#connexpaytokenissueauthenticationtoken)
  * [`connexpay.token.requestHppToken`](#connexpaytokenrequesthpptoken)
  * [`connexpay.transaction.captureAuthorization`](#connexpaytransactioncaptureauthorization)
  * [`connexpay.transaction.createAchCreditPayment`](#connexpaytransactioncreateachcreditpayment)
  * [`connexpay.transaction.searchVirtualCardHistory`](#connexpaytransactionsearchvirtualcardhistory)
  * [`connexpay.validation.searchVerifyOperation`](#connexpayvalidationsearchverifyoperation)
  * [`connexpay.verification.cardBankAccount`](#connexpayverificationcardbankaccount)
  * [`connexpay.void.createVoid`](#connexpayvoidcreatevoid)
  * [`connexpay.void.searchVoids`](#connexpayvoidsearchvoids)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=ConnexPay&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ConnexPay } from "connex-pay-typescript-sdk";

const connexpay = new ConnexPay({
  // Defining the base path is optional and defaults to https://sandboxreportingapi.connexpay.com
  // basePath: "https://sandboxreportingapi.connexpay.com",
});

const createCreditPaymentResponse = await connexpay.aCH.createCreditPayment({
  MerchantGuid: "MerchantGuid_example",
  Amount: 3.14,
  PayeeName: "PayeeName_example",
  StatementCompanyName: "Merchant Alias",
  AccountHolder: {
    BusinessName: "Default",
  },
  OrderNumber: "7H2345",
});

console.log(createCreditPaymentResponse);
```

## Reference<a id="reference"></a>


### `connexpay.aCH.createCreditPayment`<a id="connexpayachcreatecreditpayment"></a>

This endpoint creates an ACH Credit payment that does not have an associated sale. This allows ConnexPay Lite clients to submit the issue payment call only.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCreditPaymentResponse = await connexpay.aCH.createCreditPayment({
  MerchantGuid: "MerchantGuid_example",
  Amount: 3.14,
  PayeeName: "PayeeName_example",
  StatementCompanyName: "Merchant Alias",
  AccountHolder: {
    BusinessName: "Default",
  },
  OrderNumber: "7H2345",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates the ACH payment is being requested for clients account. Value provided by ConnexPay.

##### Amount: `number`<a id="amount-number"></a>

Payment amount with the minimum amount > 0.5.

##### PayeeName: `string`<a id="payeename-string"></a>

Payee name up to 100 characters.

##### AccountHolder: [`AchCreateCreditPaymentRequestAccountHolder`](./models/ach-create-credit-payment-request-account-holder.ts)<a id="accountholder-achcreatecreditpaymentrequestaccountholdermodelsach-create-credit-payment-request-account-holderts"></a>

##### StatementCompanyName: `string`<a id="statementcompanyname-string"></a>

Company Name to display Bank Statement. The first 16 characters will display on the bank account holders statement.

##### Description: `string`<a id="description-string"></a>

For banks who accept statement descriptors, the first 10 characters will display on the bank account holders statement.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters.

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### AssociationId: `string`<a id="associationid-string"></a>

This parameter allows you to input an up to 100 character association ID that can be used to tie this ACH Purchase to a sale (Association ID also needs to be included on the sale request). This is useful if you issue the ACH purchase prior to creating the sale that associates to it.

#### 🔄 Return<a id="🔄-return"></a>

[AchCreateCreditPaymentResponse](./models/ach-create-credit-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueACH/IssueLite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.accounting.getDailyDetail`<a id="connexpayaccountinggetdailydetail"></a>

This endpoint returns the paginated daily accounting detail items of a client for a given release date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailyDetailResponse = await connexpay.accounting.getDailyDetail({
  merchantGuid: "merchantGuid_example",
  releasedDate: "1970-01-01",
  pageNumber: 1,
  pageSize: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The client identifier for the requested transactions.

##### releasedDate: `string | Date`<a id="releaseddate-string--date"></a>

Date on which the requested transactions were released to the client.

##### pageNumber: `number`<a id="pagenumber-number"></a>



##### pageSize: `number`<a id="pagesize-number"></a>



#### 🔄 Return<a id="🔄-return"></a>

[DailyAccountingDetailPaginatedItems](./models/daily-accounting-detail-paginated-items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Accounting/DailyDetail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.accounting.getDailySummary`<a id="connexpayaccountinggetdailysummary"></a>

This endpoint returns the daily accounting summary of a merchant for a given release date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailySummaryResponse = await connexpay.accounting.getDailySummary({
  merchantGuid: "merchantGuid_example",
  releasedDate: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The client identifier for the requested transactions.

##### releasedDate: `string | Date`<a id="releaseddate-string--date"></a>

Date on which the requested transactions were released to the client.

#### 🔄 Return<a id="🔄-return"></a>

[DailyAccountingSummary](./models/daily-accounting-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Accounting/DailySummary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.addendum.createAchPurchase`<a id="connexpayaddendumcreateachpurchase"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAchPurchaseResponse = await connexpay.addendum.createAchPurchase({
  ItemGuid: "Mandatory",
  Value: "Mandatory",
  Category: "Optional",
  IdExternal: "Optional",
  Note: "Optional",
  Sequence: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ItemGuid: `string`<a id="itemguid-string"></a>

Guid for the ACH Purchase you are attaching information to with this addendum request. This Guid was returned to client when the ACH Purchase was initially created.

##### Value: `string`<a id="value-string"></a>

Character data to associate with the Virtual card.

##### Category: `string`<a id="category-string"></a>

Can be used by client to specify a desired category for an Addenda item. Consistent category parameters will aid in reporting consistently. See note below regarding the \\\"MultipleSales\\\" category and how to use the category specifically to associate an ACH Purchase to an existing sale(s).

##### IdExternal: `string`<a id="idexternal-string"></a>

Can be supplied by client to associate this addendum with an ID in client\\\'s data.

##### Note: `string`<a id="note-string"></a>

Additional information to associate with this addendum, as desired.

##### Sequence: `string`<a id="sequence-string"></a>

If client creates multiple addenda for a single ACH Purchase this sequence can be specified if a client desires.

#### 🔄 Return<a id="🔄-return"></a>

[AddendumCreateAchPurchaseResponse](./models/addendum-create-ach-purchase-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Addendum/ACH` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.addendum.createVirtualCard`<a id="connexpayaddendumcreatevirtualcard"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVirtualCardResponse = await connexpay.addendum.createVirtualCard({
  ItemGuid: "Mandatory",
  Value: "Mandatory",
  Category: "Optional",
  IdExternal: "Optional",
  Note: "Optional",
  Sequence: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ItemGuid: `string`<a id="itemguid-string"></a>

Guid for the Virtual Card you are attaching information to with this addendum request. This Guid was returned to client when the Virtual Card was initially created.

##### Value: `string`<a id="value-string"></a>

Character data to associate with the Virtual card.

##### Category: `string`<a id="category-string"></a>

Can be used by client to specify a desired category for an Addenda item.

##### IdExternal: `string`<a id="idexternal-string"></a>

Can be supplied by client to associate this addendum with an ID in client\\\'s data.

##### Note: `string`<a id="note-string"></a>

Additional information to associate with this addendum, as desired.

##### Sequence: `string`<a id="sequence-string"></a>

If client creates multiple addenda for a single Virtual Card this sequence can be specified if a client desires.

#### 🔄 Return<a id="🔄-return"></a>

[AddendumCreateVirtualCardResponse](./models/addendum-create-virtual-card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Addendum/VirtualCard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.addendum.deleteItem`<a id="connexpayaddendumdeleteitem"></a>

This endpoint deletes an Addendum information item from an object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteItemResponse = await connexpay.addendum.deleteItem({
  guid: "guid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

The Addendum guid to terminate.

#### 🔄 Return<a id="🔄-return"></a>

[AddendumDeleteItemResponse](./models/addendum-delete-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/Addendum/Remove/&lt;guid&gt;` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.authentication.acquireClientAuthorization`<a id="connexpayauthenticationacquireclientauthorization"></a>

The Auth Only Endpoint is applicable to acquiring clients.  Call Auth Only when you want to process an Authorization only, which will not settle until it's Captured.  We do not allow you to Capture an Authorization after 5 business days have passed.Calling this endpoint will authorize the card, however, it will not be settled until the [Capture endpoint](https://docs.connexpay.com/reference/capture) is called. Authorizations expire after 5 days.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const acquireClientAuthorizationResponse =
  await connexpay.authentication.acquireClientAuthorization({
    DeviceGuid: "DeviceGuid_example",
    Amount: 3.14,
    RiskData: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay.

##### Amount: `number`<a id="amount-number"></a>

Amount of the transaction that will be processed. Note: this value is submitted multiple times (in different formats) within the integration to support different purposes i.e. risk analysis, merchant processing, etc.  The minimum amount is: $0.50.

##### RiskData: [`AuthenticationAcquireClientAuthorizationRequestRiskData`](./models/authentication-acquire-client-authorization-request-risk-data.ts)<a id="riskdata-authenticationacquireclientauthorizationrequestriskdatamodelsauthentication-acquire-client-authorization-request-risk-datats"></a>

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters.

##### SendReceipt: `boolean`<a id="sendreceipt-boolean"></a>

Value determines whether or not a customer shall be emailed a receipt from the ConnexPay platform if the email address is provided in the API customer block. The default value is TRUE. Set to FALSE so that an email receipt is not sent to the customer. Set to TRUE or leave empty if you want e-mail to be sent. If TRUE, customer\\\'s email must be included in the \\\"Card.Customer.email\\\" parameter.

##### StatementDescription: `string`<a id="statementdescription-string"></a>

US Clients only: The statement description allows a client to customize the Merchant name that appears on the cardholder statement such that the cardholder recognizes the transaction on their statement. ConnexPay recommends sending a recognizable DBA along with the PNR i.e. ABC Travel ABC123. Note: functionality not applicable for American Express OptBlue program.  The maximun length is 25 alpha-numeric characters.

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 100 characters and is alpha-numeric.

##### Card: [`AuthenticationAcquireClientAuthorizationRequestCard`](./models/authentication-acquire-client-authorization-request-card.ts)<a id="card-authenticationacquireclientauthorizationrequestcardmodelsauthentication-acquire-client-authorization-request-cardts"></a>

##### BankAccount: [`AuthenticationAcquireClientAuthorizationRequestBankAccount`](./models/authentication-acquire-client-authorization-request-bank-account.ts)<a id="bankaccount-authenticationacquireclientauthorizationrequestbankaccountmodelsauthentication-acquire-client-authorization-request-bank-accountts"></a>

##### Customer: [`SaleCreateTransactionRequestCustomer`](./models/sale-create-transaction-request-customer.ts)<a id="customer-salecreatetransactionrequestcustomermodelssale-create-transaction-request-customerts"></a>

##### EnhancedData: [`SaleCreateTransactionRequestEnhancedData`](./models/sale-create-transaction-request-enhanced-data.ts)<a id="enhanceddata-salecreatetransactionrequestenhanceddatamodelssale-create-transaction-request-enhanced-datats"></a>

##### AssociationID: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### BrowserData: [`AuthenticationAcquireClientAuthorizationRequestBrowserData`](./models/authentication-acquire-client-authorization-request-browser-data.ts)<a id="browserdata-authenticationacquireclientauthorizationrequestbrowserdatamodelsauthentication-acquire-client-authorization-request-browser-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationAcquireClientAuthorizationResponse](./models/authentication-acquire-client-authorization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/authonlys` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.authentication.obtain3dSecureAuthentication`<a id="connexpayauthenticationobtain3dsecureauthentication"></a>

This endpoint can be used for obtaining 3D Secure Authentication separate from the Create Sale or Auth-Only calls.  This is recommended for our US and CA clients.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const obtain3dSecureAuthenticationResponse =
  await connexpay.authentication.obtain3dSecureAuthentication({
    Card: {
      IsRecurring: false,
    },
    DeviceGuid: "{{deviceGuid}}",
    BrowserData: {
      AcceptanceHeader: "AcceptanceHeader_example",
      ColorDepth: 1,
      JavaEnabled: true,
      ScreenHeight: 1,
      ScreenWidth: 1,
      TimeZoneOffset: 1,
      Language: "Language_example",
      RedirectURL: "RedirectURL_example",
      UserAgentHeader: "UserAgentHeader_example",
    },
    Amount: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Card: [`AuthenticationObtain3DSecureAuthenticationRequestCard`](./models/authentication-obtain3-dsecure-authentication-request-card.ts)<a id="card-authenticationobtain3dsecureauthenticationrequestcardmodelsauthentication-obtain3-dsecure-authentication-request-cardts"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid as assigned by ConnexPay.

##### BrowserData: [`AuthenticationObtain3DSecureAuthenticationRequestBrowserData`](./models/authentication-obtain3-dsecure-authentication-request-browser-data.ts)<a id="browserdata-authenticationobtain3dsecureauthenticationrequestbrowserdatamodelsauthentication-obtain3-dsecure-authentication-request-browser-datats"></a>

##### Amount: `number`<a id="amount-number"></a>

Amount of the transaction being 3DS authenticated

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationObtain3DSecureAuthenticationResponse](./models/authentication-obtain3-dsecure-authentication-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/3ds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.cancellation.entireTripCancellation`<a id="connexpaycancellationentiretripcancellation"></a>

The Cancel route should be used in the event the entire trip/booking (sale & purchase) require cancellation. In this case, the traveler/cardholder would be due a refund from the sale and the Virtual Card would be terminated to prevent the travel supplier from authorizing the Virtual Card.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const entireTripCancellationResponse =
  await connexpay.cancellation.entireTripCancellation({
    DeviceGuid: "DeviceGuid_example",
    SaleGuid: "SaleGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay

##### SaleGuid: `string`<a id="saleguid-string"></a>

Sale transaction Guid

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### VoidReason: `string`<a id="voidreason-string"></a>

Indicates the reason the transaction was voided

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.activateDelayed`<a id="connexpaycardactivatedelayed"></a>

Use this API to immediately activate a Virtual Card with a delayed activation date

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateDelayedResponse = await connexpay.card.activateDelayed();
```

#### 🔄 Return<a id="🔄-return"></a>

[CardActivateDelayedResponse](./models/card-activate-delayed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/ActivateDelayedCard/{{CardGuid}}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.cancelVirtualCard`<a id="connexpaycardcancelvirtualcard"></a>

This endpoint should be called when you want to completely cancel a virtual card you created using the IssueLite endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelVirtualCardResponse = await connexpay.card.cancelVirtualCard();
```

#### 🔄 Return<a id="🔄-return"></a>

[CardCancelVirtualCardResponse](./models/card-cancel-virtual-card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/Cancel/{{CardGuid}}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.createLodgedCard`<a id="connexpaycardcreatelodgedcard"></a>

Use this endpoint to create a Lodged Card

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLodgedCardResponse = await connexpay.card.createLodgedCard({
  MerchantGuid: "MerchantGuid_example",
  FirstName: "FirstName_example",
  LastName: "LastName_example",
  AmountLimit: 3.14,
  LimitWindow: "LimitWindow_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates a virtual card is being requested for clients account. Value provided by ConnexPay.

##### FirstName: `string`<a id="firstname-string"></a>

Cardholder\\\'s first name. This is the first name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### LastName: `string`<a id="lastname-string"></a>

Cardholder\\\'s last name. This is the last name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.

##### LimitWindow: `string`<a id="limitwindow-string"></a>

This is the time period that both the UsageLimit and the AmountLimit applies. Options are: Day, Week, Month, Lifetime. For example AmountLimit is $500 and LimitWindow is \\\"Week\\\" then the card can be approved for $500 per week.

##### Phone: `string`<a id="phone-string"></a>

Cardholder\\\'s phone number. Phone number up to 20 character string, numbers and plus sign (+) allowed only. Telephone number of the user (including area code), prepended by the + symbol and the 1- to 3-digit country calling code. Do not include hyphens, spaces, or parentheses.

##### Address1: `string`<a id="address1-string"></a>

Cardholder\\\'s address line 1. The street number is used by the supplier when submitting the transaction to perform an AVS check. Alphanumerics and [,.-\\\'] are allowed.

##### Address2: `string`<a id="address2-string"></a>

Cardholder\\\'s address line 2. Alphanumerics and [,.-\\\'] are allowed.

##### City: `string`<a id="city-string"></a>

Cardholder\\\'s city.

##### State: `string`<a id="state-string"></a>

Cardholder\\\'s short name state.  The ISO 3166-2 CA and US state or province code of a user. Length = 2. If a non U.S. or Canadian value is submitted the virtual card request will not be processed and an error response returned.

##### ZipCode: `string`<a id="zipcode-string"></a>

Cardholder\\\'s zipcode. The zip code is used by the supplier when submitting the transaction to perform an AVS check.  The Zipcode must be between 1 and 10 characters long, only numbers and letters are allowed.

##### Country: `string`<a id="country-string"></a>

Cardholder\\\'s country.  Only alpha-2 digit country code allowed and numbers are not allowed.  See ISO-3166 country list of Alpha-2 country codes (https://www.iso.org/obp/ui/) .

##### UsageLimit: `number`<a id="usagelimit-number"></a>

Security Control: Maximum number of times the card may be authorized. This is used in conjunction with the Limit Window: for example, if you specify a Usage Limit of 4 and a Limit Window of Monthly, the card can be authorized up to 4 times per month. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined.

##### ExpirationDate: `string`<a id="expirationdate-string"></a>

The ExpirationDate (YYYY-MM-DD) is the date to be provided to the supplier as the actual expiration date for the virtual card. The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed to avoid acceptance issues.  The expiration date cannot be more than 36 months in the future. If an expiration date is not provided, the expiration will default to issue date plus three years. For cards issued outside of the US/Canada, the expiration date will default to issue date plus three years and can not be overwritten - even if this parameter is included in the request. Note, Returns can still be processed on expired or terminated VCCs.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated VCCs.

##### PurchaseType: `string`<a id="purchasetype-string"></a>

Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \\\'01\\\' (Airline), \\\'02\\\' (Hotels and Resorts), \\\'03\\\' (Car Rental), \\\'04\\\' (Cable, Satellite, Television, and Radio Services),  \\\'05\\\' (Cruise Lines), \\\'11\\\' (Medical Services and Health Practitioners), \\\'21\\\' (Advertising Services), \\\'22\\\' (Misc Advertising and Business Services), \\\'23\\\' (Ticketing), \\\'31\\\' (Insurance Sales, Underwriting, and Premiums), \\\'91\\\' (Restaurants and Food Services), and \\\'93\\\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters and allows dashes and spaces (\\\"-\\\", \\\" \\\").

##### SupplierId: `string`<a id="supplierid-string"></a>

The SupplierId is used to assist with Intelligent Routing functionality. In many cases, a Lodged Card is used at several different suppliers. In this case, there may be no reason to include SupplierId. However, if the Lodged Card will be used at a single supplier, we recommend sending in the SupplierId to assist with acceptance and rebate. The field accepts up to 100 alpha-numeric characters.

##### NonDomesticSupplier: `boolean`<a id="nondomesticsupplier-boolean"></a>

We can issue the “Global VCC” if the Supplier accepting that VCC has an overseas merchant account. This is an optional field. Indicating true will result in issuing this Global VCC. Indicating false (or not including this property in your request) will result in receiving a VCC created for domestic use.

##### Transmission: [`CardCreateLodgedCardRequestTransmission`](./models/card-create-lodged-card-request-transmission.ts)<a id="transmission-cardcreatelodgedcardrequesttransmissionmodelscard-create-lodged-card-request-transmissionts"></a>

##### ReturnCardData: `boolean`<a id="returncarddata-boolean"></a>

Optional field that may be set to true or false. When set to a value of true or if the field is not provided at all, card data is returned in the response. When set to a value of false, the Card Account Number and Security Code (CVV) will be excluded from the response.

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 50 characters and is alpha-numeric.

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### LabelIDs: `string`[]<a id="labelids-string"></a>

Utilize Label IDs to associate a lodged card to a specific label(s) within ConnexPay Bridge UI for your organization. If a lodged card is tied to an incorrect Label, it will not filter or display correctly in Bridge\\\'s Search Grid. Please contact your Customer Care Consultant for a list of valid Label IDs before use.

##### CustomParameters: [`CardIssuanceCreateVirtualCardRequestCustomParametersInner`](./models/card-issuance-create-virtual-card-request-custom-parameters-inner.ts)[]<a id="customparameters-cardissuancecreatevirtualcardrequestcustomparametersinnermodelscard-issuance-create-virtual-card-request-custom-parameters-innerts"></a>

You can add custom parameters to your issue card request in the event that you need to associate additional information with the virtual card. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \\\"invoice\\\" and the value parameter as the invoice number. This requires customized reporting so you\\\'ll need to work with your implementations specialist to determine what\\\'s required.

#### 🔄 Return<a id="🔄-return"></a>

[CardCreateLodgedCardResponse](./models/card-create-lodged-card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/LodgedCard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.getDetail`<a id="connexpaycardgetdetail"></a>

This Endpoint returns Virtual Credit Card details for a specific card guid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await connexpay.card.getDetail({
  cardGuid: "cardGuid_example",
  showFullPan: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identifier for the VCC.

##### showFullPan: `boolean`<a id="showfullpan-boolean"></a>

Set to True to indicate whether the response should include the full account number.

#### 🔄 Return<a id="🔄-return"></a>

[CardGetDetailResponse](./models/card-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Cards/{CardGuid}/{ShowFullPan}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.resendTransmissionInfo`<a id="connexpaycardresendtransmissioninfo"></a>

This endpoint resends payment information to recipient. Or returns a URL you can use within your application to direct a user to a visual representation of the virtual card.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendTransmissionInfoResponse =
  await connexpay.card.resendTransmissionInfo({
    cardGuid: "cardGuid_example",
    TransmissionMethods: ["TransmissionMethods_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### TransmissionMethods: `string`[]<a id="transmissionmethods-string"></a>

Methods of Transmission. Supported methods: Email, Link, Fax. Populate this parameter as \\\'Email\\\' if you want to email the virtual card to a customer or supplier. Use the \\\'Link\\\' option to have a URL included in the response.  Use the \\\"Fax\\\" option to fax the virtual card to a customer or supplier.

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identififer for the Card.

##### EmailRecipient: `string`<a id="emailrecipient-string"></a>

Mandatory when transmission is Email. Otherwise don\\\'t include. This is the email address of the intended recipient. 255 char max.

##### MerchantPhoneNumber: `string`<a id="merchantphonenumber-string"></a>

This is the phone number that should display on the virtual card and is the number that should be used if the link has expired. Up to 15 characters. Numbers and plus sign (+) allowed only.

##### EmailFrom: `string`<a id="emailfrom-string"></a>

For email transmissions, this will be the email address that populates the ‘reply to’ section of the email message. Do not include this parameter on other transmission method types. 255 char max.

##### RecipientName: `string`<a id="recipientname-string"></a>

A descriptive name of the email or fax recipient. Does not apply to the Link transmission method type. 255 char max

##### Subject: `string`<a id="subject-string"></a>

High-level subject line description of the transmission contents. Does not apply to the Link transmission method type. 255 char max.

##### Message: `string`<a id="message-string"></a>

The message body of the email or fax. Does not apply to the Link transmission method type. 1024 char max.

##### DaysToExpire: `number`<a id="daystoexpire-number"></a>

The number of days after card issuance until the link to the VC expires. Range: 1-999 days.

##### FaxFrom: `string`<a id="faxfrom-string"></a>

Mandatory for fax transmission. This can be the client name or fax number the fax is coming from that populates the ‘FaxFrom’ section of the fax. 255 char max.

##### FaxRecipient: `string`<a id="faxrecipient-string"></a>

Mandatory for fax transmissions.  The fax number of the intended recipient.

#### 🔄 Return<a id="🔄-return"></a>

[CardResendTransmissionInfoResponse](./models/card-resend-transmission-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/SendPaymentInfo/{cardGuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.searchIssuedVirtualCards`<a id="connexpaycardsearchissuedvirtualcards"></a>

This endpoint searches for Issued Virtual Cards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchIssuedVirtualCardsResponse =
  await connexpay.card.searchIssuedVirtualCards({
    pageNumber: 1,
    pageSize: 1,
    MerchantGuid: "MerchantGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Your assigned Merchant GUID.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Number of page of the results. Default is 1.

##### pageSize: `number`<a id="pagesize-number"></a>

Size of each page of the results. Default is 1000.

##### SaleGuid: `string`<a id="saleguid-string"></a>

Sale GUID linked to the card you are searching.

##### IncomingTransactionCode: `string`<a id="incomingtransactioncode-string"></a>

Incoming Transaction Code linked to the card you are searching.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

Order Number linked to the card you are searching.

##### CustomerID: `string`<a id="customerid-string"></a>

Order Number linked to the card you are searching.

##### TimeStampFrom: `string`<a id="timestampfrom-string"></a>

Starting Issued Date linked to the card(s) you are searching.

##### TimeStampTo: `string`<a id="timestampto-string"></a>

Ending Issued Date linked to the card(s) you are searching.

##### IssuedAmountFrom: `number`<a id="issuedamountfrom-number"></a>

Start of Issued Amount range linked to the card(s) you are searching.

##### IssuedAmountTo: `number`<a id="issuedamountto-number"></a>

End of Issued Amount range linked to the card(s) you are searching.

##### OutgoingTransactionCode: `string`<a id="outgoingtransactioncode-string"></a>

Outgoing Transaction Code linked to the card(s) you are searching.

##### SettledAmountFrom: `number`<a id="settledamountfrom-number"></a>

Start of Settled Amount range linked to the card(s) you are searching.

##### SettledAmountTo: `number`<a id="settledamountto-number"></a>

End of Settled Amount range linked to the card(s) you are searching.

##### ReturnedAmountFrom: `number`<a id="returnedamountfrom-number"></a>

Start of Settled Returned Amount range linked to the card(s) you are searching.

##### ReturnedAmountTo: `number`<a id="returnedamountto-number"></a>

End of Settled Returned Amount range linked to the card(s) you are searching.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/IssuedCards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.terminateByDate`<a id="connexpaycardterminatebydate"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  ExpirationDate is the month and year that will be applied to the actual VCC. Note, Returns can still be processed on terminated VCCs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateByDateResponse = await connexpay.card.terminateByDate({
  guid: "guid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

Card’s guid to terminate

#### 🔄 Return<a id="🔄-return"></a>

[CardTerminateByDateResponse](./models/card-terminate-by-date-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/TerminateCard/&lt;guid&gt;` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.updateCardDetails`<a id="connexpaycardupdatecarddetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCardDetailsResponse = await connexpay.card.updateCardDetails({
  cardGuid: "cardGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identififer for the Card.

##### PurchaseType: `string`<a id="purchasetype-string"></a>

Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \\\'01\\\' (Airline), \\\'02\\\' (Hotels and Resorts), \\\'03\\\' (Car Rental), \\\'04\\\' (Cable, Satellite, Television, and Radio Services),  \\\'05\\\' (Cruise Lines), \\\'11\\\' (Medical Services and Health Practitioners), \\\'21\\\' (Advertising Services), \\\'22\\\' (Misc Advertising and Business Services), \\\'23\\\' (Ticketing), \\\'31\\\' (Insurance Sales, Underwriting, and Premiums), \\\'91\\\' (Restaurants and Food Services), and \\\'93\\\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.

##### MIDWhitelist: `string`[]<a id="midwhitelist-string"></a>

MID = Merchant ID. Whitelisted MIDs are a supplement to Purchase Type. Utilize if you have a supplier MID(s) where the card can be used if that MID is categorized in an MCC other than the Purchase Type selected. Or use instead of Purchase Type. (e.g., [\\\'273154000108778\\\', \\\'900074LKM\\\'])

##### MIDBlacklist: `string`[]<a id="midblacklist-string"></a>

MID = Merchant ID. The list of MIDs where the virtual card will always be DECLINED regardless of PurchaseType or MIDWhitelist. MIDBlacklist overrides all other specifications. (eg. [\\\'273594000108778\\\'].)

##### UsageLimit: `number`<a id="usagelimit-number"></a>

Security Control: Maximum number of times the card may be authorized. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined. Even though a virtual card is often considered a “one-time-use” card, some suppliers may need to authorize a card multiple times (pre-authorizations, a purchase comprised of multiple tickets, etc.) and you may consider a value that is not overly restrictive to avoid unwanted declines.

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated VCCs.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.

#### 🔄 Return<a id="🔄-return"></a>

[CardUpdateCardDetailsResponse](./models/card-update-card-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/{cardGuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.updateDelayedActivation`<a id="connexpaycardupdatedelayedactivation"></a>

Request this endpoint to update the activation date or card limit of a virtual card with a future activation date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDelayedActivationResponse =
  await connexpay.card.updateDelayedActivation({
    cardGuid: "cardGuid_example",
    MerchantGuid: "MerchantGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates a virtual card is being requested for clients account. Value provided by ConnexPay.

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identifier for the Card.

##### ActivationDate: `string`<a id="activationdate-string"></a>

Provide a future date, up to 600 days, if you wish to update the virtual card\\\'s activation date. Otherwise leave blank.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Provide a card amount if you wish to update the amount limit for the virtual card, otherwise leave blank.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  ExpirationDate is the month and year that will be applied to the actual VCC. The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. Note, Returns can still be processed on terminated VCCs.

#### 🔄 Return<a id="🔄-return"></a>

[CardUpdateDelayedActivationResponse](./models/card-update-delayed-activation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/UpdateDelayedCard/{{CardGuid}}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.card.updateLodgedCard`<a id="connexpaycardupdatelodgedcard"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLodgedCardResponse = await connexpay.card.updateLodgedCard({
  cardGuid: "cardGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identifier for the Card.

##### UsageLimit: `number`<a id="usagelimit-number"></a>

Security Control: Maximum number of times the card may be authorized. This is used in conjunction with the Limit Window; for example, if you specify a Usage Limit of 4 and a Limit Window of Monthly, the card can be authorized up to 4 times per month. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.

##### LimitWindow: `string`<a id="limitwindow-string"></a>

This is the time period that both the UsageLimit and the AmountLimit applies. Options are: Day, Week, Month, Lifetime. For example AmountLimit is $500 and LimitWindow is \\\"Week\\\" then the card can be approved for $500 per week.

##### PurchaseType: `string`<a id="purchasetype-string"></a>

Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \\\'01\\\' (Airline), \\\'02\\\' (Hotels and Resorts), \\\'03\\\' (Car Rental), \\\'04\\\' (Cable, Satellite, Television, and Radio Services),  \\\'05\\\' (Cruise Lines), \\\'11\\\' (Medical Services and Health Practitioners), \\\'21\\\' (Advertising Services), \\\'22\\\' (Misc Advertising and Business Services), \\\'23\\\' (Ticketing), \\\'31\\\' (Insurance Sales, Underwriting, and Premiums), \\\'91\\\' (Restaurants and Food Services), and \\\'93\\\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.

##### Activated: `boolean`<a id="activated-boolean"></a>

True activates a lodged card. False suspends a lodged card.

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a lodged card to a sale or sales. For example, if you have several sales and one lodged card payment to a supplier, you can add association ID to the sales and the lodged card for downstream reporting.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Lodged Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the Lodged Card is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated Lodged Cards.

#### 🔄 Return<a id="🔄-return"></a>

[CardUpdateLodgedCardResponse](./models/card-update-lodged-card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/LodgedCard/{CardGuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.cardIssuance.createVirtualCard`<a id="connexpaycardissuancecreatevirtualcard"></a>

Use this endpoint to issue virtual cards associated with a credit or ACH sale. Do not use this endpoint if you fund your virtual cards from cash and therefor don't have an associated sale. If you aren't sure which Issuance API to use, please contact your client support representative.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVirtualCardResponse =
  await connexpay.cardIssuance.createVirtualCard({
    MerchantGuid: "MerchantGuid_example",
    FirstName: "FirstName_example",
    LastName: "LastName_example",
    AmountLimit: 3.14,
    PurchaseType: "PurchaseType_example",
    OrderNumber: "{{OrderNumber}}",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s Guid. Application-level value that indicates a virtual card is being requested for client\\\'s account. Value provided by ConnexPay.

##### FirstName: `string`<a id="firstname-string"></a>

Cardholder\\\'s first name. This is the first name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### LastName: `string`<a id="lastname-string"></a>

Cardholder\\\'s last name. This is the last name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.

##### PurchaseType: `string`<a id="purchasetype-string"></a>

Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \\\'01\\\' (Airline), \\\'02\\\' (Hotels and Resorts), \\\'03\\\' (Car Rental), \\\'04\\\' (Cable, Satellite, Television, and Radio Services),  \\\'05\\\' (Cruise Lines), \\\'11\\\' (Medical Services and Health Practitioners), \\\'21\\\' (Advertising Services), \\\'22\\\' (Misc Advertising and Business Services), \\\'23\\\' (Ticketing), \\\'31\\\' (Insurance Sales, Underwriting, and Premiums), \\\'91\\\' (Restaurants and Food Services), and \\\'93\\\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.

##### Phone: `string`<a id="phone-string"></a>

Cardholder\\\'s phone number. Phone number up to 20 character string, numbers and plus sign (+) allowed only. Telephone number of the user (including area code), prepended by the + symbol and the 1- to 3-digit country calling code. Do not include hyphens, spaces, or parentheses.

##### Address1: `string`<a id="address1-string"></a>

Cardholder\\\'s address line 1. The street number is used by the supplier when submitting the transaction to perform an AVS check. Alphanumerics and [,.-\\\'] are allowed.

##### Address2: `string`<a id="address2-string"></a>

Cardholder\\\'s address line 2. Alphanumerics and [,.-\\\'] are allowed.

##### City: `string`<a id="city-string"></a>

Cardholder\\\'s city.

##### State: `string`<a id="state-string"></a>

Cardholder\\\'s short name state.  The ISO 3166-2 CA and US state or province code of a user. Length = 2. If a non U.S. or Canadian value is submitted the virtual card request will not be processed and an error response returned.

##### ZipCode: `string`<a id="zipcode-string"></a>

Cardholder\\\'s zipcode. The zip code is used by the supplier when submitting the transaction to perform an AVS check.  The Zipcode must be between 1 and 10 characters long, only numbers and letters are allowed.

##### Country: `string`<a id="country-string"></a>

Cardholder\\\'s country.  Only alpha-2 digit country code allowed and numbers are not allowed.  See ISO-3166 country list of Alpha-2 country codes (https://www.iso.org/obp/ui/) .

##### UsageLimit: `number`<a id="usagelimit-number"></a>

Security Control: Maximum number of times the card may be authorized. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined. Even though a virtual card is often considered a “one-time-use” card, some suppliers may need to authorize a card multiple times (pre-authorizations, a purchase comprised of multiple tickets, etc.) and you may consider a value that is not overly restrictive to avoid unwanted declines.

##### ExpirationDate: `string`<a id="expirationdate-string"></a>

The ExpirationDate (YYYY-MM-DD) is the date to be provided to the supplier as the actual expiration date for the virtual card. The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed to avoid acceptance issues.  The expiration date cannot be more than 36 months in the future. If an expiration date is not provided, the expiration will default to issue date plus three years. For cards issued outside of the US/Canada, the expiration date will default to issue date plus three years and can not be overwritten - even if this parameter is included in the request. Note, Returns can still be processed on expired or terminated VCCs.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated VCCs.

##### MIDWhitelist: `string`[]<a id="midwhitelist-string"></a>

MID = Merchant ID. Whitelisted MIDs are a supplement to Purchase Type. Utilize if you have a supplier MID(s) where the card can be used if that MID is categorized in an MCC other than the Purchase Type selected. Or use instead of Purchase Type. (eg. [\\\'273514000108778\\\', \\\'900074KLM\\\'])

##### MIDBlacklist: `string`[]<a id="midblacklist-string"></a>

MID = Merchant ID. The list of MIDs where the virtual card will always be DECLINED regardless of PurchaseType or MIDWhitelist. MIDBlacklist overrides all other specifications. (eg. [\\\'273594000108778\\\'].)

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal. Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field. The maximum length is 50 alpha-numeric characters and allows dashes ( - ).

##### IncomingTransactionCode: `string`<a id="incomingtransactioncode-string"></a>

ITC for short Application level setting to associate the virtual card request with an original sale or sale group. The value is provided in the sale response of the original sale transaction, or in the Group Sale response of the group sale. All virtual card requests must be associated with an original sale or group transaction.

##### SupplierId: `string`<a id="supplierid-string"></a>

The SupplierId is used to assist with Intelligent Routing functionality. The field accepts up to 100 alpha-numeric characters.  Alphanumeric with a max length of 100 characters

##### NonDomesticSupplier: `boolean`<a id="nondomesticsupplier-boolean"></a>

We can issue the “Global VCC” if the Supplier accepting that VCC has an overseas merchant account. This is an optional field. Indicating true will result in issuing this Global VCC. Indicating false (or not including this property in your request) will result in receiving a VCC created for domestic use.

##### Transmission: [`CardIssuanceCreateVirtualCardRequestTransmission`](./models/card-issuance-create-virtual-card-request-transmission.ts)<a id="transmission-cardissuancecreatevirtualcardrequesttransmissionmodelscard-issuance-create-virtual-card-request-transmissionts"></a>

##### ReturnCardData: `boolean`<a id="returncarddata-boolean"></a>

Optional field that may be set to true or false. When set to a value of true or if the field is not provided at all, card data is returned in the response. When set to a value of false, the Card Account Number and Security Code (CVV) will be excluded from the response.

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 100 characters and is alpha-numeric.

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### CustomParameters: [`CardIssuanceCreateVirtualCardRequestCustomParametersInner`](./models/card-issuance-create-virtual-card-request-custom-parameters-inner.ts)[]<a id="customparameters-cardissuancecreatevirtualcardrequestcustomparametersinnermodelscard-issuance-create-virtual-card-request-custom-parameters-innerts"></a>

You can add custom parameters to your issue card request in the event that you need to associate additional information with the virtual card. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \\\"invoice\\\" and the value parameter as the invoice number. This requires customized reporting so you\\\'ll need to work with your implementations specialist to determine what\\\'s required.

##### LabelIDs: `string`[]<a id="labelids-string"></a>

Utilize Label IDs to associate a virtual card to a specific label(s) within ConnexPay Bridge UI for your organization. If a virtual card is tied to an incorrect Label, it will not filter or display correctly in Bridge\\\'s Search Grid. Please contact your Customer Care Consultant for a list of valid Label IDs before use.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.cardIssue.createVirtualCardLite`<a id="connexpaycardissuecreatevirtualcardlite"></a>

For our lite clients, we provide the ability to issue a VCC (Virtual Credit Card) via API without the requirement to process a sale first.  If you aren't sure which Issuance API to use, please contact your client support representative.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVirtualCardLiteResponse =
  await connexpay.cardIssue.createVirtualCardLite({
    MerchantGuid: "MerchantGuid",
    FirstName: "Jane",
    LastName: "Doe",
    Phone: "1234567890",
    Address1: "123 Test Street",
    Address2: "Suite 185",
    City: "Alpharetta",
    State: "GA",
    ZipCode: "30004",
    Country: "US",
    AmountLimit: 100,
    PurchaseType: "01",
    SequenceNumber: "987654321",
    SupplierId: "DL",
    OrderNumber: "1234A",
    AssociationId: "1234",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates a virtual card is being requested for clients account. Value provided by ConnexPay.

##### FirstName: `string`<a id="firstname-string"></a>

Cardholder\\\'s first name. This is the first name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### LastName: `string`<a id="lastname-string"></a>

Cardholder\\\'s last name. This is the last name placed on the virtual card provided to the supplier. The value is also searchable in the ConnexPay portal.

##### AmountLimit: `number`<a id="amountlimit-number"></a>

Security Control: Maximum dollar amount the card can be authorized and settled, which must be less than or equal to $1,000,000.00. The value must incorporate any anticipated overages such as currency conversion or taxes that a supplier may associate with the transaction. If a supplier attempts to authorize a card for more than the amount limit it will be declined.

##### PurchaseType: `string`<a id="purchasetype-string"></a>

Security Control: The industry where the virtual card will be utilized. For example, if value set to airline and the card is used at hotel, it will be declined. Available purchase type values are: \\\'01\\\' (Airline), \\\'02\\\' (Hotels and Resorts), \\\'03\\\' (Car Rental), \\\'04\\\' (Cable, Satellite, Television, and Radio Services),  \\\'05\\\' (Cruise Lines), \\\'11\\\' (Medical Services and Health Practitioners), \\\'21\\\' (Advertising Services), \\\'22\\\' (Misc Advertising and Business Services), \\\'23\\\' (Ticketing), \\\'31\\\' (Insurance Sales, Underwriting, and Premiums), \\\'91\\\' (Restaurants and Food Services), and \\\'93\\\' (Tax Payments). Leave this blank if you plan to utilize MID level controls.

##### Phone: `string`<a id="phone-string"></a>

Cardholder\\\'s phone number.  Phone number up to 20 character string, numbers and plus sign (+) allowed only. Telephone number of the user (including area code), prepended by the + symbol and the 1- to 3-digit country calling code. Do not include hyphens, spaces, or parentheses.

##### Address1: `string`<a id="address1-string"></a>

Cardholder\\\'s address line 1. The street number is used by the supplier when submitting the transaction to perform an AVS check. Alphanumerics and [,.-\\\'] are allowed.

##### Address2: `string`<a id="address2-string"></a>

Cardholder\\\'s address line 2. Alphanumerics and [,.-\\\'] are allowed.

##### City: `string`<a id="city-string"></a>

Cardholder\\\'s city.

##### State: `string`<a id="state-string"></a>

Cardholder\\\'s short name state.  The ISO 3166-2 CA and US state or province code of a user. Length = 2. If a non U.S. or Canadian value is submitted the virtual card request will not be processed and an error response returned.

##### ZipCode: `string`<a id="zipcode-string"></a>

Cardholder\\\'s zipcode. The zip code is used by the supplier when submitting the transaction to perform an AVS check.  The Zipcode must be between 1 and 10 characters long, only numbers and letters are allowed.

##### Country: `string`<a id="country-string"></a>

Cardholder\\\'s country.  Only alpha-2 digit country code allowed and numbers are not allowed.  See ISO-3166 country list of Alpha-2 country codes (https://www.iso.org/obp/ui/) .

##### UsageLimit: `number`<a id="usagelimit-number"></a>

Security Control: Maximum number of times the card may be authorized. The maximum allowed field value is 99, and if you do not provide a value the card will be considered unlimited. Authorization attempts exceeding the provided value will be declined. Even though a virtual card is often considered a “one-time-use” card, some suppliers may need to authorize a card multiple times (pre-authorizations, a purchase comprised of multiple tickets, etc.) and you may consider a value that is not overly restrictive to avoid unwanted declines.

##### ExpirationDate: `string`<a id="expirationdate-string"></a>

The ExpirationDate (YYYY-MM-DD) is the date to be provided to the supplier as the actual expiration date for the virtual card. The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed to avoid acceptance issues.  The expiration date cannot be more than 36 months in the future. If an expiration date is not provided, the expiration will default to issue date plus three years. For cards issued outside of the US/Canada, the expiration date will default to issue date plus three years and can not be overwritten - even if this parameter is included in the request. Note, Returns can still be processed on expired or terminated VCCs.

##### TerminateDate: `string`<a id="terminatedate-string"></a>

The TerminateDate (YYYY-MM-DD format) is the date the Virtual Credit Card will be terminated by ConnexPay. TerminateDate is different than ExpirationDate in that TerminateDate indicates the actual date the card will no longer be active.  The recommendation is to set the ExpirationDate one or two years in the future and set the TerminateDate just a day or two after the VCC is expected to be processed. If a terminate date is not indicated, the card will be inactivated as of the expiration date. Note, Returns can still be processed on terminated VCCs.

##### MIDWhitelist: `string`[]<a id="midwhitelist-string"></a>

MID = Merchant ID. Whitelisted MIDs are a supplement to Purchase Type. Utilize if you have a supplier MID(s) where the card can be used if that MID is categorized in an MCC other than the Purchase Type selected. Or use instead of Purchase Type. (e.g., [\\\'273154000108778\\\', \\\'900074LKM\\\'])

##### MIDBlacklist: `string`[]<a id="midblacklist-string"></a>

MID = Merchant ID. The list of MIDs where the virtual card will always be DECLINED regardless of PurchaseType or MIDWhitelist. MIDBlacklist overrides all other specifications. (eg. [\\\'273594000108778\\\'].)

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If a card request is made with all the same parameter information and the same sequence number, within 30 minutes, the request will be considered a duplicate and a new card will not be issued.  Note: value is not searchable or reportable in Bridge.  Alphanumeric.

##### SupplierId: `string`<a id="supplierid-string"></a>

The SupplierId is used to assist with Intelligent Routing functionality. The field accepts up to 100 alpha-numeric characters.  Alphanumeric with a max length of 100 characters

##### NonDomesticSupplier: `boolean`<a id="nondomesticsupplier-boolean"></a>

We can issue the “Global VCC” if the Supplier accepting that VCC has an overseas merchant account. This is an optional field. Indicating true will result in issuing this Global VCC. Indicating false (or not including this property in your request) will result in receiving a VCC created for domestic use.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters and allows dashes and spaces  (\\\"-\\\", \\\" \\\").

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 100 characters and is alpha-numeric.

##### Transmission: [`CardIssueCreateVirtualCardLiteRequestTransmission`](./models/card-issue-create-virtual-card-lite-request-transmission.ts)<a id="transmission-cardissuecreatevirtualcardliterequesttransmissionmodelscard-issue-create-virtual-card-lite-request-transmissionts"></a>

##### ReturnCardData: `boolean`<a id="returncarddata-boolean"></a>

Optional field that may be set to true or false. When set to a value of true or if the field is not provided at all, card data is returned in the response. When set to a value of false, the Card Account Number and Security Code (CVV) will be excluded from the response.

##### CustomParameters: [`CardIssuanceCreateVirtualCardRequestCustomParametersInner`](./models/card-issuance-create-virtual-card-request-custom-parameters-inner.ts)[]<a id="customparameters-cardissuancecreatevirtualcardrequestcustomparametersinnermodelscard-issuance-create-virtual-card-request-custom-parameters-innerts"></a>

You can add custom parameters to your issue card request in the event that you need to associate additional information with the virtual card. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \\\"invoice\\\" and the value parameter as the invoice number. This requires customized reporting so you\\\'ll need to work with your implementations specialist to determine what\\\'s required.

##### ActivationDate: `string`<a id="activationdate-string"></a>

Future date that the card should be fully funded, at least one day from creation date and within 600 days. If no activation date is supplied the card will be funded immediately.

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### LabelIDs: `string`[]<a id="labelids-string"></a>

Utilize Label IDs to associate a virtual card to a specific label(s) within ConnexPay Bridge UI for your organization. If a virtual card is tied to an incorrect Label, it will not filter or display correctly in Bridge\\\'s Search Grid. Please contact your Customer Care Consultant for a list of valid Label IDs before use.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueCard/IssueLite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.funding.merchantCashBalance`<a id="connexpayfundingmerchantcashbalance"></a>

Use this endpoint to fund or withdraw your merchant cash balance with your merchant bank account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const merchantCashBalanceResponse = await connexpay.funding.merchantCashBalance(
  {
    merchantGUID: "merchantGUID_example",
    amount: 3.14,
    isFundCashBalance: true,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGUID: `string`<a id="merchantguid-string"></a>

The merchant\\\'s GUID. Value provided by ConnexPay.

##### amount: `number`<a id="amount-number"></a>

Self-service funding amount that will be processed. Maximum transaction and daily funding limits are set by ConnexPay.

##### isFundCashBalance: `boolean`<a id="isfundcashbalance-boolean"></a>

true: Fund your merchant cash balance from your merchant bank account. false: Withdraw your merchant cash balance and ConnexPay will credit your merchant bank account.

#### 🔄 Return<a id="🔄-return"></a>

[FundingMerchantCashBalanceResponse](./models/funding-merchant-cash-balance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/MerchantSelfServiceFunding` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.funding.transferMerchantCashBalance`<a id="connexpayfundingtransfermerchantcashbalance"></a>

Use this endpoint to transfer funds between your merchant cash balances within the same Corporate entity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferMerchantCashBalanceResponse =
  await connexpay.funding.transferMerchantCashBalance({
    TransferredFrom: "TransferredFrom_example",
    TransferredTo: "TransferredTo_example",
    Amount: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### TransferredFrom: `string`<a id="transferredfrom-string"></a>

The merchant\\\'s GUID of the withdrawn account. Value provided by ConnexPay.

##### TransferredTo: `string`<a id="transferredto-string"></a>

The merchant\\\'s GUID of the deposited account. Value provided by ConnexPay.

##### Amount: `number`<a id="amount-number"></a>

Transferred funding amount that will be processed. Maximum transaction and daily funding limits are set by ConnexPay.

#### 🔄 Return<a id="🔄-return"></a>

[FundingTransferMerchantCashBalanceResponse](./models/funding-transfer-merchant-cash-balance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/MerchantFlexFunding/Funds/Transfer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.funds.getAvailableDetails`<a id="connexpayfundsgetavailabledetails"></a>

Use this endpoint to pull details regarding your Available Funds like cash balance, Available to Authorize (ATA) or Available to Issue (ATI), and the details that make up the final number.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvailableDetailsResponse = await connexpay.funds.getAvailableDetails({
  merchantGuid: "merchantGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\'s Guid assigned by ConnexPay

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/AvailableFunds/{merchantGuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.merchantPayees.createPayee`<a id="connexpaymerchantpayeescreatepayee"></a>

Create a payee for a merchant

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPayeeResponse = await connexpay.merchantPayees.createPayee({
  merchantGuid: "merchantGuid_example",
  idMerchant: 0,
  isBusiness: false,
  firstName: "John",
  lastName: "Doe",
  dbaName: "",
  payeeId: "payeeID01",
  taxId: "12-3456789",
  customerId: "customerID01",
  email: "test@test.com",
  address1: "123 Main St",
  address2: "",
  city: "Anytown",
  zip: "12345",
  country: "US",
  preferredPayoutMethod: "VCC",
  preferredCardBrand: "Visa",
  preferredCardClass: "CreditCommercial",
  purchaseType: "01",
  guid: "00000000-0000-0000-0000-000000000000",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### isBusiness: `boolean`<a id="isbusiness-boolean"></a>

##### payeeId: `string`<a id="payeeid-string"></a>

##### preferredPayoutMethod: `string`<a id="preferredpayoutmethod-string"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The merchant guid

##### idMerchant: `number`<a id="idmerchant-number"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### dbaName: `string`<a id="dbaname-string"></a>

##### taxId: `string`<a id="taxid-string"></a>

##### customerId: `string`<a id="customerid-string"></a>

##### email: `string`<a id="email-string"></a>

##### address1: `string`<a id="address1-string"></a>

##### address2: `string`<a id="address2-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### country: `string`<a id="country-string"></a>

##### preferredCardBrand: `string`<a id="preferredcardbrand-string"></a>

##### preferredCardClass: `string`<a id="preferredcardclass-string"></a>

##### purchaseType: `string`<a id="purchasetype-string"></a>

##### guid: `string`<a id="guid-string"></a>

##### timestamp: `string`<a id="timestamp-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MerchantPayeeDto](./models/merchant-payee-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Merchants/{merchantGuid}/Payees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.merchantPayees.deletePayee`<a id="connexpaymerchantpayeesdeletepayee"></a>

Delete a payee for a merchant by guid

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePayeeResponse = await connexpay.merchantPayees.deletePayee({
  merchantGuid: "merchantGuid_example",
  payeeGuid: "payeeGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The merchant guid

##### payeeGuid: `string`<a id="payeeguid-string"></a>

The payee guid

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.merchantPayees.getPayee`<a id="connexpaymerchantpayeesgetpayee"></a>

Get a payee for a merchant by guid

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayeeResponse = await connexpay.merchantPayees.getPayee({
  merchantGuid: "merchantGuid_example",
  payeeGuid: "payeeGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The merchant guid

##### payeeGuid: `string`<a id="payeeguid-string"></a>

The payee guid

#### 🔄 Return<a id="🔄-return"></a>

[MerchantPayeeDto](./models/merchant-payee-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.merchantPayees.getPayees`<a id="connexpaymerchantpayeesgetpayees"></a>

Get a list of payees for a merchant

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayeesResponse = await connexpay.merchantPayees.getPayees({
  merchantGuid: "merchantGuid_example",
  page: 1,
  pagesize: 1,
  searchTerm: "payeeID01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The merchant guid

##### page: `number`<a id="page-number"></a>

The page number

##### pagesize: `number`<a id="pagesize-number"></a>

The number of records to return per page

##### searchTerm: `string`<a id="searchterm-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MerchantPayeePaginatedResponse](./models/merchant-payee-paginated-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Merchants/{merchantGuid}/Payees/Search/{page}/{pagesize}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.merchantPayees.updatePayee`<a id="connexpaymerchantpayeesupdatepayee"></a>

Update a payee for a merchant by guid

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePayeeResponse = await connexpay.merchantPayees.updatePayee({
  merchantGuid: "merchantGuid_example",
  payeeGuid: "payeeGuid_example",
  idMerchant: 0,
  isBusiness: false,
  firstName: "John",
  lastName: "Doe",
  dbaName: "",
  payeeId: "payeeID01",
  taxId: "12-3456789",
  customerId: "customerID01",
  email: "test@test.com",
  address1: "123 Main St",
  address2: "",
  city: "Anytown",
  zip: "12345",
  country: "US",
  preferredPayoutMethod: "VCC",
  preferredCardBrand: "Visa",
  preferredCardClass: "CreditCommercial",
  purchaseType: "01",
  guid: "00000000-0000-0000-0000-000000000000",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### isBusiness: `boolean`<a id="isbusiness-boolean"></a>

##### payeeId: `string`<a id="payeeid-string"></a>

##### preferredPayoutMethod: `string`<a id="preferredpayoutmethod-string"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

The merchant guid

##### payeeGuid: `string`<a id="payeeguid-string"></a>

The payee guid

##### idMerchant: `number`<a id="idmerchant-number"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### dbaName: `string`<a id="dbaname-string"></a>

##### taxId: `string`<a id="taxid-string"></a>

##### customerId: `string`<a id="customerid-string"></a>

##### email: `string`<a id="email-string"></a>

##### address1: `string`<a id="address1-string"></a>

##### address2: `string`<a id="address2-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### country: `string`<a id="country-string"></a>

##### preferredCardBrand: `string`<a id="preferredcardbrand-string"></a>

##### preferredCardClass: `string`<a id="preferredcardclass-string"></a>

##### purchaseType: `string`<a id="purchasetype-string"></a>

##### guid: `string`<a id="guid-string"></a>

##### timestamp: `string`<a id="timestamp-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Merchants/{merchantGuid}/Payees/{payeeGuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.cancelPayments`<a id="connexpaypushtocardcancelpayments"></a>

Use this endpoint to cancel payments within a Payout.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelPaymentsResponse = await connexpay.pushToCard.cancelPayments({
  payoutGuid: "payoutGuid_example",
  merchantGuid: "00000000-0000-0000-0000-000000000000",
  payments: ["00000000-0000-0000-0000-000000000000"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

Application-level value that indicates a Payout is being requested for client\\\'s account. Value provided by ConnexPay.

##### payments: `string`[]<a id="payments-string"></a>

The Payment Guid returned in the Create Payout response.

##### payoutGuid: `string`<a id="payoutguid-string"></a>

Globally Unique Identifier for a the Payout that will be changed

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payouts/{payoutGuid}/Cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.createPayee`<a id="connexpaypushtocardcreatepayee"></a>

Use this endpoint to create a new Payee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPayeeResponse = await connexpay.pushToCard.createPayee({
  payeeGuid: "00000000-0000-0000-0000-000000000000",
  merchantGuid: "00000000-0000-0000-0000-000000000000",
  firstName: "firstName_example",
  lastName: "lastName_example",
  email: "2@[7.88.001.8]",
  phone: "+10480728880",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

Merchant guid for the Payee to be created.

##### firstName: `string`<a id="firstname-string"></a>

First name for the Payee to be created.

##### lastName: `string`<a id="lastname-string"></a>

Last name for the Payee to be created.

##### email: `string`<a id="email-string"></a>

Email address for the Payee.

##### phone: `string`<a id="phone-string"></a>

Phone number for the Payee, up to 10-character string.

##### payeeGuid: `string`<a id="payeeguid-string"></a>

Guid for the created Payee that is returned by ConnexPay upon creation of a Payee. Ignored if provided in a Payee creation request.

##### address1: `string`<a id="address1-string"></a>

Postal address line 1 for the Payee. Alphanumerics and [,.-\\\'] are allowed.

##### address2: `string`<a id="address2-string"></a>

Postal address line 2 for the Payee. Alphanumerics and [,.-\\\'] are allowed.

##### city: `string`<a id="city-string"></a>

Postal address city for the Payee.

##### state: `string`<a id="state-string"></a>

Postal address state for the Payee.

##### zipCode: `string`<a id="zipcode-string"></a>

Postal code for the Payee.

##### status: `string`<a id="status-string"></a>

Status for the Payee.

##### cardId: `string`<a id="cardid-string"></a>

Unique identifier that refers to the card saved for a Payee when using the Payment Widget. It will be null when a Payee is created but will have a value once stored for the Payee using the Payment Widget.

#### 🔄 Return<a id="🔄-return"></a>

[PayeeDto](./models/payee-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.createPayout`<a id="connexpaypushtocardcreatepayout"></a>

Use this endpoint to create a new Payout.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPayoutResponse = await connexpay.pushToCard.createPayout({
  payoutGuid: "00000000-0000-0000-0000-000000000000",
  merchantGuid: "00000000-0000-0000-0000-000000000000",
  memo: "memo_example",
  payments: [
    {
      payeeGuid: "00000000-0000-0000-0000-000000000000",
      paymentGuid: "00000000-0000-0000-0000-000000000000",
      ridGuid: "00000000-0000-0000-0000-000000000000",
      value: 3.14,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchantGuid: `string`<a id="merchantguid-string"></a>

Application-level value that indicates a Payout is being requested for client\\\'s account. Value provided by ConnexPay.

##### memo: `string`<a id="memo-string"></a>

A brief description highlighting the reason for this Payout.

##### payments: [`PaymentsDto`](./models/payments-dto.ts)[]<a id="payments-paymentsdtomodelspayments-dtots"></a>

##### payoutGuid: `string`<a id="payoutguid-string"></a>

Guid assigned to the Payout by ConnexPay upon creation of a Payout.

##### payoutReferenceToken: `string`<a id="payoutreferencetoken-string"></a>

The Payout identifier that will be needed by ConnexPay support teams to research issues.

##### status: `string`<a id="status-string"></a>

Status of the Payout.

##### orderNumber: `string`<a id="ordernumber-string"></a>

The most common number used throughout the ConnexPay Portal. Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. The maximum length is 50 alpha-numeric characters and allows dashes ( - ).

##### customerId: `string`<a id="customerid-string"></a>

Transaction ID within the client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes. The maximum length is 100 characters and is alpha-numeric.

##### associationId: `string`<a id="associationid-string"></a>

Association ID is used to tie a Payout to a sale or sales. For example, if you have several sales and one Payout to a Payee, association ID can be added to the sales and the Payout for downstream reporting.

##### labelIds: `number`[]<a id="labelids-number"></a>

Label IDs are used to associate a Payout to specific labels within ConnexPay Bridge UI for an organization. If a Payout is tied to an incorrect Label, it will not filter or display correctly in Bridge\\\'s Search Grid. Please contact your Customer Care Consultant for a list of valid Label IDs before use.

#### 🔄 Return<a id="🔄-return"></a>

[PayoutDto](./models/payout-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payouts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.getAuthenticationTokenAsync`<a id="connexpaypushtocardgetauthenticationtokenasync"></a>

Get Authentication Token for DropInUI

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAuthenticationTokenAsyncResponse =
  await connexpay.pushToCard.getAuthenticationTokenAsync({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payeeGuid: `string`<a id="payeeguid-string"></a>

Globally Unique Identifier for the Payee being authenticated.

##### payeeEmailAddress: `string`<a id="payeeemailaddress-string"></a>

Email address of the Payee being retrieved

#### 🔄 Return<a id="🔄-return"></a>

[PayoutAuthResponse](./models/payout-auth-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/AuthenticatePaymentWidget` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.getPayee`<a id="connexpaypushtocardgetpayee"></a>

Use this endpoint to retrieve a Payee for a specific Payee guid. One or both 'payeeGuid' or 'payeeEmailAddress' must be provided.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayeeResponse = await connexpay.pushToCard.getPayee({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payeeGuid: `string`<a id="payeeguid-string"></a>

Globally Unique Identifier for the Payee being retrieved

##### payeeEmailAddress: `string`<a id="payeeemailaddress-string"></a>

Email address of the Payee being retrieved

#### 🔄 Return<a id="🔄-return"></a>

[PayeeDto](./models/payee-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.getPayoutDetails`<a id="connexpaypushtocardgetpayoutdetails"></a>

Use this endpoint to retrieve the details for a Payout for a specific Payout guid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayoutDetailsResponse = await connexpay.pushToCard.getPayoutDetails({
  payoutGuid: "payoutGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payoutGuid: `string`<a id="payoutguid-string"></a>

Globally Unique Identifier for a the Payout that will be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[DtoPayout](./models/dto-payout.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payouts/{payoutGuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.managePayee`<a id="connexpaypushtocardmanagepayee"></a>

Use this endpoint to enable or disable a Payee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const managePayeeResponse = await connexpay.pushToCard.managePayee({
  payeeGuid: "payeeGuid_example",
  status: "enable",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payeeGuid: `string`<a id="payeeguid-string"></a>

Globally Unique Identifier for the Payee that will be changed

##### status: `'enable' | 'disable'`<a id="status-enable--disable"></a>

Must be \'enable\' or \'disable\'

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payees/{payeeGuid}/{status}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.pushFundsToCardAsync`<a id="connexpaypushtocardpushfundstocardasync"></a>

Push Funds to a Card

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pushFundsToCardAsyncResponse =
  await connexpay.pushToCard.pushFundsToCardAsync({
    ridGuid: "ridGuid_example",
    cardId: "cardId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ridGuid: `string`<a id="ridguid-string"></a>

For Payment Widget clients. A ridGuid will will be returned upon creation of a Payout. That must be saved and passed here to complete the process.

##### cardId: `string`<a id="cardid-string"></a>

For Payment Widget clients. The cardId is retrieved by calling the Get Payee endpoint.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payments/{ridGuid}/{cardId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.pushToCard.updatePayee`<a id="connexpaypushtocardupdatepayee"></a>

Use this endpoint to update data for a Payee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePayeeResponse = await connexpay.pushToCard.updatePayee({
  payeeGuid: "payeeGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payeeGuid: `string`<a id="payeeguid-string"></a>

Globally Unique Identifier for a the Payee that will be updated

##### firstName: `string`<a id="firstname-string"></a>

First name for the Payee to be updated.

##### lastName: `string`<a id="lastname-string"></a>

Last name for the Payee to be updated.

##### email: `string`<a id="email-string"></a>

Email address for the Payee to be updated.

##### address1: `string`<a id="address1-string"></a>

Postal address line 1 for the Payee to be updated. Alphanumerics and [,.-\\\'] are allowed.

##### address2: `string`<a id="address2-string"></a>

Postal address line 2 for the Payee to be updated. Alphanumerics and [,.-\\\'] are allowed.

##### city: `string`<a id="city-string"></a>

Postal address city for the Payee to be updated.

##### state: `string`<a id="state-string"></a>

Postal address state for the Payee to be updated.

##### zipCode: `string`<a id="zipcode-string"></a>

Postal code for the Payee to be updated.

##### phone: `string`<a id="phone-string"></a>

Phone number for the Payee to be updated, up to 10-character string.

##### status: `string`<a id="status-string"></a>

Status for the Payee to be updated.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PushToCard/Payees/{payeeGuid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.replay.purchaseEventHistoryResend`<a id="connexpayreplaypurchaseeventhistoryresend"></a>

Call this endpoint to receive VCC, Lodged Card, Physical Card or ACH purchase events either by unique Guid or for a specified date range. If you subscribe to webhooks and are concerned you may be missing events, this endpoint can retrieve past events.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchaseEventHistoryResendResponse =
  await connexpay.replay.purchaseEventHistoryResend({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### SourceGuid: `string`<a id="sourceguid-string"></a>

The unique GUID for a particular purchase.  This would be the Guid returned on your virtual card, lodged card, physical card or ACH issue call.

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Include your Merchant Guid instead of the Source Guid if you want to see all events for a given date range (you must also include the date range parameters)

##### EventGuid: `string`<a id="eventguid-string"></a>

Transaction ID as displayed in Bridge

##### FromDateTime: `string`<a id="fromdatetime-string"></a>

From date

##### ToDateTime: `string`<a id="todatetime-string"></a>

To date

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/PurchaseEventHistory/Resend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.return.itemRequest`<a id="connexpayreturnitemrequest"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const itemRequestResponse = await connexpay.return.itemRequest({
  DeviceGuid: "DeviceGuid_example",
  Amount: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid

##### Amount: `number`<a id="amount-number"></a>

Transaction’s amount. Min. amt.: $0.50

##### SaleGuid: `string`<a id="saleguid-string"></a>

Mandatory when SaleReferenceNumber field is not sent. Sale\\\'s Guid.

##### SaleReferenceNumber: `number`<a id="salereferencenumber-number"></a>

Mandatory when SaleGuid field is not sent. Sale\\\'s Reference Number

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### ReturnRetryCard: [`ReturnItemRequestRequestReturnRetryCard`](./models/return-item-request-request-return-retry-card.ts)<a id="returnretrycard-returnitemrequestrequestreturnretrycardmodelsreturn-item-request-request-return-retry-cardts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReturnItemRequestResponse](./models/return-item-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/returns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.return.searchSaleReturns`<a id="connexpayreturnsearchsalereturns"></a>

This endpoint searches sale returns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchSaleReturnsResponse = await connexpay.return.searchSaleReturns({
  exportable: "Mandatory",
  pageNumber: 1,
  pageSize: "Optional",
  MerchantGuid: "Mandatory",
  CardHolderName: "Optional",
  Status: "Optional",
  TimeStampFrom: "Optional",
  TimeStampTo: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportable: `string`<a id="exportable-string"></a>

True or False. It means if you want results exportable to CSV.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Int. Number of page of the results. Default is 1 (Page size default is 500).

##### pageSize: `string`<a id="pagesize-string"></a>

Int. Size of each page of the results. Default is 500.

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant’s Guid.

##### AmountFrom: `number`<a id="amountfrom-number"></a>

Amount of the transaction. Min. amt.: $0.50

##### AmountTo: `number`<a id="amountto-number"></a>

Amount of the transaction. Min. amt.: $0.50

##### CardHolderName: `string`<a id="cardholdername-string"></a>

Cardholder’s name. Providing information in this field allows a user of the ConnexPay portal to search for a transaction using the cardholder name.

##### Status: `string`<a id="status-string"></a>

Return’s status.  Allowed values:  1. Transaction - Approved 2. Transaction - Declined 3. Transaction - Created - Local 4. Transaction - Created - Error: Processor not reached 5. Transaction - Processor Error 6. Transaction - Approved - Warning

##### TimeStampFrom: `string`<a id="timestampfrom-string"></a>

Return’s TimeStamp.

##### TimeStampTo: `string`<a id="timestampto-string"></a>

Return’s TimeStamp.

#### 🔄 Return<a id="🔄-return"></a>

[ReturnSearchSaleReturnsResponse](./models/return-search-sale-returns-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/Returns/{exportable}/{pageNumber}/{pageSize}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.sale.activateDelayed`<a id="connexpaysaleactivatedelayed"></a>

Activate a delayed activation sale independent of the activation date for which the sale was created.

A client can "Activate" a delayed activation sale this way at any time before ConnexPay will automatically activate it during the early hours of the supplied future date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateDelayedResponse = await connexpay.sale.activateDelayed({
  saleGuid: "saleGuid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### saleGuid: `string`<a id="saleguid-string"></a>

The sale guid returned upon initial creation of the delayed activation sale.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/sales/Activate/{SaleGuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.sale.createTransaction`<a id="connexpaysalecreatetransaction"></a>

The Create Sale Endpoint is used by acquiring clients. The Sale transaction is used to create a sale for your consumer. You can create a credit sale or an ACH sale (ACH sales apply to US Clients only). A credit sale will charge a consumer's credit card. The consumer's credit card will be authorized immediately when the Sales request is received and will automatically settle/batch that same night. In other words, this one Sale request is just like running an AuthOnly and a Capture in one request.You can postpone charging the consumer's credit card by providing a date in the 'ActivationDate' of your request. Doing so will delay the authorization and charge to the consumer's credit card until that future date.An ACH sale will create an ACH transaction that will debit the consumer's bank account. ACH sales received prior to 3:00 PM EST will process overnight. ACH Sales received after 3:00 PM EST will process the following night.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTransactionResponse = await connexpay.sale.createTransaction({
  DeviceGuid: "{{Device}}",
  Amount: 3.14,
  TenderType: "credit",
  SequenceNumber: "{{SequenceNumber}}",
  OrderNumber: "{{OrderNumber}}",
  StatementDescription: "{{StatementDescription}}",
  ConnexPayTransaction: {
    ExpectedPayments: 1,
  },
  RiskData: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay

##### Amount: `number`<a id="amount-number"></a>

Amount of the transaction that will be processed. Note: this value is submitted multiple times (in different formats) within the integration to support different purposes i.e. risk analysis, merchant processing, etc.  The minimum amount is: $0.50.

##### ConnexPayTransaction: [`SaleCreateTransactionRequestConnexPayTransaction`](./models/sale-create-transaction-request-connex-pay-transaction.ts)<a id="connexpaytransaction-salecreatetransactionrequestconnexpaytransactionmodelssale-create-transaction-request-connex-pay-transactionts"></a>

##### RiskData: [`SaleCreateTransactionRequestRiskData`](./models/sale-create-transaction-request-risk-data.ts)<a id="riskdata-salecreatetransactionrequestriskdatamodelssale-create-transaction-request-risk-datats"></a>

##### TenderType: `string`<a id="tendertype-string"></a>

Allowed values:  \\\"credit\\\" (default if TenderType not provided) and \\\"ach\\\"

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If a sale request with the same parameter data and the same sequence number is sent within 30 minutes it will be considered a duplicate request and the sale will not process. Note: value is not searchable or reportable in Bridge.  Alphanumeric.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal.  Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field.  The maximum length is 50 alpha-numeric characters and allows dashes ( - ).

##### SendReceipt: `boolean`<a id="sendreceipt-boolean"></a>

Value determines whether or not a customer shall be emailed a receipt from the ConnexPay platform if the email address is provided in the API customer block. The default value is TRUE. Set to FALSE so that an email receipt is not sent to the customer. Set to TRUE or leave empty if you want e-mail to be sent. If TRUE, customer\\\'s email must be included in the \\\"Card.Customer.email\\\" parameter.

##### RiskProcessingOnly: `boolean`<a id="riskprocessingonly-boolean"></a>

Indicator that determines if client would like to evaluate the transactions as risk only rather than process as merchant of record and create a virtual card. The allowed values:  1. Set to TRUE will only run risk validations. If TenderType is not set to Credit, setting TRUE will throw a validation error.  2. Set to FALSE will run risk validations and an authorization on the card. For this option a Processing Merchant account is required, contact ConnexPay support if any questions.  3. Set to NULL and your Merchant Level settings would apply.

##### StatementDescription: `string`<a id="statementdescription-string"></a>

US Clients only: The statement description allows a client to customize the Merchant name that appears on the cardholder statement such that the cardholder recognizes the transaction on their statement. For US Merchants: ConnexPay recommends sending a recognizable DBA along with the PNR i.e. ABC Travel ABC123.  The maximum length is 25 alpha-numeric characters.  For EU Merchants: The maximum length of the description is 13 alphanumeric characters and the DBA Name and City will automatically be coded to appear as part of the statement description. Note: functionality not applicable for American Express program.

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes.  The maximum length is 100 characters and is alpha-numeric.

##### ActivationDate: `string`<a id="activationdate-string"></a>

Set a future date on which to run this sale, at least one day from creation date and within 600 days. If this parameter is supplied a record for this sale is created, supplied consumer card information is internally tokenized, but fraud check and authorization do not occur until ConnexPay processes it on the supplied ActivationDate. Alternatively, a client can force activation via the Activate API (see below). If this date is not supplied a sale is authorized and the consumer\\\'s credit card is charged immediately.

##### RequestIp: `string`<a id="requestip-string"></a>

Mandatory if TenderType is ACH. Customer\\\'s IP Address is a required parameter for all ACH Sales transactions to adhere to NACHA regulations.

##### Card: [`SaleCreateTransactionRequestCard`](./models/sale-create-transaction-request-card.ts)<a id="card-salecreatetransactionrequestcardmodelssale-create-transaction-request-cardts"></a>

##### BankAccount: [`SaleCreateTransactionRequestBankAccount`](./models/sale-create-transaction-request-bank-account.ts)<a id="bankaccount-salecreatetransactionrequestbankaccountmodelssale-create-transaction-request-bank-accountts"></a>

##### Customer: [`SaleCreateTransactionRequestCustomer`](./models/sale-create-transaction-request-customer.ts)<a id="customer-salecreatetransactionrequestcustomermodelssale-create-transaction-request-customerts"></a>

##### EnhancedData: [`SaleCreateTransactionRequestEnhancedData`](./models/sale-create-transaction-request-enhanced-data.ts)<a id="enhanceddata-salecreatetransactionrequestenhanceddatamodelssale-create-transaction-request-enhanced-datats"></a>

##### AssociationId: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### CustomParameters: [`SaleCreateTransactionRequestCustomParametersInner`](./models/sale-create-transaction-request-custom-parameters-inner.ts)[]<a id="customparameters-salecreatetransactionrequestcustomparametersinnermodelssale-create-transaction-request-custom-parameters-innerts"></a>

You can add custom parameters to your sale request in the event that you need to associate additional information with the pay-in. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \\\"invoice\\\" and the value parameter as the invoice number. This requires customized reporting so you\\\'ll need to work with your implementations specialist to determine what\\\'s required.

##### LabelIDs: `string`[]<a id="labelids-string"></a>

Utilize Label IDs to associate a sale to a specific label(s) within ConnexPay Bridge UI for your organization. If a sale is tied to an incorrect Label, it will not filter or display correctly in Bridge\\\'s Search Grid. Please contact your Customer Care Consultant for a list of valid Label IDs before use.

##### BrowserData: [`SaleCreateTransactionRequestBrowserData`](./models/sale-create-transaction-request-browser-data.ts)<a id="browserdata-salecreatetransactionrequestbrowserdatamodelssale-create-transaction-request-browser-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SaleCreateTransactionResponse](./models/sale-create-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/sales` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.sale.getChargebacksByUser`<a id="connexpaysalegetchargebacksbyuser"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChargebacksByUserResponse = await connexpay.sale.getChargebacksByUser({
  GetByUserstartDate20161201: "GetByUserstartDate20161201_example",
  GetByUserstartDate20161201endDate20161201:
    "GetByUserstartDate20161201endDate20161201_example",
  GetByResolvedDatestartDate20190920endDate20191021:
    "GetByResolvedDatestartDate20190920endDate20191021_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### GetByUserstartDate20161201: `string`<a id="getbyuserstartdate20161201-string"></a>

Return all chargebacks for the authenticated user with a start date

##### GetByUserstartDate20161201endDate20161201: `string`<a id="getbyuserstartdate20161201enddate20161201-string"></a>

Return all chargebacks for the authenticated user with a start and end date

##### GetByResolvedDatestartDate20190920endDate20191021: `string`<a id="getbyresolveddatestartdate20190920enddate20191021-string"></a>

Return all chargebacks for the authenticated user with a start and end date based on resolved date

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/chargeback/GetByUser` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.sale.searchSales`<a id="connexpaysalesearchsales"></a>

This endpoint searches sales.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchSalesResponse = await connexpay.sale.searchSales({
  exportable: "Mandatory",
  pageNumber: 1,
  pageSize: "Optional",
  MerchantGuid: "Mandatory",
  CardHolderName: "Optional",
  CardLastFour: "Optional",
  CardType: "Optional",
  OrderNumber: "Optional",
  OrderDateFrom: "Optional",
  OrderDateTo: "Optional",
  TimeStampFrom: "Optional",
  TimeStampTo: "Optional",
  Status: "Optional",
  MerchantCustomerId: "Optional",
  Activated: false,
  ActivationDateFrom: "Optional",
  ActivationDateTo: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportable: `string`<a id="exportable-string"></a>

True or False. It means if you want results exportable to CSV.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Int. Number of page of the results. Default is 1 (Page size default is 500).

##### pageSize: `string`<a id="pagesize-string"></a>

Int. Size of each page of the results. Default is 500.

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant’s Guid.

##### AmountFrom: `number`<a id="amountfrom-number"></a>

Amount of the transaction. Min. amt.: $0.50

##### AmountTo: `number`<a id="amountto-number"></a>

Amount of the transaction. Min. amt.: $0.50

##### CardHolderName: `string`<a id="cardholdername-string"></a>

Cardholder’s name.

##### CardLastFour: `string`<a id="cardlastfour-string"></a>

Card last four number.

##### CardType: `string`<a id="cardtype-string"></a>

Card type.

##### InvoiceNumber: `number`<a id="invoicenumber-number"></a>

Sale’s InvoiceNumber.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

Sale’s order number. Length = 17.

##### OrderDateFrom: `string`<a id="orderdatefrom-string"></a>

Sale’s order Date.

##### OrderDateTo: `string`<a id="orderdateto-string"></a>

Sale’s order Date.

##### TimeStampFrom: `string`<a id="timestampfrom-string"></a>

Sale’s TimeStamp.

##### TimeStampTo: `string`<a id="timestampto-string"></a>

Sale’s TimeStamp.

##### Status: `string`<a id="status-string"></a>

Sale’s status. Allowed values:  1. Transaction - Approved 2. Transaction - Declined 3. Transaction - Created - Local 4. Transaction - Created - Error: Processor not reached 5. Transaction - Processor Error 6. Transaction - Approved - Warning

##### MerchantCustomerId: `string`<a id="merchantcustomerid-string"></a>

Merchant Customer Id.

##### Activated: `boolean`<a id="activated-boolean"></a>

Delayed Activation Sales to be included or not

##### ActivationDateFrom: `string`<a id="activationdatefrom-string"></a>

Activation Start Date. This field is applicable only when Activated flag is set to true.

##### ActivationDateTo: `string`<a id="activationdateto-string"></a>

Activation End Date. This field is applicable only when Activated flag is set to true.

#### 🔄 Return<a id="🔄-return"></a>

[SaleSearchSalesResponse](./models/sale-search-sales-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/Sales/{exportable}/{pageNumber}/{pageSize}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.sale.updateDelayedActivation`<a id="connexpaysaleupdatedelayedactivation"></a>

Updates the sale amount or activation date on a delayed activation sale.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDelayedActivationResponse =
  await connexpay.sale.updateDelayedActivation({
    DeviceGuid: "DeviceGuid_example",
    SaleGuid: "SaleGuid_example",
    Amount: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay.

##### SaleGuid: `string`<a id="saleguid-string"></a>

Sales\\\'s Guid that was provided by ConnexPay upon initial creation of the delayed activation sale.

##### Amount: `number`<a id="amount-number"></a>

Amount of the transaction that will be processed. Note: this value is submitted multiple times (in different formats) within the integration to support different purposes i.e. risk analysis, merchant processing, etc.  The minimun amount is: $0.50.

##### ActivationDate: `string`<a id="activationdate-string"></a>

Set a future date on which to run this sale, at least one day from creation date and within 600 days.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/sales/UpdateFutureSale` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.setting.tokenizeBankAccountInfo`<a id="connexpaysettingtokenizebankaccountinfo"></a>

This endpoint allows you to create and tokenize a suppliers bank account information without actually making the Issue ACH call. That tokenized bank account can then be used in future Issue ACH or Issue ACH Lite API requests so you don't have to store the actual bank account information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tokenizeBankAccountInfoResponse =
  await connexpay.setting.tokenizeBankAccountInfo({
    MerchantGuid: "MerchantGuid_example",
    SupplierName: "SupplierName_example",
    AccountHolder: {
      BusinessName: "Default",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates the ACH payment is being requested for clients account. Value provided by ConnexPay.

##### SupplierName: `string`<a id="suppliername-string"></a>

Name of supplier to whom payment will be made

##### AccountHolder: [`SettingTokenizeBankAccountInfoRequestAccountHolder`](./models/setting-tokenize-bank-account-info-request-account-holder.ts)<a id="accountholder-settingtokenizebankaccountinforequestaccountholdermodelssetting-tokenize-bank-account-info-request-account-holderts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SettingTokenizeBankAccountInfoResponse](./models/setting-tokenize-bank-account-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/merchantsupplier/settings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.settlement.searchVirtualCardSettlements`<a id="connexpaysettlementsearchvirtualcardsettlements"></a>

This endpoint searches for Virtual Card Settlements.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVirtualCardSettlementsResponse =
  await connexpay.settlement.searchVirtualCardSettlements({
    pageNumber: 1,
    pageSize: 1,
    MerchantGuid: "MerchantGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s Guid.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Number of pages of results to return. Default is 1.

##### pageSize: `number`<a id="pagesize-number"></a>

Size of each page of results. Default is 1000.

##### DateFrom: `string`<a id="datefrom-string"></a>

Card\\\'s Issued Date.

##### DateTo: `string`<a id="dateto-string"></a>

Card\\\'s Issued Date.

##### PostedDateFrom: `string`<a id="posteddatefrom-string"></a>

Card settlement post date.

##### PostedDateTo: `string`<a id="posteddateto-string"></a>

Card settlement post date.

##### OrderNumber: `string`<a id="ordernumber-string"></a>

Order Number. Max. Length = 50.

##### IssuedAmountFrom: `number`<a id="issuedamountfrom-number"></a>

Issued Amount of the Card.

##### IssuedAmountTo: `number`<a id="issuedamountto-number"></a>

Issued Amount of the Card.

##### IssuedCardLastFour: `string`<a id="issuedcardlastfour-string"></a>

Card last four number.

##### PostedAmountFrom: `number`<a id="postedamountfrom-number"></a>

Posted Amount of the Card.

##### PostedAmountTo: `number`<a id="postedamountto-number"></a>

Posted Amount of the Card.

##### ExpirationDateFrom: `string`<a id="expirationdatefrom-string"></a>

Card\\\'s expiration date.

##### ExpirationDateTo: `string`<a id="expirationdateto-string"></a>

Card\\\'s expiration date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/Settlements` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.statusGroup._3dsAuthenticationStatus`<a id="connexpaystatusgroup_3dsauthenticationstatus"></a>

This endpoint returns the 3D Secure status of an authentication when a device fingerprint and/or cardholder challenge are required for 3D Secure Authentication.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const _3dsAuthenticationStatusResponse =
  await connexpay.statusGroup._3dsAuthenticationStatus({
    guid: "guid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

Replace the original guid value with the guid that was returned with the status response indicating a device fingerprint or cardholder challenge is required to complete 3DS authentication..

#### 🔄 Return<a id="🔄-return"></a>

[StatusGroup3DsAuthenticationStatusResponse](./models/status-group3-ds-authentication-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/3ds/{GUID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.token.generateReportingToken`<a id="connexpaytokengeneratereportingtoken"></a>

Reporting API requests require a combination of assigned Bridge user name, Bridge password, and a successfully generated authentication token. The Bridge credentials used are assigned separately from the Purchase and Sales API credentials. The received token for Reporting is valid for 60 minutes from issuance and may be used for all requests during its lifespan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportingTokenResponse =
  await connexpay.token.generateReportingToken({
    UserName: "UserName_example",
    Password: "Password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### UserName: `string`<a id="username-string"></a>

Assigned username for CXP Bridge

##### Password: `string`<a id="password-string"></a>

Assigned password for CXP Bridge

#### 🔄 Return<a id="🔄-return"></a>

[TokenGenerateReportingTokenResponse](./models/token-generate-reporting-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/authenticate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.token.issueAuthenticationToken`<a id="connexpaytokenissueauthenticationtoken"></a>

API requests require a combination of assigned user name, password, and successfully generated authentication token. The received token is valid for 24 hours from issuance and may be used for all requests during its lifespan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const issueAuthenticationTokenResponse =
  await connexpay.token.issueAuthenticationToken({
    grant_type: "password",
    username: "username_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grant_type: `string`<a id="grant_type-string"></a>

##### username: `string`<a id="username-string"></a>

CXP provided username

##### password: `string`<a id="password-string"></a>

CXP provided password

#### 🔄 Return<a id="🔄-return"></a>

[TokenIssueAuthenticationTokenResponse](./models/token-issue-authentication-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.token.requestHppToken`<a id="connexpaytokenrequesthpptoken"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestHppTokenResponse = await connexpay.token.requestHppToken({
  MerchantName: "MerchantName_example",
  TenderTypeOptions: ["Credit"],
  Expiration: "Current DateTime UTC",
  Sale: {
    DeviceGuid: "DeviceGuid_example",
    Amount: 1,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantName: `string`<a id="merchantname-string"></a>

Merchant Name. ConnexPay displays this on the Hosted Payment Page. The max length is 100 characters.

##### Sale: [`TokenRequestHppTokenRequestSale`](./models/token-request-hpp-token-request-sale.ts)<a id="sale-tokenrequesthpptokenrequestsalemodelstoken-request-hpp-token-request-salets"></a>

##### Description: `string`<a id="description-string"></a>

Additional information ConnexPay can display in the Hosted Payment Page. The max length is 2048 characters.

##### ResultRedirectUrl: `string`<a id="resultredirecturl-string"></a>

This is a ConnexPay CLIENT server route ConnexPay uses to (re)direct the consumer payment result back to our client upon payment success, failure or cancel. If this data is not set, then it will use the default one from ConnexPay.

##### LogoUrl: `string`<a id="logourl-string"></a>

ConnexPay can display this instead of “MerchantName” in the payment dialog.

##### TenderTypeOptions: `string`[]<a id="tendertypeoptions-string"></a>

Payment types you wish to make available to your consumer when they enter payment information into the Hosted Payment Page. Options are \\\"ACH\\\", \\\"Credit\\\", \\\"GooglePay\\\"/

##### Expiration: `string`<a id="expiration-string"></a>

Client can request a specific expiration date to identify when the HPP Link will expire. Timestamps will be converted to UTC for consistency within the ConnexPay environment.

#### 🔄 Return<a id="🔄-return"></a>

[TokenRequestHppTokenResponse](./models/token-request-hpp-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/HostedPaymentPageRequests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.transaction.captureAuthorization`<a id="connexpaytransactioncaptureauthorization"></a>

Call this endpoint to Capture an Authorization so that it settles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const captureAuthorizationResponse =
  await connexpay.transaction.captureAuthorization({
    DeviceGuid: "DeviceGuid_example",
    AuthOnlyGuid: "AuthOnlyGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay.

##### AuthOnlyGuid: `string`<a id="authonlyguid-string"></a>

Guid received from the AuthOnly operation.

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

##### ConnexPayTransaction: [`TransactionCaptureAuthorizationRequestConnexPayTransaction`](./models/transaction-capture-authorization-request-connex-pay-transaction.ts)<a id="connexpaytransaction-transactioncaptureauthorizationrequestconnexpaytransactionmodelstransaction-capture-authorization-request-connex-pay-transactionts"></a>

##### OrderNumber: `string`<a id="ordernumber-string"></a>

This is the most common number you\\\'ll see throughout the ConnexPay Portal. Transaction ID within client environment associated with the order. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple instances of the integration for multiple purposes. Customers in the travel space often send the Record Locator/PNR in this field. The maximum length is 50 alpha-numeric characters and allows dashes ( - ). If you provided an order number in the AUTH request it will be overwritten with the order number in the CAPTURE endpoint.

##### CustomerID: `string`<a id="customerid-string"></a>

Transaction ID within client environment associated with the customer. This value acts as a secondary identifier in conjunction with OrderNumber. The value is searchable and reportable in the ConnexPay portal. This value may be sent in multiple times within the integration for multiple purposes. The maximum length is 100 characters and is alpha-numeric.

##### AssociationID: `string`<a id="associationid-string"></a>

Utilize the Association ID field to tie a virtual card to a sale or sales. For example, if you have several sales and one virtual card payment to a supplier, you can add association ID to the sales and the virtual card for downstream reporting.

##### CustomParameters: [`SaleCreateTransactionRequestCustomParametersInner`](./models/sale-create-transaction-request-custom-parameters-inner.ts)[]<a id="customparameters-salecreatetransactionrequestcustomparametersinnermodelssale-create-transaction-request-custom-parameters-innerts"></a>

You can add custom parameters to your sale request in the event that you need to associate additional information with the pay-in. For example, if you want to add an invoice number you would include the custom parameters object with the name parameter = \\\"invoice\\\" and the value parameter as the invoice number. This requires customized reporting so you\\\'ll need to work with your implementations specialist to determine what\\\'s required.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionCaptureAuthorizationResponse](./models/transaction-capture-authorization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Captures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.transaction.createAchCreditPayment`<a id="connexpaytransactioncreateachcreditpayment"></a>

This endpoint creates an ACH Credit payment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAchCreditPaymentResponse =
  await connexpay.transaction.createAchCreditPayment({
    MerchantGuid: "MerchantGuid_example",
    Amount: 3.14,
    PayeeName: "PayeeName_example",
    StatementCompanyName: "Merchant Alias",
    IncomingTransactionCode: "IncomingTransactionCode_example",
    AccountHolder: {
      BusinessName: "Default",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant\\\'s guid. Application level value that indicates the ACH payment is being requested for clients account. Value provided by ConnexPay.

##### Amount: `number`<a id="amount-number"></a>

Payment amount. Minimum amount > 0.5.

##### PayeeName: `string`<a id="payeename-string"></a>

Payee name up to 100 characters.

##### IncomingTransactionCode: `string`<a id="incomingtransactioncode-string"></a>

ITC for short Application level setting to associate the ACH payment request with an original sale or sale group. The value is provided in the sale response of the original sale transaction, or in the Group Sale response of the group sale. All ACH payment requests must be associated with an original sale or group transaction.

##### AccountHolder: [`TransactionCreateAchCreditPaymentRequestAccountHolder`](./models/transaction-create-ach-credit-payment-request-account-holder.ts)<a id="accountholder-transactioncreateachcreditpaymentrequestaccountholdermodelstransaction-create-ach-credit-payment-request-account-holderts"></a>

##### StatementCompanyName: `string`<a id="statementcompanyname-string"></a>

Company Name to display Bank Statement. The first 16 characters will display on the bank account holders statement.

##### Description: `string`<a id="description-string"></a>

For banks who accept statement descriptors, the first 10 characters will display on the bank account holders statement.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionCreateAchCreditPaymentResponse](./models/transaction-create-ach-credit-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/IssueACH` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.transaction.searchVirtualCardHistory`<a id="connexpaytransactionsearchvirtualcardhistory"></a>

This API allows you to pull back history of the Virtual Card. This is the same API (and data) that is used when clicking the “Transactions” button on the Virtual Card in the Portal to display the transaction history. The API will return the merchant name where the Virtual Card was used, the date and time, transaction type (auth, settlement, refund, void, etc.), the response/memo which correlates to the transaction type and the amount.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVirtualCardHistoryResponse =
  await connexpay.transaction.searchVirtualCardHistory({
    cardGuid: "cardGuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardGuid: `string`<a id="cardguid-string"></a>

Global Unique Identifier for the Card. Required parameter.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionSearchVirtualCardHistoryResponse](./models/transaction-search-virtual-card-history-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Cards/Transactions/{cardGuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.validation.searchVerifyOperation`<a id="connexpayvalidationsearchverifyoperation"></a>

This endpoint search a verify.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVerifyOperationResponse =
  await connexpay.validation.searchVerifyOperation({
    exportable: "Mandatory",
    pageNumber: 1,
    pageSize: "Optional",
    MerchantGuid: "Mandatory",
    CardLastFour: "Optional",
    CardHolderName: "Optional",
    CardType: "Optional",
    TimeStampFrom: "Optional",
    TimeStampTo: "Optional",
    Status: "Optional",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportable: `string`<a id="exportable-string"></a>

True or False. It means if you want results exportable to CSV.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Int. Number of page of the results. Default is 1 (Page size default is 500).

##### pageSize: `string`<a id="pagesize-string"></a>

Int. Size of each page of the results. Default is 500.

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant’s Guid.

##### CardLastFour: `string`<a id="cardlastfour-string"></a>

Card last four number.

##### CardHolderName: `string`<a id="cardholdername-string"></a>

Cardholder’s name. Providing information in this field allows a user of the ConnexPay portal to search for a transaction using the cardholder name.

##### CardType: `string`<a id="cardtype-string"></a>

Card Type.

##### TimeStampFrom: `string`<a id="timestampfrom-string"></a>

Verify’s TimeStamp From.

##### TimeStampTo: `string`<a id="timestampto-string"></a>

Verify’s TimeStamp To.

##### Status: `string`<a id="status-string"></a>

Verify’s status.  Allowed values:  1. Transaction - Approved 2. Transaction - Declined 3. Transaction - Created - Local 4. Transaction - Created - Error: Processor not reached 5. Transaction - Processor Error 6. Transaction - Approved - Warning

#### 🔄 Return<a id="🔄-return"></a>

[ValidationSearchVerifyOperationResponse](./models/validation-search-verify-operation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/Verify/{exportable}/{pageNumber}/{pageSize}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.verification.cardBankAccount`<a id="connexpayverificationcardbankaccount"></a>

Call to Verify Card or Bank Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cardBankAccountResponse = await connexpay.verification.cardBankAccount({
  DeviceGuid: "{{Device}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device\\\'s Guid provided by ConnexPay.

##### Card: [`VerificationCardBankAccountRequestCard`](./models/verification-card-bank-account-request-card.ts)<a id="card-verificationcardbankaccountrequestcardmodelsverification-card-bank-account-request-cardts"></a>

##### BankAccount: [`VerificationCardBankAccountRequestBankAccount`](./models/verification-card-bank-account-request-bank-account.ts)<a id="bankaccount-verificationcardbankaccountrequestbankaccountmodelsverification-card-bank-account-request-bank-accountts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[VerificationCardBankAccountResponse](./models/verification-card-bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.void.createVoid`<a id="connexpayvoidcreatevoid"></a>

This endpoint creates a void.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVoidResponse = await connexpay.void.createVoid({
  DeviceGuid: "DeviceGuid_example",
  SaleGuid:
    "Conditional Mandatory when SaleReferenceNumber, AuthOnlyGuid and ReturnGuid parameters are not present",
  ReturnGuid:
    "Conditional Mandatory when SaleGuid, AuthOnlyGuid and SaleReferenceNumber parameters are not present",
  AuthOnlyGuid:
    "Conditional Mandatory when SaleGuid, SaleReferenceNumber and ReturnGuid parameters are not present",
  VoidReason: "Optional",
  SequenceNumber: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DeviceGuid: `string`<a id="deviceguid-string"></a>

Device’s Guid provided by ConnexPay.

##### SaleGuid: `string`<a id="saleguid-string"></a>

Sale Transaction Guid

##### ReturnGuid: `string`<a id="returnguid-string"></a>

Return\\\'s Guid

##### SaleReferenceNumber: `number`<a id="salereferencenumber-number"></a>

Sale Reference Number

##### AuthOnlyGuid: `string`<a id="authonlyguid-string"></a>

Guid to include in request when voiding an Auth Only request.

##### VoidReason: `string`<a id="voidreason-string"></a>

Indicates the reason the transaction was voided.  Allowed values:  1. POST_AUTH_USER_DECLINE 2. DEVICE_TIMEOUT 3. DEVICE_UNAVAILABLE 4. PARTIAL_REVERSAL 5. TORN_TRANSACTIONS 6. POST_AUTH_CHIP_DECLINE

##### Amount: `number`<a id="amount-number"></a>

Amount to be voided.  Note: Amount is be used once only for credit card Sales and should not exceed corresponding Sale’s Amount.

##### SequenceNumber: `string`<a id="sequencenumber-string"></a>

Transaction sequence number within client environment. Provide a unique SequenceNumber for each new request. If the same value is sent within 30 minutes it will be considered a duplicate request. Note: value is not searchable or reportable in ConnexPay portal.  Alphanumeric.

#### 🔄 Return<a id="🔄-return"></a>

[VoidCreateVoidResponse](./models/void-create-void-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/void` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `connexpay.void.searchVoids`<a id="connexpayvoidsearchvoids"></a>

This endpoint searches sales voids.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVoidsResponse = await connexpay.void.searchVoids({
  exportable: "Mandatory",
  pageNumber: 1,
  pageSize: "Optional",
  MerchantGuid: "Mandatory",
  VoidReason: "Optional",
  Status: "Optional",
  TimeStampFrom: "Optional",
  TimeStampTo: "Optional",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportable: `string`<a id="exportable-string"></a>

True or False. It means if you want results exportable to CSV.

##### pageNumber: `number`<a id="pagenumber-number"></a>

Int. Number of page of the results. Default is 1 (Page size default is 500).

##### pageSize: `string`<a id="pagesize-string"></a>

Int. Size of each page of the results. Default is 500.

##### MerchantGuid: `string`<a id="merchantguid-string"></a>

Merchant’s Guid.

##### VoidReason: `string`<a id="voidreason-string"></a>

Indicates the reason the transaction was voided.  Allowed values:  1. POST_AUTH_USER_DECLINE 2. DEVICE_TIMEOUT 3. DEVICE_UNAVAILABLE 4. PARTIAL_REVERSAL 5. TORN_TRANSACTIONS 6. POST_AUTH_CHIP_DECLINE

##### Status: `string`<a id="status-string"></a>

Void’s status.  Allowed values:  1. Transaction - Approved 2. Transaction - Declined 3. Transaction - Created - Local 4. Transaction - Created - Error: Processor not reached 5. Transaction - Processor Error 6. Transaction - Approved - Warning

##### TimeStampFrom: `string`<a id="timestampfrom-string"></a>

Void’s TimeStamp.

##### TimeStampTo: `string`<a id="timestampto-string"></a>

Void’s TimeStamp.

#### 🔄 Return<a id="🔄-return"></a>

[VoidSearchVoidsResponse](./models/void-search-voids-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v1/Search/Voids/{exportable}/{pageNumber}/{pageSize}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
