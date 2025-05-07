'use client';

import { useState } from 'react';

import { Code, addToast } from '@heroui/react';

import { Card, Dialog, Select, Text, TextInput } from '@components';
import { useUpdateIssue } from '@hooks';
import { checkSchemaError } from '@schema';
import type { Issue, Status, Variant } from '@types';

import { DeleteIssueDialog } from './DeleteIssueDialog';
import { useSchema } from './useSchema';
import { statusOptions, variantOptions } from './utils';

interface Props {
  title: string;
  issues: Issue[];
  columnId: Status;
}

export function Column({ title, issues, columnId }: Props) {
  const [issue, setIssue] = useState<Issue>();
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
  const [deleteIssueId, setDeleteIssueId] = useState<string>();

  const { schema } = useSchema();
  const { mutate: updateIssue, isPending } = useUpdateIssue({
    onSuccess: () => {
      setIssue(undefined);
      addToast({
        title: 'Success',
        description: 'Issue updated successfully',
        color: 'success',
      });
    },
  });

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnId: Status) => {
    e.preventDefault();

    const data = e.dataTransfer.getData('application/json');

    if (!data) return;

    const dragData = JSON.parse(data);

    const { columnId: sourceColumnId, issue } = dragData;

    if (sourceColumnId === columnId) return;

    if (issue) {
      updateIssue({ ...issue, status: columnId });
    }
  };

  const fieldError = {
    title: checkSchemaError(schema.title, issue?.title),
    description: checkSchemaError(schema.description, issue?.description),
  };

  const errors = Object.values(fieldError).filter((error) => !!error);

  const handleOnSubmit = () => {
    if (errors.length === 0 && issue) {
      updateIssue(issue);
    }

    setIsSubmitAttempted(true);
  };

  return (
    <div
      className="bg-[#3f3f46] border-slate-700 rounded-lg max-w-lg min-h-screen p-2 gap-3 flex flex-col"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, columnId)}
    >
      <div className="p-2 gap-2 flex flex-row items-center">
        <Text>{title}</Text>
        <Code>{issues.length}</Code>
      </div>

      <div className="grid gap-4">
        {issues.map((issue) => (
          <Card
            id={issue.id}
            title={issue.title}
            status={issue.status}
            key={JSON.stringify(issue)}
            onClick={() => setIssue(issue)}
            description={issue.description}
            variant={issue.variant}
            onDrag={(e) =>
              e.dataTransfer.setData(
                'application/json',
                JSON.stringify({ columnId, issue })
              )
            }
          />
        ))}
      </div>

      <DeleteIssueDialog
        id={deleteIssueId || ''}
        setId={(value) => setDeleteIssueId(value)}
        onSuccess={() => {
          setDeleteIssueId(undefined);
          setIssue(undefined);
        }}
      />

      <Dialog
        isOpen={!!issue}
        onClose={() => setIssue(undefined)}
        onConfirm={handleOnSubmit}
        header={issue?.title ?? ''}
        confirmText="Save"
        onCancel={() => setIssue(undefined)}
        cancelText="Cancel"
        isLoading={isPending}
        onDelete={() => setDeleteIssueId(issue?.id)}
      >
        {!!issue && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <Select
                label="Status"
                value={issue.status}
                onChange={(value) =>
                  setIssue({ ...issue, status: value as Status })
                }
                items={statusOptions}
                isRequired
              />

              <Select
                label="Variant"
                value={issue.variant}
                onChange={(value) =>
                  setIssue({ ...issue, variant: value as Variant })
                }
                items={variantOptions}
                isRequired
              />
            </div>

            <TextInput
              label="Title"
              type="Text"
              value={issue.title}
              onChange={(value) => setIssue({ ...issue, title: value })}
              isRequired
              isError={!!fieldError.title && isSubmitAttempted}
              errorText={fieldError.title}
            />

            <TextInput
              errorText={fieldError.description}
              label="Description"
              type="Text"
              value={issue.description}
              onChange={(value) => setIssue({ ...issue, description: value })}
              multiline
              isRequired
              isError={!!fieldError.description && isSubmitAttempted}
            />
          </div>
        )}
      </Dialog>
    </div>
  );
}
