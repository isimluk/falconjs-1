/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type {
    MsaErrorsOnly,
    MsaQueryResponse,
    MsaReplyMetaOnly,
    RequestsSvExclusionCreateReqV1,
    RequestsSvExclusionUpdateReqV1,
    ResponsesMlExclusionRespV1,
    ResponsesSvExclusionRespV1,
} from "../models";
import {
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsSvExclusionCreateReqV1FromJSON,
    RequestsSvExclusionCreateReqV1ToJSON,
    RequestsSvExclusionUpdateReqV1FromJSON,
    RequestsSvExclusionUpdateReqV1ToJSON,
    ResponsesMlExclusionRespV1FromJSON,
    ResponsesMlExclusionRespV1ToJSON,
    ResponsesSvExclusionRespV1FromJSON,
    ResponsesSvExclusionRespV1ToJSON,
} from "../models";

export interface CreateSVExclusionsV1Request {
    body: RequestsSvExclusionCreateReqV1;
}

export interface DeleteSensorVisibilityExclusionsV1Request {
    ids: Array<string>;
    comment?: string;
}

export interface GetSensorVisibilityExclusionsV1Request {
    ids: Array<string>;
}

export interface QuerySensorVisibilityExclusionsV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QuerySensorVisibilityExclusionsV1SortEnum;
}

export interface UpdateSensorVisibilityExclusionsV1Request {
    body: RequestsSvExclusionUpdateReqV1;
}

/**
 *
 */
export class SensorVisibilityExclusionsApi extends runtime.BaseAPI {
    /**
     * Create the sensor visibility exclusions
     */
    async createSVExclusionsV1Raw(
        requestParameters: CreateSVExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesMlExclusionRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createSVExclusionsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-visibility-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/sv-exclusions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsSvExclusionCreateReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesMlExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Create the sensor visibility exclusions
     */
    async createSVExclusionsV1(body: RequestsSvExclusionCreateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesMlExclusionRespV1> {
        const response = await this.createSVExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the sensor visibility exclusions by id
     */
    async deleteSensorVisibilityExclusionsV1Raw(
        requestParameters: DeleteSensorVisibilityExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteSensorVisibilityExclusionsV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.comment !== undefined) {
            queryParameters["comment"] = requestParameters.comment;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-visibility-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/sv-exclusions/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete the sensor visibility exclusions by id
     */
    async deleteSensorVisibilityExclusionsV1(ids: Array<string>, comment?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteSensorVisibilityExclusionsV1Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get a set of Sensor Visibility Exclusions by specifying their IDs
     */
    async getSensorVisibilityExclusionsV1Raw(
        requestParameters: GetSensorVisibilityExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesSvExclusionRespV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSensorVisibilityExclusionsV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-visibility-exclusions:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/sv-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesSvExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Get a set of Sensor Visibility Exclusions by specifying their IDs
     */
    async getSensorVisibilityExclusionsV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesSvExclusionRespV1> {
        const response = await this.getSensorVisibilityExclusionsV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for sensor visibility exclusions.
     */
    async querySensorVisibilityExclusionsV1Raw(
        requestParameters: QuerySensorVisibilityExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-visibility-exclusions:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/sv-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for sensor visibility exclusions.
     */
    async querySensorVisibilityExclusionsV1(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QuerySensorVisibilityExclusionsV1SortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaQueryResponse> {
        const response = await this.querySensorVisibilityExclusionsV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Update the sensor visibility exclusions
     */
    async updateSensorVisibilityExclusionsV1Raw(
        requestParameters: UpdateSensorVisibilityExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesSvExclusionRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateSensorVisibilityExclusionsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-visibility-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/sv-exclusions/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsSvExclusionUpdateReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesSvExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Update the sensor visibility exclusions
     */
    async updateSensorVisibilityExclusionsV1(body: RequestsSvExclusionUpdateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesSvExclusionRespV1> {
        const response = await this.updateSensorVisibilityExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const QuerySensorVisibilityExclusionsV1SortEnum = {
    AppliedGloballyAsc: "applied_globally.asc",
    AppliedGloballyDesc: "applied_globally.desc",
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedOnAsc: "created_on.asc",
    CreatedOnDesc: "created_on.desc",
    LastModifiedAsc: "last_modified.asc",
    LastModifiedDesc: "last_modified.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ValueAsc: "value.asc",
    ValueDesc: "value.desc",
} as const;
export type QuerySensorVisibilityExclusionsV1SortEnum = typeof QuerySensorVisibilityExclusionsV1SortEnum[keyof typeof QuerySensorVisibilityExclusionsV1SortEnum];
