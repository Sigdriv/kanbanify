import { useState } from 'react';

import { addToast } from '@heroui/react';

import { Button, Dialog, Select } from '@components';
import { useUpdateIssue } from '@hooks';
import type { Issue, Variant } from '@types';

import { NewIssueDialog } from './NewIssueDialog';
import { initialIssue, variantOptions } from './utils';

export function NewIssue() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChangeVariantOpen, setIsChangeVariantOpen] = useState(false);
  const [createdIssue, setCreatedIssue] = useState<Issue>(initialIssue);

  const { mutate: updateIssue, isPending } = useUpdateIssue({
    onSuccess: () => {
      setIsChangeVariantOpen(false);
      setCreatedIssue(initialIssue);
      addToast({
        title: 'Success',
        description: 'Issue updated successfully',
        color: 'success',
      });
    },
  });

  return (
    <div className="flex justify-end ">
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        variant="solid"
      >
        New issue
      </Button>

      <NewIssueDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsChangeVariantOpen={setIsChangeVariantOpen}
        setCreatedIssue={setCreatedIssue}
      />

      <Dialog
        isOpen={isChangeVariantOpen}
        onClose={() => setIsChangeVariantOpen(false)}
        onConfirm={() =>
          updateIssue({
            ...createdIssue,
            variant: createdIssue.variant || 'bug',
          })
        }
        onCancel={() => setIsChangeVariantOpen(false)}
        cancelText="Cancel"
        header="Change issue variant"
        confirmText="Update"
        isLoading={isPending}
      >
        <Select
          label="Variant"
          value={createdIssue.variant || ''}
          onChange={(value) =>
            setCreatedIssue({ ...createdIssue, variant: value as Variant })
          }
          items={variantOptions}
          isRequired
        />
      </Dialog>
    </div>
  );
}
