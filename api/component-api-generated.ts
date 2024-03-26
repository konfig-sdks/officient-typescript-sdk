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
import { ComponentGrantOneOffWageResponse } from '../models';
// @ts-ignore
import { ComponentRemoveOneOffWageResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ComponentApi - axios parameter creator
 * @export
 */
export const ComponentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Grants a one-off wage components for a specific person, in a specific month
         * @summary Grant one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        grantOneOffWage: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/wages/one_off/components/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/wages/one_off/components/add',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a one-off wage component for a specific person in a specific month, by id
         * @summary Remove one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeOneOffWage: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/wages/one_off/components/{granted_component_id}`;
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
                pathTemplate: '/1.0/wages/one_off/components/{granted_component_id}',
                httpMethod: 'DELETE'
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
 * ComponentApi - functional programming interface
 * @export
 */
export const ComponentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ComponentApiAxiosParamCreator(configuration)
    return {
        /**
         * Grants a one-off wage components for a specific person, in a specific month
         * @summary Grant one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async grantOneOffWage(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComponentGrantOneOffWageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.grantOneOffWage(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes a one-off wage component for a specific person in a specific month, by id
         * @summary Remove one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeOneOffWage(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComponentRemoveOneOffWageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeOneOffWage(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ComponentApi - factory interface
 * @export
 */
export const ComponentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ComponentApiFp(configuration)
    return {
        /**
         * Grants a one-off wage components for a specific person, in a specific month
         * @summary Grant one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        grantOneOffWage(options?: AxiosRequestConfig): AxiosPromise<ComponentGrantOneOffWageResponse> {
            return localVarFp.grantOneOffWage(options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a one-off wage component for a specific person in a specific month, by id
         * @summary Remove one-off wage component
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeOneOffWage(options?: AxiosRequestConfig): AxiosPromise<ComponentRemoveOneOffWageResponse> {
            return localVarFp.removeOneOffWage(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ComponentApiGenerated - object-oriented interface
 * @export
 * @class ComponentApiGenerated
 * @extends {BaseAPI}
 */
export class ComponentApiGenerated extends BaseAPI {
    /**
     * Grants a one-off wage components for a specific person, in a specific month
     * @summary Grant one-off wage component
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComponentApiGenerated
     */
    public grantOneOffWage(options?: AxiosRequestConfig) {
        return ComponentApiFp(this.configuration).grantOneOffWage(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a one-off wage component for a specific person in a specific month, by id
     * @summary Remove one-off wage component
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComponentApiGenerated
     */
    public removeOneOffWage(options?: AxiosRequestConfig) {
        return ComponentApiFp(this.configuration).removeOneOffWage(options).then((request) => request(this.axios, this.basePath));
    }
}
