import type { Issue, Status } from '@types';

export function getIssuesByStatus(issues: Issue[], status: Status) {
  const fitleredIssues = issues.filter((issue) => issue.status === status);

  return fitleredIssues.toSorted((a, b) => {
    return a.id.localeCompare(b.id);
  });
}

export const initialIssue: Issue = {
  id: '',
  title: '',
  status: 'backlog',
  description: '',
  variant: 'task',
};

export const statusOptions = [
  { label: 'Backlog', value: 'backlog' },
  { label: 'In progress', value: 'inProgress' },
  { label: 'Done', value: 'done' },
];

export const variantOptions = [
  { label: 'Bug', value: 'bug' },
  { label: 'Task', value: 'task' },
  { label: 'Chore', value: 'chore' },
];
