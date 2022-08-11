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

import { exists, mapValues } from "../runtime";
/**
 * A specific device group to create
 * @export
 * @interface RequestsCreateGroupV1
 */
export interface RequestsCreateGroupV1 {
    /**
     * The FQL assignment rule for the group. This may only be specified if the groups type is 'dynamic'
     * @type {string}
     * @memberof RequestsCreateGroupV1
     */
    assignmentRule?: string;
    /**
     * The description of the group
     * @type {string}
     * @memberof RequestsCreateGroupV1
     */
    description?: string;
    /**
     * The type of device group to create
     * @type {string}
     * @memberof RequestsCreateGroupV1
     */
    groupType: RequestsCreateGroupV1GroupTypeEnum;
    /**
     * The name of the group
     * @type {string}
     * @memberof RequestsCreateGroupV1
     */
    name: string;
}

/**
 * @export
 */
export const RequestsCreateGroupV1GroupTypeEnum = {
    Static: "static",
    Dynamic: "dynamic",
    StaticById: "staticByID",
} as const;
export type RequestsCreateGroupV1GroupTypeEnum = typeof RequestsCreateGroupV1GroupTypeEnum[keyof typeof RequestsCreateGroupV1GroupTypeEnum];

/**
 * Check if a given object implements the RequestsCreateGroupV1 interface.
 */
export function instanceOfRequestsCreateGroupV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupType" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RequestsCreateGroupV1FromJSON(json: any): RequestsCreateGroupV1 {
    return RequestsCreateGroupV1FromJSONTyped(json, false);
}

export function RequestsCreateGroupV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsCreateGroupV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignmentRule: !exists(json, "assignment_rule") ? undefined : json["assignment_rule"],
        description: !exists(json, "description") ? undefined : json["description"],
        groupType: json["group_type"],
        name: json["name"],
    };
}

export function RequestsCreateGroupV1ToJSON(value?: RequestsCreateGroupV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assignment_rule: value.assignmentRule,
        description: value.description,
        group_type: value.groupType,
        name: value.name,
    };
}
