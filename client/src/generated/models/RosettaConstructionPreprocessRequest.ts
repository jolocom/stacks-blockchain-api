/* tslint:disable */
/* eslint-disable */
/**
 * Stacks 2.0 Blockchain API
 * This is the documentation for the Stacks 2.0 Blockchain API.  It is comprised of two parts; the Stacks Blockchain API and the Stacks Core API.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/614feab5c108d292bffa#?env%5BStacks%20Blockchain%20API%5D=W3sia2V5Ijoic3R4X2FkZHJlc3MiLCJ2YWx1ZSI6IlNUMlRKUkhESE1ZQlE0MTdIRkIwQkRYNDMwVFFBNVBYUlg2NDk1RzFWIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJibG9ja19pZCIsInZhbHVlIjoiMHgiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im9mZnNldCIsInZhbHVlIjoiMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfdHgiLCJ2YWx1ZSI6IjIwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfYmxvY2siLCJ2YWx1ZSI6IjMwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0eF9pZCIsInZhbHVlIjoiMHg1NDA5MGMxNmE3MDJiNzUzYjQzMTE0ZTg4NGJjMTlhODBhNzk2MzhmZDQ0OWE0MGY4MDY4Y2RmMDAzY2RlNmUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9pZCIsInZhbHVlIjoiU1RKVFhFSlBKUFBWRE5BOUIwNTJOU1JSQkdRQ0ZOS1ZTMTc4VkdIMS5oZWxsb193b3JsZFxuIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidGNfYWRkcmVzcyIsInZhbHVlIjoiYWJjIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9hZGRyZXNzIiwidmFsdWUiOiJTVEpUWEVKUEpQUFZETkE5QjA1Mk5TUlJCR1FDRk5LVlMxNzhWR0gxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9uYW1lIiwidmFsdWUiOiJoZWxsb193b3JsZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWFwIiwidmFsdWUiOiJzdG9yZSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWV0aG9kIiwidmFsdWUiOiJnZXQtdmFsdWUiLCJlbmFibGVkIjp0cnVlfV0=)  ## Design  ### Stacks Core API vs Stacks Blockchain API The blockchain\'s Rust implementation exposes a JSON RPC endpoint (\"Stacks Core API\"), which can be used to interface with the blockchain. It can be used directly. [See the documentation for the `stacks-blockchain` in its Github repository](https://github.com/blockstack/stacks-blockchain/)  All `/v2/` routes a proxied to a Blockstack PBC-hosted Stacks Node. For a trustless architecture, you should make these requests to a self-hosted node.  All `/extended/` routes are provided by the Stacks 2.0 Blockchain API directly. They extend the Stacks Core API capabilities to make it easier to integrate with.  ### Pagination To make API responses more compact, lists returned by the API are paginated. For lists, the response body includes:    - `limit`: the number of list items return per response   - `offset`: the number of elements to skip (starting from `0`)   - `total`: the number of all available list items   - `results`: the array of list items (length of array equals the set limit)  Using the `limit` and `offset` properties, you can paginate through the entire list by increasing the offset by the limit until you reach the total.  ## Client Library A generated JS Client is available for consumption of this API. The client enables typesafe REST and WebSocket communication. Please review the [client documentation](https://blockstack.github.io/stacks-blockchain-api/client/index.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierFromJSONTyped,
    NetworkIdentifierToJSON,
    RosettaAmount,
    RosettaAmountFromJSON,
    RosettaAmountFromJSONTyped,
    RosettaAmountToJSON,
    RosettaOperation,
    RosettaOperationFromJSON,
    RosettaOperationFromJSONTyped,
    RosettaOperationToJSON,
} from './';

/**
 * ConstructionPreprocessRequest is passed to the /construction/preprocess endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction
 * @export
 * @interface RosettaConstructionPreprocessRequest
 */
export interface RosettaConstructionPreprocessRequest {
    /**
     * 
     * @type {NetworkIdentifier}
     * @memberof RosettaConstructionPreprocessRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * 
     * @type {Array<RosettaOperation>}
     * @memberof RosettaConstructionPreprocessRequest
     */
    operations: Array<RosettaOperation>;
    /**
     * 
     * @type {object}
     * @memberof RosettaConstructionPreprocessRequest
     */
    metadata?: object;
    /**
     * 
     * @type {Array<RosettaAmount>}
     * @memberof RosettaConstructionPreprocessRequest
     */
    max_fee?: Array<RosettaAmount>;
    /**
     *  The caller can also provide a suggested fee multiplier to indicate that the suggested fee should be scaled. This may be used to set higher fees for urgent transactions or to pay lower fees when there is less urgency. It is assumed that providing a very low multiplier (like 0.0001) will never lead to a transaction being created with a fee less than the minimum network fee (if applicable). In the case that the caller provides both a max fee and a suggested fee multiplier, the max fee will set an upper bound on the suggested fee (regardless of the multiplier provided).
     * @type {number}
     * @memberof RosettaConstructionPreprocessRequest
     */
    suggested_fee_multiplier?: number;
}

export function RosettaConstructionPreprocessRequestFromJSON(json: any): RosettaConstructionPreprocessRequest {
    return RosettaConstructionPreprocessRequestFromJSONTyped(json, false);
}

export function RosettaConstructionPreprocessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionPreprocessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network_identifier': NetworkIdentifierFromJSON(json['network_identifier']),
        'operations': ((json['operations'] as Array<any>).map(RosettaOperationFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'max_fee': !exists(json, 'max_fee') ? undefined : ((json['max_fee'] as Array<any>).map(RosettaAmountFromJSON)),
        'suggested_fee_multiplier': !exists(json, 'suggested_fee_multiplier') ? undefined : json['suggested_fee_multiplier'],
    };
}

export function RosettaConstructionPreprocessRequestToJSON(value?: RosettaConstructionPreprocessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network_identifier': NetworkIdentifierToJSON(value.network_identifier),
        'operations': ((value.operations as Array<any>).map(RosettaOperationToJSON)),
        'metadata': value.metadata,
        'max_fee': value.max_fee === undefined ? undefined : ((value.max_fee as Array<any>).map(RosettaAmountToJSON)),
        'suggested_fee_multiplier': value.suggested_fee_multiplier,
    };
}


