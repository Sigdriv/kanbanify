import { useState } from 'react';

import { Button, Dialog, Select, TextInput } from '@components';
import type { Issue, Status } from '@types';

import { initialIssue } from './utils';

export function NewIssue() {
  const [newIssue, setNewIssue] = useState<Issue>(initialIssue);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: 'Backlog', value: 'backlog' },
    { label: 'In progress', value: 'inProgress' },
    { label: 'Done', value: 'done' },
  ];

  return (
    <div className="flex justify-end ">
      <Button onClick={() => setIsOpen(true)} variant="solid">
        New issue
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {}}
        onCancel={() => {
          setIsOpen(false);
          setNewIssue(initialIssue);
        }}
        cancelText="Cancel"
        header="New issue"
        confirmText="Create"
      >
        <Select
          label="Status"
          value={newIssue.status}
          onChange={(value) =>
            setNewIssue({ ...newIssue, status: value as Status })
          }
          items={options}
          isRequired
        />

        <TextInput
          label="Tittel"
          type="Text"
          value={newIssue.title}
          onChange={(value) => setNewIssue({ ...newIssue, title: value })}
        />

        <TextInput
          label="Description"
          type="Text"
          value={newIssue.description}
          onChange={(value) => setNewIssue({ ...newIssue, description: value })}
          multiline
        />
      </Dialog>
    </div>
  );
}
