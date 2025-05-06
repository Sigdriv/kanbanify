'use client';

import { useState } from 'react';

import { Code } from '@heroui/react';

import { Card, Dialog, Text } from '@components';
import type { DragIssue, Issue, Status } from '@types';

interface Props {
  title: string;
  issues: Issue[];
  columnId: Status;
}

export function Column({ title, issues, columnId }: Props) {
  const [issue, setIssue] = useState<Issue>();
  const [draggedIssue, setDraggedIssue] = useState<DragIssue>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnId: Status) => {
    e.preventDefault();

    if (!draggedIssue) return;

    const { columnId: sourceColumnId } = draggedIssue;

    if (sourceColumnId === columnId) return;

    // TODO: Make API call to update the issue
    // const updatedIssue = {
    //   ...issue,
    //   status: columnId,
    // };

    // mockData = mockData.map((item) =>
    //   item.id === issue.id ? updatedIssue : item
    // );

    setDraggedIssue(null);
  };

  return (
    // TODO: Change colors
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
            onDrag={() => setDraggedIssue({ columnId, issue })}
          />
        ))}
      </div>

      <Dialog
        isOpen={!!issue}
        onClose={() => setIssue(undefined)}
        onConfirm={() => {}}
        header={issue?.title ?? ''}
        body={issue?.description ?? ''}
        confirmText="Save"
      />
    </div>
  );
}
