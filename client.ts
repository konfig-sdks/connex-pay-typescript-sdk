/*
ConnexPay Reporting API

REST API for retrieving reporting data. Currently Daily Accounting data only.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  ACHApi,
  AccountingApi,
  AddendumApi,
  AuthenticationApi,
  CancellationApi,
  CardApi,
  CardIssuanceApi,
  CardIssueApi,
  FundingApi,
  FundsApi,
  MerchantPayeesApi,
  PushToCardApi,
  ReplayApi,
  ReturnApi,
  SaleApi,
  SettingApi,
  SettlementApi,
  StatusGroupApi,
  TokenApi,
  TransactionApi,
  ValidationApi,
  VerificationApi,
  VoidApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { ConnexPayCustom } from "./client-custom";

export class ConnexPay extends ConnexPayCustom {
  readonly aCH: ACHApi;
  readonly accounting: AccountingApi;
  readonly addendum: AddendumApi;
  readonly authentication: AuthenticationApi;
  readonly cancellation: CancellationApi;
  readonly card: CardApi;
  readonly cardIssuance: CardIssuanceApi;
  readonly cardIssue: CardIssueApi;
  readonly funding: FundingApi;
  readonly funds: FundsApi;
  readonly merchantPayees: MerchantPayeesApi;
  readonly pushToCard: PushToCardApi;
  readonly replay: ReplayApi;
  readonly return: ReturnApi;
  readonly sale: SaleApi;
  readonly setting: SettingApi;
  readonly settlement: SettlementApi;
  readonly statusGroup: StatusGroupApi;
  readonly token: TokenApi;
  readonly transaction: TransactionApi;
  readonly validation: ValidationApi;
  readonly verification: VerificationApi;
  readonly void: VoidApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.aCH = new ACHApi(configuration);
    this.accounting = new AccountingApi(configuration);
    this.addendum = new AddendumApi(configuration);
    this.authentication = new AuthenticationApi(configuration);
    this.cancellation = new CancellationApi(configuration);
    this.card = new CardApi(configuration);
    this.cardIssuance = new CardIssuanceApi(configuration);
    this.cardIssue = new CardIssueApi(configuration);
    this.funding = new FundingApi(configuration);
    this.funds = new FundsApi(configuration);
    this.merchantPayees = new MerchantPayeesApi(configuration);
    this.pushToCard = new PushToCardApi(configuration);
    this.replay = new ReplayApi(configuration);
    this.return = new ReturnApi(configuration);
    this.sale = new SaleApi(configuration);
    this.setting = new SettingApi(configuration);
    this.settlement = new SettlementApi(configuration);
    this.statusGroup = new StatusGroupApi(configuration);
    this.token = new TokenApi(configuration);
    this.transaction = new TransactionApi(configuration);
    this.validation = new ValidationApi(configuration);
    this.verification = new VerificationApi(configuration);
    this.void = new VoidApi(configuration);
  }

}
