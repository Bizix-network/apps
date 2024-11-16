import React, { useEffect, useState } from 'react';
import { Table } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { Codec } from '@polkadot/types/types';

interface Props {
  className?: string;
}

interface Proposal {
  id: number;
  proposer: string;
  ipfsAddress: string;
  name: string;
  version: string;
  templateId: string;
  status: string;
}

function ProposalList ({ className }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const fetchProposals = async () => {
      try {
        const entries = await api.query.bizixCore.proposals.entries();
        
        const proposalList = entries.map(([key, proposal]) => {
          // Utilizează metode specifice pentru a extrage valorile
          const id = Number(key.args[0]);
          const data = proposal.toHuman() as any; // Convertire la format uman
          
          return {
            id,
            proposer: data.proposer || '',
            ipfsAddress: data.ipfsAddress || '',
            name: data.name || '',
            version: data.version || '',
            templateId: data.templateId || '',
            status: data.status || ''
          };
        });

        setProposals(proposalList);
      } catch (error) {
        console.error('Eroare la preluarea propunerilor:', error);
      }
    };

    fetchProposals();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [api]);

  const header = [
    ['ID', 'start'],
    ['Propunător', 'start'],
    ['Nume', 'start'],
    ['Status', 'start']
  ];

  return (
    <div className={className}>
      <h2>Lista Propunerilor</h2>
      <Table
        header={header as any}
        empty='Nu există propuneri'
      >
        {proposals.map(({ id, proposer, name, status }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{proposer}</td>
            <td>{name}</td>
            <td>{status}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default React.memo(ProposalList);