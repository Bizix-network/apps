// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  runtime: {
    BizixApi: [
      {
        methods: {
          getValue: {
            description: 'Get a value',
            params: [],
            type: 'u32'
          }
          // Adăugați alte metode ale BizixApi aici
        },
        version: 1
      }
    ],
    CompanyRegistryApi: [
      {
        methods: {
          getCompanyData: {
            description: 'Get company data',
            params: [
              {
                name: 'cui',
                type: 'Vec<u8>'
              }
            ],
            type: 'Option<Vec<u8>>'
          },
          getQueryFee: {
            description: 'Get query fee',
            params: [],
            type: 'Balance'
          }
          // Adăugați alte metode ale CompanyRegistryApi aici
        },
        version: 1
      }
    ]
  },
  rpc: {
    bizix: {
      getValue: {
        description: 'Get a value',
        params: [],
        type: 'u32'
      }
    },
    companyRegistry: {
      getCompanyData: {
        description: 'Get company data',
        params: [
          {
            name: 'cui',
            type: 'Vec<u8>'
          }
        ],
        type: 'Option<Vec<u8>>'
      },
      getQueryFee: {
        description: 'Get query fee',
        params: [],
        type: 'Balance'
      }
    }
  },
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        // adăugați aici orice tipuri personalizate dacă este necesar
      }
    }
  ],
};

export default definitions;