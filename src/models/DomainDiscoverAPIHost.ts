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
import type { DomainDiscoverAPIFieldMetadata } from "./DomainDiscoverAPIFieldMetadata";
import { DomainDiscoverAPIFieldMetadataFromJSON, DomainDiscoverAPIFieldMetadataFromJSONTyped, DomainDiscoverAPIFieldMetadataToJSON } from "./DomainDiscoverAPIFieldMetadata";
import type { DomainDiscoverAPINetworkInterface } from "./DomainDiscoverAPINetworkInterface";
import { DomainDiscoverAPINetworkInterfaceFromJSON, DomainDiscoverAPINetworkInterfaceFromJSONTyped, DomainDiscoverAPINetworkInterfaceToJSON } from "./DomainDiscoverAPINetworkInterface";

/**
 * Represents information about a managed, an unmanaged or an unsupported asset.
 * @export
 * @interface DomainDiscoverAPIHost
 */
export interface DomainDiscoverAPIHost {
    /**
     * Whether the asset is account-enabled in Active Directory (Yes or No).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    accountEnabled?: string;
    /**
     * The user account control properties in Active Directory.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    adUserAccountControl?: number;
    /**
     * The version of the Falcon sensor that's installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    agentVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    aid?: string;
    /**
     * The first and last name of the person who is assigned to this asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    assignedTo?: string;
    /**
     * The name of the asset's BIOS manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    biosManufacturer?: string;
    /**
     * The asset's BIOS version.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    biosVersion?: string;
    /**
     * The asset's customer ID.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    cid: string;
    /**
     * The name of the city where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    city?: string;
    /**
     * How the server is classified, such as production, development, disaster recovery, or user acceptance testing.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    classification?: string;
    /**
     * The level of confidence that the asset is a corporate asset (25 = low confidence, 50 = medium confidence, 75 = high confidence).
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    confidence?: number;
    /**
     * The name of the country where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    country?: string;
    /**
     * The manufacturer of the asset's CPU.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    cpuManufacturer?: string;
    /**
     * The time the asset was created in Active Directory, according to LDAP info.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    creationTimestamp?: string;
    /**
     * The last seen local IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    currentLocalIp?: string;
    /**
     * Where the data about the asset came from (such as CrowdStrike, ServiceNow, or Active Directory).
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    dataProviders?: Array<string>;
    /**
     * How many services provided data about the asset.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    dataProvidersCount?: number;
    /**
     * The department where the asset is used.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    department?: string;
    /**
     * The descriptions of the asset in Active Directory (Cannot be used for filtering, sorting, or querying).
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    descriptions?: Array<string>;
    /**
     * The agent IDs of the Falcon sensors installed on the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererAids?: Array<string>;
    /**
     * The number of sources that discovered the asset.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    discovererCount?: number;
    /**
     * The platform names of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererPlatformNames?: Array<string>;
    /**
     * The product type descriptions of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererProductTypeDescs?: Array<string>;
    /**
     * The tags of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererTags?: Array<string>;
    /**
     * The email of the asset as listed in Active Directory.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    email?: string;
    /**
     * The type of asset (managed, unmanaged, unsupported).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    entityType?: string;
    /**
     * The external IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    externalIp?: string;
    /**
     * Lists the data providers for each property in the response (Cannot be used for filtering, sorting, or querying).
     * @type {{ [key: string]: DomainDiscoverAPIFieldMetadata; }}
     * @memberof DomainDiscoverAPIHost
     */
    fieldMetadata?: { [key: string]: DomainDiscoverAPIFieldMetadata };
    /**
     * The agent ID of the Falcon sensor on the source that first discovered the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    firstDiscovererAid?: string;
    /**
     * The first time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    firstSeenTimestamp?: string;
    /**
     * The fully qualified domain name of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    fqdn?: string;
    /**
     * The host management groups the asset is part of.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    groups?: Array<string>;
    /**
     * The asset's hostname.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    hostname?: string;
    /**
     * The unique ID of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    id: string;
    /**
     * Whether the asset is exposed to the internet (Yes or Unknown).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    internetExposure?: string;
    /**
     * For Linux and Mac hosts: the major version, minor version, and patch version of the kernel for the asset. For Windows hosts: the build number of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    kernelVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the source that most recently discovered the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    lastDiscovererAid?: string;
    /**
     * The most recent time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    lastSeenTimestamp?: string;
    /**
     * Historical local IPv4 addresses associated with the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    localIpAddresses?: Array<string>;
    /**
     * The number of historical local IPv4 addresses the asset has had.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    localIpsCount?: number;
    /**
     * The location of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    location?: string;
    /**
     * Historical MAC addresses associated with the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    macAddresses?: Array<string>;
    /**
     * The domain name the asset is currently joined to.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    machineDomain?: string;
    /**
     * The first and last name of the person who manages this asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    managedBy?: string;
    /**
     * The asset's network interfaces (Cannot be used for filtering, sorting, or querying).
     * @type {Array<DomainDiscoverAPINetworkInterface>}
     * @memberof DomainDiscoverAPIHost
     */
    networkInterfaces?: Array<DomainDiscoverAPINetworkInterface>;
    /**
     * The number of active physical drives available on the system.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    numberOfDiskDrives?: number;
    /**
     * The globally unique identifier (GUID) of the asset in Active Directory.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    objectGuid?: string;
    /**
     * The security identifier (SID) of the asset in Active Directory.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    objectSid?: string;
    /**
     * Whether the asset is at end of support (Yes, No, or Unknown).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    osIsEol?: string;
    /**
     * The OS service pack on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    osServicePack?: string;
    /**
     * The OS version of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    osVersion?: string;
    /**
     * The organizational unit of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    ou?: string;
    /**
     * The first and last name of the person who owns this asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    ownedBy?: string;
    /**
     * The number of physical CPU cores available on the system.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    physicalCoreCount?: number;
    /**
     * The platform name of the asset (Windows, Mac, Linux).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    platformName?: string;
    /**
     * The number of physical processors available on the system.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    processorPackageCount?: number;
    /**
     * The product type of the asset represented as a number (1 = Workstation, 2 = Domain Controller, 3 = Server).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    productType?: string;
    /**
     * The product type of the asset (Workstation, Domain Controller, Server).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    productTypeDesc?: string;
    /**
     * Whether the asset is in reduced functionality mode (Yes or No).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    reducedFunctionalityMode?: string;
    /**
     * The unique identifier of the asset from ServiceNow, if any.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    servicenowId?: string;
    /**
     * The site name of the domain the asset is joined to (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    siteName?: string;
    /**
     * The name of the U.S. state where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    state?: string;
    /**
     * The asset's system manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemManufacturer?: string;
    /**
     * The asset's system product name.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemProductName?: string;
    /**
     * The asset's system serial number.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemSerialNumber?: string;
    /**
     * The sensor and cloud tags of the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    tags?: Array<string>;
    /**
     * What the asset is used for, such as production, staging, or QA.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    usedFor?: string;
}

/**
 * Check if a given object implements the DomainDiscoverAPIHost interface.
 */
export function instanceOfDomainDiscoverAPIHost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DomainDiscoverAPIHostFromJSON(json: any): DomainDiscoverAPIHost {
    return DomainDiscoverAPIHostFromJSONTyped(json, false);
}

export function DomainDiscoverAPIHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIHost {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountEnabled: !exists(json, "account_enabled") ? undefined : json["account_enabled"],
        adUserAccountControl: !exists(json, "ad_user_account_control") ? undefined : json["ad_user_account_control"],
        agentVersion: !exists(json, "agent_version") ? undefined : json["agent_version"],
        aid: !exists(json, "aid") ? undefined : json["aid"],
        assignedTo: !exists(json, "assigned_to") ? undefined : json["assigned_to"],
        biosManufacturer: !exists(json, "bios_manufacturer") ? undefined : json["bios_manufacturer"],
        biosVersion: !exists(json, "bios_version") ? undefined : json["bios_version"],
        cid: json["cid"],
        city: !exists(json, "city") ? undefined : json["city"],
        classification: !exists(json, "classification") ? undefined : json["classification"],
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        country: !exists(json, "country") ? undefined : json["country"],
        cpuManufacturer: !exists(json, "cpu_manufacturer") ? undefined : json["cpu_manufacturer"],
        creationTimestamp: !exists(json, "creation_timestamp") ? undefined : json["creation_timestamp"],
        currentLocalIp: !exists(json, "current_local_ip") ? undefined : json["current_local_ip"],
        dataProviders: !exists(json, "data_providers") ? undefined : json["data_providers"],
        dataProvidersCount: !exists(json, "data_providers_count") ? undefined : json["data_providers_count"],
        department: !exists(json, "department") ? undefined : json["department"],
        descriptions: !exists(json, "descriptions") ? undefined : json["descriptions"],
        discovererAids: !exists(json, "discoverer_aids") ? undefined : json["discoverer_aids"],
        discovererCount: !exists(json, "discoverer_count") ? undefined : json["discoverer_count"],
        discovererPlatformNames: !exists(json, "discoverer_platform_names") ? undefined : json["discoverer_platform_names"],
        discovererProductTypeDescs: !exists(json, "discoverer_product_type_descs") ? undefined : json["discoverer_product_type_descs"],
        discovererTags: !exists(json, "discoverer_tags") ? undefined : json["discoverer_tags"],
        email: !exists(json, "email") ? undefined : json["email"],
        entityType: !exists(json, "entity_type") ? undefined : json["entity_type"],
        externalIp: !exists(json, "external_ip") ? undefined : json["external_ip"],
        fieldMetadata: !exists(json, "field_metadata") ? undefined : mapValues(json["field_metadata"], DomainDiscoverAPIFieldMetadataFromJSON),
        firstDiscovererAid: !exists(json, "first_discoverer_aid") ? undefined : json["first_discoverer_aid"],
        firstSeenTimestamp: !exists(json, "first_seen_timestamp") ? undefined : json["first_seen_timestamp"],
        fqdn: !exists(json, "fqdn") ? undefined : json["fqdn"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        hostname: !exists(json, "hostname") ? undefined : json["hostname"],
        id: json["id"],
        internetExposure: !exists(json, "internet_exposure") ? undefined : json["internet_exposure"],
        kernelVersion: !exists(json, "kernel_version") ? undefined : json["kernel_version"],
        lastDiscovererAid: !exists(json, "last_discoverer_aid") ? undefined : json["last_discoverer_aid"],
        lastSeenTimestamp: !exists(json, "last_seen_timestamp") ? undefined : json["last_seen_timestamp"],
        localIpAddresses: !exists(json, "local_ip_addresses") ? undefined : json["local_ip_addresses"],
        localIpsCount: !exists(json, "local_ips_count") ? undefined : json["local_ips_count"],
        location: !exists(json, "location") ? undefined : json["location"],
        macAddresses: !exists(json, "mac_addresses") ? undefined : json["mac_addresses"],
        machineDomain: !exists(json, "machine_domain") ? undefined : json["machine_domain"],
        managedBy: !exists(json, "managed_by") ? undefined : json["managed_by"],
        networkInterfaces: !exists(json, "network_interfaces") ? undefined : (json["network_interfaces"] as Array<any>).map(DomainDiscoverAPINetworkInterfaceFromJSON),
        numberOfDiskDrives: !exists(json, "number_of_disk_drives") ? undefined : json["number_of_disk_drives"],
        objectGuid: !exists(json, "object_guid") ? undefined : json["object_guid"],
        objectSid: !exists(json, "object_sid") ? undefined : json["object_sid"],
        osIsEol: !exists(json, "os_is_eol") ? undefined : json["os_is_eol"],
        osServicePack: !exists(json, "os_service_pack") ? undefined : json["os_service_pack"],
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        ou: !exists(json, "ou") ? undefined : json["ou"],
        ownedBy: !exists(json, "owned_by") ? undefined : json["owned_by"],
        physicalCoreCount: !exists(json, "physical_core_count") ? undefined : json["physical_core_count"],
        platformName: !exists(json, "platform_name") ? undefined : json["platform_name"],
        processorPackageCount: !exists(json, "processor_package_count") ? undefined : json["processor_package_count"],
        productType: !exists(json, "product_type") ? undefined : json["product_type"],
        productTypeDesc: !exists(json, "product_type_desc") ? undefined : json["product_type_desc"],
        reducedFunctionalityMode: !exists(json, "reduced_functionality_mode") ? undefined : json["reduced_functionality_mode"],
        servicenowId: !exists(json, "servicenow_id") ? undefined : json["servicenow_id"],
        siteName: !exists(json, "site_name") ? undefined : json["site_name"],
        state: !exists(json, "state") ? undefined : json["state"],
        systemManufacturer: !exists(json, "system_manufacturer") ? undefined : json["system_manufacturer"],
        systemProductName: !exists(json, "system_product_name") ? undefined : json["system_product_name"],
        systemSerialNumber: !exists(json, "system_serial_number") ? undefined : json["system_serial_number"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
        usedFor: !exists(json, "used_for") ? undefined : json["used_for"],
    };
}

export function DomainDiscoverAPIHostToJSON(value?: DomainDiscoverAPIHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_enabled: value.accountEnabled,
        ad_user_account_control: value.adUserAccountControl,
        agent_version: value.agentVersion,
        aid: value.aid,
        assigned_to: value.assignedTo,
        bios_manufacturer: value.biosManufacturer,
        bios_version: value.biosVersion,
        cid: value.cid,
        city: value.city,
        classification: value.classification,
        confidence: value.confidence,
        country: value.country,
        cpu_manufacturer: value.cpuManufacturer,
        creation_timestamp: value.creationTimestamp,
        current_local_ip: value.currentLocalIp,
        data_providers: value.dataProviders,
        data_providers_count: value.dataProvidersCount,
        department: value.department,
        descriptions: value.descriptions,
        discoverer_aids: value.discovererAids,
        discoverer_count: value.discovererCount,
        discoverer_platform_names: value.discovererPlatformNames,
        discoverer_product_type_descs: value.discovererProductTypeDescs,
        discoverer_tags: value.discovererTags,
        email: value.email,
        entity_type: value.entityType,
        external_ip: value.externalIp,
        field_metadata: value.fieldMetadata === undefined ? undefined : mapValues(value.fieldMetadata, DomainDiscoverAPIFieldMetadataToJSON),
        first_discoverer_aid: value.firstDiscovererAid,
        first_seen_timestamp: value.firstSeenTimestamp,
        fqdn: value.fqdn,
        groups: value.groups,
        hostname: value.hostname,
        id: value.id,
        internet_exposure: value.internetExposure,
        kernel_version: value.kernelVersion,
        last_discoverer_aid: value.lastDiscovererAid,
        last_seen_timestamp: value.lastSeenTimestamp,
        local_ip_addresses: value.localIpAddresses,
        local_ips_count: value.localIpsCount,
        location: value.location,
        mac_addresses: value.macAddresses,
        machine_domain: value.machineDomain,
        managed_by: value.managedBy,
        network_interfaces: value.networkInterfaces === undefined ? undefined : (value.networkInterfaces as Array<any>).map(DomainDiscoverAPINetworkInterfaceToJSON),
        number_of_disk_drives: value.numberOfDiskDrives,
        object_guid: value.objectGuid,
        object_sid: value.objectSid,
        os_is_eol: value.osIsEol,
        os_service_pack: value.osServicePack,
        os_version: value.osVersion,
        ou: value.ou,
        owned_by: value.ownedBy,
        physical_core_count: value.physicalCoreCount,
        platform_name: value.platformName,
        processor_package_count: value.processorPackageCount,
        product_type: value.productType,
        product_type_desc: value.productTypeDesc,
        reduced_functionality_mode: value.reducedFunctionalityMode,
        servicenow_id: value.servicenowId,
        site_name: value.siteName,
        state: value.state,
        system_manufacturer: value.systemManufacturer,
        system_product_name: value.systemProductName,
        system_serial_number: value.systemSerialNumber,
        tags: value.tags,
        used_for: value.usedFor,
    };
}
