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
/**
 * 
 * @export
 * @interface BlockchainConfig5
 */
export interface BlockchainConfig5 {
    /**
     * 
     * @type {string}
     * @memberof BlockchainConfig5
     */
    blackholeAddr?: string;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig5
     */
    feeBurnNom: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig5
     */
    feeBurnDenom: number;
}

/**
 * Check if a given object implements the BlockchainConfig5 interface.
 */
export function instanceOfBlockchainConfig5(value: object): value is BlockchainConfig5 {
    if (!('feeBurnNom' in value) || value['feeBurnNom'] === undefined) return false;
    if (!('feeBurnDenom' in value) || value['feeBurnDenom'] === undefined) return false;
    return true;
}

export function BlockchainConfig5FromJSON(json: any): BlockchainConfig5 {
    return BlockchainConfig5FromJSONTyped(json, false);
}

export function BlockchainConfig5FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig5 {
    if (json == null) {
        return json;
    }
    return {
        
        'blackholeAddr': json['blackhole_addr'] == null ? undefined : json['blackhole_addr'],
        'feeBurnNom': json['fee_burn_nom'],
        'feeBurnDenom': json['fee_burn_denom'],
    };
}

  export function BlockchainConfig5ToJSON(json: any): BlockchainConfig5 {
      return BlockchainConfig5ToJSONTyped(json, false);
  }

  export function BlockchainConfig5ToJSONTyped(value?: BlockchainConfig5 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'blackhole_addr': value['blackholeAddr'],
        'fee_burn_nom': value['feeBurnNom'],
        'fee_burn_denom': value['feeBurnDenom'],
    };
}

