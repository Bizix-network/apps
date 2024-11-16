// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        CUI: 'u16',
        Company: {
          cui: 'CUI',
          denumire: 'Vec<u8>',
          cod_inmatriculare: 'Vec<u8>',
          euid: 'Vec<u8>',
          stare_firma: 'Vec<u8>',
          adresa_completa: 'Vec<u8>',
          owner: 'Option<AccountId>'
        }
      }
    }
  ],
  rpc: {
    companyRegistry: {
      getCompanyData: {
        description: 'Get company data',
        params: [
          {
            name: 'cui',
            type: 'CUI'
          },
          {
            name: 'caller',
            type: 'AccountId'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Option<Company>'
      },
      getQueryFee: {
        description: 'Get query fee',
        params: [
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Balance'
      },
      // Adăugăm noua metodă RPC
      getCompanyDataIfPaid: {
        description: 'Get company data if paid',
        params: [
          {
            name: 'cui',
            type: 'CUI'
          },
          {
            name: 'caller',
            type: 'AccountId'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Option<Company>'
      }
    }
  },
};

export default definitions;