import { useState } from 'react';

import { addToast } from '@heroui/react';

import { Button, Dialog, Select, TextInput } from '@components';
import { useCreateIssue } from '@hooks';
import { checkSchemaError } from '@schema';
import type { Issue, Status } from '@types';

import { useSchema } from './useSchema';
import { initialIssue, statusOptions } from './utils';

export function NewIssue() {
  const [newIssue, setNewIssue] = useState<Issue>(initialIssue);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const { schema } = useSchema();
  const { mutate: createIssue, isPending } = useCreateIssue({
    onSuccess: () => {
      setIsOpen(false);
      setNewIssue(initialIssue);
      setIsSubmitAttempted(false);
      addToast({
        title: 'Success',
        description: 'Issue created successfully',
        color: 'success',
      });
    },
  });

  const fieldError = {
    title: checkSchemaError(schema.title, newIssue.title),
    description: checkSchemaError(schema.description, newIssue.description),
  };

  const errors = Object.values(fieldError).filter((error) => !!error);

  const handleCreateIssue = () => {
    if (errors.length === 0) {
      createIssue(newIssue);
    }

    setIsSubmitAttempted(true);
  };

  return (
    <div className="flex justify-end ">
      <Button
        onClick={() => {
          setIsOpen(true);
          setNewIssue(initialIssue);
          setIsSubmitAttempted(false);
        }}
        variant="solid"
      >
        New issue
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleCreateIssue}
        onCancel={() => setIsOpen(false)}
        cancelText="Cancel"
        header="Create new issue"
        confirmText="Create"
        isLoading={isPending}
      >
        <Select
          label="Status"
          value={newIssue.status}
          onChange={(value) =>
            setNewIssue({ ...newIssue, status: value as Status })
          }
          items={statusOptions}
          isRequired
        />

        <TextInput
          label="Title"
          type="Text"
          value={newIssue.title}
          onChange={(value) => setNewIssue({ ...newIssue, title: value })}
          isRequired
          isError={!!fieldError.title && isSubmitAttempted}
          errorText={fieldError.title}
        />

        <TextInput
          errorText={fieldError.description}
          label="Description"
          type="Text"
          value={newIssue.description}
          onChange={(value) => setNewIssue({ ...newIssue, description: value })}
          multiline
          isRequired
          isError={!!fieldError.description && isSubmitAttempted}
        />
      </Dialog>
    </div>
  );
}
