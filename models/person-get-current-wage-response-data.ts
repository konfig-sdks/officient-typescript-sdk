/*
Officient API

Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it.

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PersonGetCurrentWageResponseDataCustomPayrollData } from './person-get-current-wage-response-data-custom-payroll-data';
import { PersonGetCurrentWageResponseDataEstimatedMonthlyCost } from './person-get-current-wage-response-data-estimated-monthly-cost';
import { PersonGetCurrentWageResponseDataMultipleWeekSchedule } from './person-get-current-wage-response-data-multiple-week-schedule';
import { PersonGetCurrentWageResponseDataWeeklyTimeEngagementMinutes } from './person-get-current-wage-response-data-weekly-time-engagement-minutes';

/**
 * 
 * @export
 * @interface PersonGetCurrentWageResponseData
 */
export interface PersonGetCurrentWageResponseData {
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'end_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'estimated_monthly_total'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'created_at'?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'updated_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'registration_country_code'?: string;
    /**
     * 
     * @type {PersonGetCurrentWageResponseDataEstimatedMonthlyCost}
     * @memberof PersonGetCurrentWageResponseData
     */
    'estimated_monthly_cost'?: PersonGetCurrentWageResponseDataEstimatedMonthlyCost;
    /**
     * 
     * @type {PersonGetCurrentWageResponseDataWeeklyTimeEngagementMinutes}
     * @memberof PersonGetCurrentWageResponseData
     */
    'weekly_time_engagement_minutes'?: PersonGetCurrentWageResponseDataWeeklyTimeEngagementMinutes;
    /**
     * 
     * @type {PersonGetCurrentWageResponseDataCustomPayrollData}
     * @memberof PersonGetCurrentWageResponseData
     */
    'custom_payroll_data'?: PersonGetCurrentWageResponseDataCustomPayrollData;
    /**
     * 
     * @type {string}
     * @memberof PersonGetCurrentWageResponseData
     */
    'termination_reason'?: string;
    /**
     * 
     * @type {PersonGetCurrentWageResponseDataMultipleWeekSchedule}
     * @memberof PersonGetCurrentWageResponseData
     */
    'multiple_week_schedule'?: PersonGetCurrentWageResponseDataMultipleWeekSchedule;
    /**
     * 
     * @type {number}
     * @memberof PersonGetCurrentWageResponseData
     */
    'contract_index_number'?: number;
}

