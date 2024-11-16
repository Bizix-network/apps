// Copyright 2017-2024 @polkadot/apps-bizix authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useRef } from 'react';
import { Route, Routes } from 'react-router';

import { Tabs } from '@polkadot/react-components';
import { useTranslation } from './translate.js';

import ProposalForm from './ProposalForm.js';
import ProposalList from './ProposalList.js';

function BizixApp ({ basePath, className = '' }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const itemsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    },
    {
      name: 'submit',
      text: t('Submit Proposal')
    }
  ]);

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        items={itemsRef.current}
      />
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <ProposalForm className={className} />
            }
            path='submit'
          />
          <Route
            element={
              <ProposalList />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(BizixApp);