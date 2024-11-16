// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { isString } from '@polkadot/util';

import { createWsEndpoints } from '../endpoints/index.js';

interface Endpoint {
  name: string;
  ws: string;
}

describe('check endpoints', (): void => {
  const checks = createWsEndpoints()
    .filter(({ value }) =>
      value &&
      isString(value)
    )
    .map(({ text, value }): Partial<Endpoint> => ({
      name: text as string,
      ws: value
    }))
    .filter((v): v is Endpoint => !!v.ws);

  for (const { name, ws: endpoint } of checks) {
    it(`${name} should be reachable`, (): void => {
      expect(endpoint).toBeTruthy();
    });
  }
});
