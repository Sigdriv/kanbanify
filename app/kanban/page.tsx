'use client';

import { useIssues } from '@hooks';

import { Column } from './Column';
import { NewIssue } from './NewIssue';
import { getIssuesByStatus } from './utils';

export default function Kanban() {
  const { data = [] } = useIssues();

  const backlogTasks = getIssuesByStatus(data, 'backlog');
  const inProgressTasks = getIssuesByStatus(data, 'inProgress');
  const doneTasks = getIssuesByStatus(data, 'done');

  return (
    <div>
      <NewIssue />

      <div className="grid grid-cols grid-cols-3 gap-4 max-w-7xl">
        <Column
          title="Backlog / ToDo"
          issues={backlogTasks}
          columnId="backlog"
        />
        <Column
          title="In progress"
          issues={inProgressTasks}
          columnId="inProgress"
        />
        <Column title="Done" issues={doneTasks} columnId="done" />
      </div>
    </div>
  );
}
