/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DecodedRawMessage } from './DecodedRawMessage';
import {
    DecodedRawMessageFromJSON,
    DecodedRawMessageFromJSONTyped,
    DecodedRawMessageToJSON,
    DecodedRawMessageToJSONTyped,
} from './DecodedRawMessage';

/**
 * 
 * @export
 * @interface DecodedMessageExtInMsgDecodedWalletHighloadV2
 */
export interface DecodedMessageExtInMsgDecodedWalletHighloadV2 {
    /**
     * 
     * @type {number}
     * @memberof DecodedMessageExtInMsgDecodedWalletHighloadV2
     */
    subwalletId: number;
    /**
     * 
     * @type {string}
     * @memberof DecodedMessageExtInMsgDecodedWalletHighloadV2
     */
    boundedQueryId: string;
    /**
     * 
     * @type {Array<DecodedRawMessage>}
     * @memberof DecodedMessageExtInMsgDecodedWalletHighloadV2
     */
    rawMessages: Array<DecodedRawMessage>;
}

/**
 * Check if a given object implements the DecodedMessageExtInMsgDecodedWalletHighloadV2 interface.
 */
export function instanceOfDecodedMessageExtInMsgDecodedWalletHighloadV2(value: object): value is DecodedMessageExtInMsgDecodedWalletHighloadV2 {
    if (!('subwalletId' in value) || value['subwalletId'] === undefined) return false;
    if (!('boundedQueryId' in value) || value['boundedQueryId'] === undefined) return false;
    if (!('rawMessages' in value) || value['rawMessages'] === undefined) return false;
    return true;
}

export function DecodedMessageExtInMsgDecodedWalletHighloadV2FromJSON(json: any): DecodedMessageExtInMsgDecodedWalletHighloadV2 {
    return DecodedMessageExtInMsgDecodedWalletHighloadV2FromJSONTyped(json, false);
}

export function DecodedMessageExtInMsgDecodedWalletHighloadV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodedMessageExtInMsgDecodedWalletHighloadV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'subwalletId': json['subwallet_id'],
        'boundedQueryId': json['bounded_query_id'],
        'rawMessages': ((json['raw_messages'] as Array<any>).map(DecodedRawMessageFromJSON)),
    };
}

  export function DecodedMessageExtInMsgDecodedWalletHighloadV2ToJSON(json: any): DecodedMessageExtInMsgDecodedWalletHighloadV2 {
      return DecodedMessageExtInMsgDecodedWalletHighloadV2ToJSONTyped(json, false);
  }

  export function DecodedMessageExtInMsgDecodedWalletHighloadV2ToJSONTyped(value?: DecodedMessageExtInMsgDecodedWalletHighloadV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subwallet_id': value['subwalletId'],
        'bounded_query_id': value['boundedQueryId'],
        'raw_messages': ((value['rawMessages'] as Array<any>).map(DecodedRawMessageToJSON)),
    };
}

