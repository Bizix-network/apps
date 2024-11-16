import type { Route, TFunction } from './types.js';

import Component from '@polkadot/apps-bizix';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'tx.bizixCore.submitProposal'
      ]
    },
    group: 'governance',
    icon: 'code',
    name: 'bizix',
    text: t('nav.bizix', 'Bizix Proposals', { ns: 'apps-routing' })
  };
}