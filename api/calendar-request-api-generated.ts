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
import { CalendarRequestGetDetailById400Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CalendarRequestApi - axios parameter creator
 * @export
 */
export const CalendarRequestApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Calendar request detail
         * @param {number} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailById: async (requestId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestId' is not null or undefined
            assertParamExists('getDetailById', 'requestId', requestId)
            const localVarPath = `/1.0/calendar/requests/{request_id}/detail`
                .replace(`{${"request_id"}}`, encodeURIComponent(String(requestId !== undefined ? requestId : `-request_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/calendar/requests/{request_id}/detail',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List calendar requests
         * @param {string} [page] 
         * @param {string} [status] Can be either \&quot;all\&quot;, \&quot;pending\&quot; or \&quot;closed\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRequests: async (page?: string, status?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/calendar/requests/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/calendar/requests/list',
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
 * CalendarRequestApi - functional programming interface
 * @export
 */
export const CalendarRequestApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CalendarRequestApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Calendar request detail
         * @param {CalendarRequestApiGetDetailByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetailById(requestParameters: CalendarRequestApiGetDetailByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetailById(requestParameters.requestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List calendar requests
         * @param {CalendarRequestApiListRequestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRequests(requestParameters: CalendarRequestApiListRequestsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRequests(requestParameters.page, requestParameters.status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CalendarRequestApi - factory interface
 * @export
 */
export const CalendarRequestApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CalendarRequestApiFp(configuration)
    return {
        /**
         * 
         * @summary Calendar request detail
         * @param {CalendarRequestApiGetDetailByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailById(requestParameters: CalendarRequestApiGetDetailByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getDetailById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List calendar requests
         * @param {CalendarRequestApiListRequestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRequests(requestParameters: CalendarRequestApiListRequestsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.listRequests(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDetailById operation in CalendarRequestApi.
 * @export
 * @interface CalendarRequestApiGetDetailByIdRequest
 */
export type CalendarRequestApiGetDetailByIdRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CalendarRequestApiGetDetailById
    */
    readonly requestId: number
    
}

/**
 * Request parameters for listRequests operation in CalendarRequestApi.
 * @export
 * @interface CalendarRequestApiListRequestsRequest
 */
export type CalendarRequestApiListRequestsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CalendarRequestApiListRequests
    */
    readonly page?: string
    
    /**
    * Can be either \"all\", \"pending\" or \"closed\"
    * @type {string}
    * @memberof CalendarRequestApiListRequests
    */
    readonly status?: string
    
}

/**
 * CalendarRequestApiGenerated - object-oriented interface
 * @export
 * @class CalendarRequestApiGenerated
 * @extends {BaseAPI}
 */
export class CalendarRequestApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Calendar request detail
     * @param {CalendarRequestApiGetDetailByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarRequestApiGenerated
     */
    public getDetailById(requestParameters: CalendarRequestApiGetDetailByIdRequest, options?: AxiosRequestConfig) {
        return CalendarRequestApiFp(this.configuration).getDetailById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List calendar requests
     * @param {CalendarRequestApiListRequestsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarRequestApiGenerated
     */
    public listRequests(requestParameters: CalendarRequestApiListRequestsRequest = {}, options?: AxiosRequestConfig) {
        return CalendarRequestApiFp(this.configuration).listRequests(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
