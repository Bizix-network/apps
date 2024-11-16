// Copyright 2017-2024 @polkadot/apps-bizix authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useState } from 'react';

import { Button, Input, TxButton , InputAddress } from '@polkadot/react-components';
import { useApi, useToggle } from '@polkadot/react-hooks';
import { Available } from '@polkadot/react-query';

function ProposalForm ({ className }: { className: string }) {
  const { api } = useApi();
  const [ipfsAddress, setIpfsAddress] = useState('');
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [isSubmitting, toggleIsSubmitting] = useToggle();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const _onChangeIpfs = useCallback(
    (value: string) => setIpfsAddress(value),
    []
  );

  const _onChangeName = useCallback(
    (value: string) => setName(value),
    []
  );

  const _onChangeVersion = useCallback(
    (value: string) => setVersion(value),
    []
  );

  const _onChangeTemplate = useCallback(
    (value: string) => setTemplateId(value),
    []
  );

  const isValid = ipfsAddress && name && version && templateId && selectedAccount;

  return (
    <div className={className}>
      <h2>Trimite o nouă propunere</h2>
      <InputAddress
        label='Cont utilizator'
        type='account'
        value={selectedAccount}
        onChange={setSelectedAccount}
        placeholder='Selectează contul'
      />
      <Input
        autoFocus
        label='Adresă IPFS'
        onChange={_onChangeIpfs}
        value={ipfsAddress}
      />
      <Input
        label='Nume Aplicație'
        onChange={_onChangeName}
        value={name}
      />
      <Input
        label='Versiune'
        onChange={_onChangeVersion}
        value={version}
      />
      <Input
        label='ID Template Proxmox'
        onChange={_onChangeTemplate}
        value={templateId}
      />
  <TxButton
        accountId={selectedAccount}
        icon='plus'
        isDisabled={!isValid}
        label='Trimite Propunere'
        onStart={toggleIsSubmitting}
        onSuccess={() => {
          setIpfsAddress('');
          setName('');
          setVersion('');
          setTemplateId('');
          setSelectedAccount(null);
          toggleIsSubmitting();
        }}
        params={[ipfsAddress, name, version, templateId]}
        tx={api.tx.bizixCore.submitProposal}
      />
    </div>
  );
}

export default React.memo(ProposalForm);