/* tslint:disable */
/* eslint-disable */
/*
Officient API

Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it.

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.

The version of the OpenAPI document: 1.0


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
import { BudgetAddBudgetItemRequest } from '../models';
// @ts-ignore
import { BudgetAddBudgetItemResponse } from '../models';
// @ts-ignore
import { BudgetAddItemRequest } from '../models';
// @ts-ignore
import { BudgetAddItemResponse } from '../models';
// @ts-ignore
import { BudgetDeleteBudgetByIdResponse } from '../models';
// @ts-ignore
import { BudgetRemoveItemResponse } from '../models';
// @ts-ignore
import { BudgetUpdateBudgetItemRequest } from '../models';
// @ts-ignore
import { BudgetUpdateBudgetItemResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BudgetApi - axios parameter creator
 * @export
 */
export const BudgetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add budget
         * @param {BudgetAddBudgetItemRequest} [budgetAddBudgetItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBudgetItem: async (budgetAddBudgetItemRequest?: BudgetAddBudgetItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/budgets/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: budgetAddBudgetItemRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/budgets/add',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(budgetAddBudgetItemRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add budget item
         * @param {number} budgetId 
         * @param {BudgetAddItemRequest} [budgetAddItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addItem: async (budgetId: number, budgetAddItemRequest?: BudgetAddItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('addItem', 'budgetId', budgetId)
            const localVarPath = `/1.0/budgets/{budget_id}/items/add`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: budgetAddItemRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/budgets/{budget_id}/items/add',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(budgetAddItemRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete budget
         * @param {number} budgetId The id of the budget that will be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBudgetById: async (budgetId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('deleteBudgetById', 'budgetId', budgetId)
            const localVarPath = `/1.0/budgets/{budget_id}`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/budgets/{budget_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete budget item
         * @param {number} budgetId 
         * @param {number} [itemId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeItem: async (budgetId: number, itemId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('removeItem', 'budgetId', budgetId)
            const localVarPath = `/1.0/budgets/{budget_id}/items/{item_id}`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (itemId !== undefined) {
                localVarQueryParameter['item_id'] = itemId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/budgets/{budget_id}/items/{item_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Edit budget
         * @param {number} budgetId The id of the budget that will be edited.
         * @param {BudgetUpdateBudgetItemRequest} [budgetUpdateBudgetItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudgetItem: async (budgetId: number, budgetUpdateBudgetItemRequest?: BudgetUpdateBudgetItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'budgetId' is not null or undefined
            assertParamExists('updateBudgetItem', 'budgetId', budgetId)
            const localVarPath = `/1.0/budgets/{budget_id}`
                .replace(`{${"budget_id"}}`, encodeURIComponent(String(budgetId !== undefined ? budgetId : `-budget_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: budgetUpdateBudgetItemRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/budgets/{budget_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(budgetUpdateBudgetItemRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BudgetApi - functional programming interface
 * @export
 */
export const BudgetApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BudgetApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add budget
         * @param {BudgetApiAddBudgetItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addBudgetItem(requestParameters: BudgetApiAddBudgetItemRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetAddBudgetItemResponse>> {
            const budgetAddBudgetItemRequest: BudgetAddBudgetItemRequest = {
                budget_type: requestParameters.budget_type,
                maximum: requestParameters.maximum,
                year: requestParameters.year,
                employee_id: requestParameters.employee_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addBudgetItem(budgetAddBudgetItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Add budget item
         * @param {BudgetApiAddItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addItem(requestParameters: BudgetApiAddItemRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetAddItemResponse>> {
            const budgetAddItemRequest: BudgetAddItemRequest = {
                item_name: requestParameters.item_name,
                cost: requestParameters.cost,
                employee_id: requestParameters.employee_id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addItem(requestParameters.budgetId, budgetAddItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete budget
         * @param {BudgetApiDeleteBudgetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBudgetById(requestParameters: BudgetApiDeleteBudgetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetDeleteBudgetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBudgetById(requestParameters.budgetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete budget item
         * @param {BudgetApiRemoveItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeItem(requestParameters: BudgetApiRemoveItemRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetRemoveItemResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeItem(requestParameters.budgetId, requestParameters.itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Edit budget
         * @param {BudgetApiUpdateBudgetItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBudgetItem(requestParameters: BudgetApiUpdateBudgetItemRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BudgetUpdateBudgetItemResponse>> {
            const budgetUpdateBudgetItemRequest: BudgetUpdateBudgetItemRequest = {
                maximum: requestParameters.maximum
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBudgetItem(requestParameters.budgetId, budgetUpdateBudgetItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BudgetApi - factory interface
 * @export
 */
export const BudgetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BudgetApiFp(configuration)
    return {
        /**
         * 
         * @summary Add budget
         * @param {BudgetApiAddBudgetItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addBudgetItem(requestParameters: BudgetApiAddBudgetItemRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BudgetAddBudgetItemResponse> {
            return localVarFp.addBudgetItem(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add budget item
         * @param {BudgetApiAddItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addItem(requestParameters: BudgetApiAddItemRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetAddItemResponse> {
            return localVarFp.addItem(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete budget
         * @param {BudgetApiDeleteBudgetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBudgetById(requestParameters: BudgetApiDeleteBudgetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetDeleteBudgetByIdResponse> {
            return localVarFp.deleteBudgetById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete budget item
         * @param {BudgetApiRemoveItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeItem(requestParameters: BudgetApiRemoveItemRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetRemoveItemResponse> {
            return localVarFp.removeItem(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Edit budget
         * @param {BudgetApiUpdateBudgetItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudgetItem(requestParameters: BudgetApiUpdateBudgetItemRequest, options?: AxiosRequestConfig): AxiosPromise<BudgetUpdateBudgetItemResponse> {
            return localVarFp.updateBudgetItem(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addBudgetItem operation in BudgetApi.
 * @export
 * @interface BudgetApiAddBudgetItemRequest
 */
export type BudgetApiAddBudgetItemRequest = {
    
} & BudgetAddBudgetItemRequest

/**
 * Request parameters for addItem operation in BudgetApi.
 * @export
 * @interface BudgetApiAddItemRequest
 */
export type BudgetApiAddItemRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof BudgetApiAddItem
    */
    readonly budgetId: number
    
} & BudgetAddItemRequest

/**
 * Request parameters for deleteBudgetById operation in BudgetApi.
 * @export
 * @interface BudgetApiDeleteBudgetByIdRequest
 */
export type BudgetApiDeleteBudgetByIdRequest = {
    
    /**
    * The id of the budget that will be deleted
    * @type {number}
    * @memberof BudgetApiDeleteBudgetById
    */
    readonly budgetId: number
    
}

/**
 * Request parameters for removeItem operation in BudgetApi.
 * @export
 * @interface BudgetApiRemoveItemRequest
 */
export type BudgetApiRemoveItemRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof BudgetApiRemoveItem
    */
    readonly budgetId: number
    
    /**
    * 
    * @type {number}
    * @memberof BudgetApiRemoveItem
    */
    readonly itemId?: number
    
}

/**
 * Request parameters for updateBudgetItem operation in BudgetApi.
 * @export
 * @interface BudgetApiUpdateBudgetItemRequest
 */
export type BudgetApiUpdateBudgetItemRequest = {
    
    /**
    * The id of the budget that will be edited.
    * @type {number}
    * @memberof BudgetApiUpdateBudgetItem
    */
    readonly budgetId: number
    
} & BudgetUpdateBudgetItemRequest

/**
 * BudgetApiGenerated - object-oriented interface
 * @export
 * @class BudgetApiGenerated
 * @extends {BaseAPI}
 */
export class BudgetApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Add budget
     * @param {BudgetApiAddBudgetItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApiGenerated
     */
    public addBudgetItem(requestParameters: BudgetApiAddBudgetItemRequest = {}, options?: AxiosRequestConfig) {
        return BudgetApiFp(this.configuration).addBudgetItem(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add budget item
     * @param {BudgetApiAddItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApiGenerated
     */
    public addItem(requestParameters: BudgetApiAddItemRequest, options?: AxiosRequestConfig) {
        return BudgetApiFp(this.configuration).addItem(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete budget
     * @param {BudgetApiDeleteBudgetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApiGenerated
     */
    public deleteBudgetById(requestParameters: BudgetApiDeleteBudgetByIdRequest, options?: AxiosRequestConfig) {
        return BudgetApiFp(this.configuration).deleteBudgetById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete budget item
     * @param {BudgetApiRemoveItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApiGenerated
     */
    public removeItem(requestParameters: BudgetApiRemoveItemRequest, options?: AxiosRequestConfig) {
        return BudgetApiFp(this.configuration).removeItem(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Edit budget
     * @param {BudgetApiUpdateBudgetItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetApiGenerated
     */
    public updateBudgetItem(requestParameters: BudgetApiUpdateBudgetItemRequest, options?: AxiosRequestConfig) {
        return BudgetApiFp(this.configuration).updateBudgetItem(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
