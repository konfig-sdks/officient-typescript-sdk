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
import { FunctionGetAllFunctionsResponseInner } from '../models';
// @ts-ignore
import { FunctionGetDetails400Response } from '../models';
// @ts-ignore
import { FunctionGetDetailsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FunctionApi - axios parameter creator
 * @export
 */
export const FunctionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the details of all functions or that of a single one
         * @summary List functions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllFunctions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/wages/functions/list`;
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
                pathTemplate: '/1.0/wages/functions/list',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the details of all functions or that of a single one
         * @summary Function detail
         * @param {string} internalCode The internal code / GUID of the function you would like to receive information on
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (internalCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'internalCode' is not null or undefined
            assertParamExists('getDetails', 'internalCode', internalCode)
            const localVarPath = `/1.0/wages/functions/detail/{internal_code}`
                .replace(`{${"internal_code"}}`, encodeURIComponent(String(internalCode !== undefined ? internalCode : `-internal_code-`)));
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
                pathTemplate: '/1.0/wages/functions/detail/{internal_code}',
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
 * FunctionApi - functional programming interface
 * @export
 */
export const FunctionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FunctionApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the details of all functions or that of a single one
         * @summary List functions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllFunctions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FunctionGetAllFunctionsResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllFunctions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the details of all functions or that of a single one
         * @summary Function detail
         * @param {FunctionApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: FunctionApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FunctionGetDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.internalCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FunctionApi - factory interface
 * @export
 */
export const FunctionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FunctionApiFp(configuration)
    return {
        /**
         * Get the details of all functions or that of a single one
         * @summary List functions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllFunctions(options?: AxiosRequestConfig): AxiosPromise<Array<FunctionGetAllFunctionsResponseInner>> {
            return localVarFp.getAllFunctions(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the details of all functions or that of a single one
         * @summary Function detail
         * @param {FunctionApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: FunctionApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<FunctionGetDetailsResponse> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDetails operation in FunctionApi.
 * @export
 * @interface FunctionApiGetDetailsRequest
 */
export type FunctionApiGetDetailsRequest = {
    
    /**
    * The internal code / GUID of the function you would like to receive information on
    * @type {string}
    * @memberof FunctionApiGetDetails
    */
    readonly internalCode: string
    
}

/**
 * FunctionApiGenerated - object-oriented interface
 * @export
 * @class FunctionApiGenerated
 * @extends {BaseAPI}
 */
export class FunctionApiGenerated extends BaseAPI {
    /**
     * Get the details of all functions or that of a single one
     * @summary List functions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionApiGenerated
     */
    public getAllFunctions(options?: AxiosRequestConfig) {
        return FunctionApiFp(this.configuration).getAllFunctions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the details of all functions or that of a single one
     * @summary Function detail
     * @param {FunctionApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionApiGenerated
     */
    public getDetails(requestParameters: FunctionApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return FunctionApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
