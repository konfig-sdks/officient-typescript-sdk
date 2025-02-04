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
import { ContractCreateNewContract400Response } from '../models';
// @ts-ignore
import { ContractCreateNewContractResponse } from '../models';
// @ts-ignore
import { ContractGetAllResponse } from '../models';
// @ts-ignore
import { ContractGetPdfLinkResponse } from '../models';
// @ts-ignore
import { ContractRequestSignature400Response } from '../models';
// @ts-ignore
import { ContractRequestSignatureResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ContractApi - axios parameter creator
 * @export
 */
export const ContractApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewContract: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/contracts/add`;
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
                pathTemplate: '/1.0/contracts/add',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all contracts
         * @summary List contracts
         * @param {number} page Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAll', 'page', page)
            const localVarPath = `/1.0/contracts/list`;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/1.0/contracts/list',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details about one contract
         * @summary Contract detail
         * @param {number} contractId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetail: async (contractId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractId' is not null or undefined
            assertParamExists('getDetail', 'contractId', contractId)
            const localVarPath = `/1.0/contracts/{contract_id}/detail`
                .replace(`{${"contract_id"}}`, encodeURIComponent(String(contractId !== undefined ? contractId : `-contract_id-`)));
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
                pathTemplate: '/1.0/contracts/{contract_id}/detail',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a PDF download link for any contract
         * @summary Contract PDF
         * @param {number} contractId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPdfLink: async (contractId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractId' is not null or undefined
            assertParamExists('getPdfLink', 'contractId', contractId)
            const localVarPath = `/1.0/contracts/{contract_id}/pdf`
                .replace(`{${"contract_id"}}`, encodeURIComponent(String(contractId !== undefined ? contractId : `-contract_id-`)));
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
                pathTemplate: '/1.0/contracts/{contract_id}/pdf',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API sends out an email invite requesting to sign a contract
         * @summary Request contract signature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestSignature: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/1.0/contracts/signature/request`;
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
                pathTemplate: '/1.0/contracts/signature/request',
                httpMethod: 'POST'
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
 * ContractApi - functional programming interface
 * @export
 */
export const ContractApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContractApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewContract(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContractCreateNewContractResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewContract(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all contracts
         * @summary List contracts
         * @param {ContractApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: ContractApiGetAllRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContractGetAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get details about one contract
         * @summary Contract detail
         * @param {ContractApiGetDetailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetail(requestParameters: ContractApiGetDetailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetail(requestParameters.contractId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a PDF download link for any contract
         * @summary Contract PDF
         * @param {ContractApiGetPdfLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPdfLink(requestParameters: ContractApiGetPdfLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContractGetPdfLinkResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPdfLink(requestParameters.contractId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This API sends out an email invite requesting to sign a contract
         * @summary Request contract signature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestSignature(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContractRequestSignatureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestSignature(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContractApi - factory interface
 * @export
 */
export const ContractApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContractApiFp(configuration)
    return {
        /**
         * 
         * @summary Add contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewContract(options?: AxiosRequestConfig): AxiosPromise<ContractCreateNewContractResponse> {
            return localVarFp.createNewContract(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all contracts
         * @summary List contracts
         * @param {ContractApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: ContractApiGetAllRequest, options?: AxiosRequestConfig): AxiosPromise<ContractGetAllResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details about one contract
         * @summary Contract detail
         * @param {ContractApiGetDetailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetail(requestParameters: ContractApiGetDetailRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getDetail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a PDF download link for any contract
         * @summary Contract PDF
         * @param {ContractApiGetPdfLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPdfLink(requestParameters: ContractApiGetPdfLinkRequest, options?: AxiosRequestConfig): AxiosPromise<ContractGetPdfLinkResponse> {
            return localVarFp.getPdfLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This API sends out an email invite requesting to sign a contract
         * @summary Request contract signature
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestSignature(options?: AxiosRequestConfig): AxiosPromise<ContractRequestSignatureResponse> {
            return localVarFp.requestSignature(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in ContractApi.
 * @export
 * @interface ContractApiGetAllRequest
 */
export type ContractApiGetAllRequest = {
    
    /**
    * Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.
    * @type {number}
    * @memberof ContractApiGetAll
    */
    readonly page: number
    
}

/**
 * Request parameters for getDetail operation in ContractApi.
 * @export
 * @interface ContractApiGetDetailRequest
 */
export type ContractApiGetDetailRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ContractApiGetDetail
    */
    readonly contractId: number
    
}

/**
 * Request parameters for getPdfLink operation in ContractApi.
 * @export
 * @interface ContractApiGetPdfLinkRequest
 */
export type ContractApiGetPdfLinkRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ContractApiGetPdfLink
    */
    readonly contractId: number
    
}

/**
 * ContractApiGenerated - object-oriented interface
 * @export
 * @class ContractApiGenerated
 * @extends {BaseAPI}
 */
export class ContractApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Add contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApiGenerated
     */
    public createNewContract(options?: AxiosRequestConfig) {
        return ContractApiFp(this.configuration).createNewContract(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all contracts
     * @summary List contracts
     * @param {ContractApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApiGenerated
     */
    public getAll(requestParameters: ContractApiGetAllRequest, options?: AxiosRequestConfig) {
        return ContractApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details about one contract
     * @summary Contract detail
     * @param {ContractApiGetDetailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApiGenerated
     */
    public getDetail(requestParameters: ContractApiGetDetailRequest, options?: AxiosRequestConfig) {
        return ContractApiFp(this.configuration).getDetail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a PDF download link for any contract
     * @summary Contract PDF
     * @param {ContractApiGetPdfLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApiGenerated
     */
    public getPdfLink(requestParameters: ContractApiGetPdfLinkRequest, options?: AxiosRequestConfig) {
        return ContractApiFp(this.configuration).getPdfLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API sends out an email invite requesting to sign a contract
     * @summary Request contract signature
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApiGenerated
     */
    public requestSignature(options?: AxiosRequestConfig) {
        return ContractApiFp(this.configuration).requestSignature(options).then((request) => request(this.axios, this.basePath));
    }
}
