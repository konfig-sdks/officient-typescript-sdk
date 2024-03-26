/*
Officient API

Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it.

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PersonGetWageHistoryResponseDataInnerCustomPayrollData } from './person-get-wage-history-response-data-inner-custom-payroll-data';
import { PersonGetWageHistoryResponseDataInnerEstimatedMonthlyCost } from './person-get-wage-history-response-data-inner-estimated-monthly-cost';
import { PersonGetWageHistoryResponseDataInnerWeeklyTimeEngagementMinutes } from './person-get-wage-history-response-data-inner-weekly-time-engagement-minutes';

/**
 * 
 * @export
 * @interface PersonGetWageHistoryResponseDataInner
 */
export interface PersonGetWageHistoryResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'end_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'estimated_monthly_total'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'created_at'?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'updated_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'registration_country_code'?: string;
    /**
     * 
     * @type {PersonGetWageHistoryResponseDataInnerEstimatedMonthlyCost}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'estimated_monthly_cost'?: PersonGetWageHistoryResponseDataInnerEstimatedMonthlyCost;
    /**
     * 
     * @type {PersonGetWageHistoryResponseDataInnerWeeklyTimeEngagementMinutes}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'weekly_time_engagement_minutes'?: PersonGetWageHistoryResponseDataInnerWeeklyTimeEngagementMinutes;
    /**
     * 
     * @type {PersonGetWageHistoryResponseDataInnerCustomPayrollData}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'custom_payroll_data'?: PersonGetWageHistoryResponseDataInnerCustomPayrollData;
    /**
     * 
     * @type {string}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'termination_reason'?: string;
    /**
     * 
     * @type {any}
     * @memberof PersonGetWageHistoryResponseDataInner
     */
    'multiple_week_schedule'?: any;
}

