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
 * Represents information about a successful or a failed login.
 * @export
 * @interface DomainDiscoverAPILogin
 */
export interface DomainDiscoverAPILogin {
    /**
     * The ID of the account that made the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    accountId?: string;
    /**
     * The name of the account that made the login (Domain\Username or Hostname\Username).
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    accountName?: string;
    /**
     * The type of the account that made the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    accountType?: string;
    /**
     * Whether the account that made the login has administrator privileges (Yes, No, or Unknown).
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    adminPrivileges?: string;
    /**
     * A login represents an aggregation of login attempts made in a window of time (1-hour window for logins in the past day, or 24-hour window for logins older than a day).
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    aggregationTimeInterval?: string;
    /**
     * The agent ID of the Falcon sensor installed on the asset where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    aid?: string;
    /**
     * The customer ID where login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    cid?: string;
    /**
     * The description of the reason why the login failed, if login_status="Failed".<ul><li>There are currently no login servers available to service the login request.</li><li>User login with misspelled or bad user account</li><li>User login with misspelled or bad password</li><li>This is either due to a bad username or authentication information</li><li>Unknown user name or bad password.</li><li>User login outside authorized hours</li><li>User login from unauthorized workstation</li><li>User login with expired password</li><li>User login to account disabled by administrator</li><li>Indicates the Sam Server was in the wrong state to perform the desired operation.</li><li>Clocks between DC and other computer too far out of sync</li><li>The user has not been granted the requested login type (aka login right) at this machine</li><li>The login request failed because the trust relationship between the primary domain and the trusted domain failed.</li><li>An attempt was made to login, but the Netlogon service was not started.</li><li>User login with expired account</li><li>User is required to change password at next login</li><li>Evidently a bug in Windows and not a risk</li><li>User login with account locked</li><li>Failure Reason: An Error occurred during Login</li><li>Login Failure: The machine you are logging in to is protected by an authentication firewall. The specified account is not allowed to authenticate to the machine.</li><li>Status OK.</li><li>Invalid password entered</li></ul>
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    failureDescription?: string;
    /**
     * The name of the city where the asset is located where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    hostCity?: string;
    /**
     * The name of the country where the asset is located on which the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    hostCountry?: string;
    /**
     * The unique ID of the asset where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    hostId?: string;
    /**
     * The hostname of the host where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    hostname?: string;
    /**
     * The unique ID of the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    id?: string;
    /**
     * Whether the failed login is considered suspicious based on criteria including login failures and locations (true or false).
     * @type {boolean}
     * @memberof DomainDiscoverAPILogin
     */
    isSuspicious?: boolean;
    /**
     * The external IP address of the asset where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    localIp?: string;
    /**
     * The domain of the asset where the login took place.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    loginDomain?: string;
    /**
     * Number of times a login attempt happened in the specified aggregation time interval for this login (1-hour window for logins in the past day, or 24-hour window for logins older than a day).
     * @type {number}
     * @memberof DomainDiscoverAPILogin
     */
    loginEventCount?: number;
    /**
     * The status of the login (Successful or Failed).
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    loginStatus?: string;
    /**
     * The date and time of the most recent attempt in the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    loginTimestamp?: string;
    /**
     * The type of the login.
     *
     * For successful logins: <ul><li>Interactive</li><li>Service</li><li>Terminal server</li><li>Cached credentials</li><li>Auditing</li></ul>
     * For failed logins: <ul><li>Interactive</li><li>Network</li><li>Batch</li><li>Service</li><li>Unlock</li><li>Network cleartext</li><li>New credentials</li><li>Terminal server</li><li>Cached credentials</li><li>Auditing</li></ul>
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    loginType?: string;
    /**
     * The remote IP address where the login was initiated.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    remoteIp?: string;
    /**
     * The security identifier of the account on a Windows asset that made the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    userSid?: string;
    /**
     * The username of the account that made the login.
     * @type {string}
     * @memberof DomainDiscoverAPILogin
     */
    username?: string;
}

export function DomainDiscoverAPILoginFromJSON(json: any): DomainDiscoverAPILogin {
    return DomainDiscoverAPILoginFromJSONTyped(json, false);
}

export function DomainDiscoverAPILoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPILogin {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountId: !exists(json, "account_id") ? undefined : json["account_id"],
        accountName: !exists(json, "account_name") ? undefined : json["account_name"],
        accountType: !exists(json, "account_type") ? undefined : json["account_type"],
        adminPrivileges: !exists(json, "admin_privileges") ? undefined : json["admin_privileges"],
        aggregationTimeInterval: !exists(json, "aggregation_time_interval") ? undefined : json["aggregation_time_interval"],
        aid: !exists(json, "aid") ? undefined : json["aid"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        failureDescription: !exists(json, "failure_description") ? undefined : json["failure_description"],
        hostCity: !exists(json, "host_city") ? undefined : json["host_city"],
        hostCountry: !exists(json, "host_country") ? undefined : json["host_country"],
        hostId: !exists(json, "host_id") ? undefined : json["host_id"],
        hostname: !exists(json, "hostname") ? undefined : json["hostname"],
        id: !exists(json, "id") ? undefined : json["id"],
        isSuspicious: !exists(json, "is_suspicious") ? undefined : json["is_suspicious"],
        localIp: !exists(json, "local_ip") ? undefined : json["local_ip"],
        loginDomain: !exists(json, "login_domain") ? undefined : json["login_domain"],
        loginEventCount: !exists(json, "login_event_count") ? undefined : json["login_event_count"],
        loginStatus: !exists(json, "login_status") ? undefined : json["login_status"],
        loginTimestamp: !exists(json, "login_timestamp") ? undefined : json["login_timestamp"],
        loginType: !exists(json, "login_type") ? undefined : json["login_type"],
        remoteIp: !exists(json, "remote_ip") ? undefined : json["remote_ip"],
        userSid: !exists(json, "user_sid") ? undefined : json["user_sid"],
        username: !exists(json, "username") ? undefined : json["username"],
    };
}

export function DomainDiscoverAPILoginToJSON(value?: DomainDiscoverAPILogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_id: value.accountId,
        account_name: value.accountName,
        account_type: value.accountType,
        admin_privileges: value.adminPrivileges,
        aggregation_time_interval: value.aggregationTimeInterval,
        aid: value.aid,
        cid: value.cid,
        failure_description: value.failureDescription,
        host_city: value.hostCity,
        host_country: value.hostCountry,
        host_id: value.hostId,
        hostname: value.hostname,
        id: value.id,
        is_suspicious: value.isSuspicious,
        local_ip: value.localIp,
        login_domain: value.loginDomain,
        login_event_count: value.loginEventCount,
        login_status: value.loginStatus,
        login_timestamp: value.loginTimestamp,
        login_type: value.loginType,
        remote_ip: value.remoteIp,
        user_sid: value.userSid,
        username: value.username,
    };
}
