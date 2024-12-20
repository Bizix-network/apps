// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types.js';
import type { LinkOption } from './types.js';

import { createCustom, createDev } from './development.js';

export { CUSTOM_ENDPOINT_KEY } from './development.js';
export * from './testing.js';

function defaultT (keyOrText: string, text?: string | TOptions, options?: TOptions): string {
  return (
    (options?.replace?.host as string) ||
    text?.toString() ||
    keyOrText
  );
}

export function createWsEndpoints (t: TFunction = defaultT): LinkOption[] {
  return [
    ...createCustom(t),
    ...createDev(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
