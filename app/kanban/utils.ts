import type { Issue, Status } from '@types';

export function getIssuesByStatus(issues: Issue[], status: Status) {
  return issues.filter((issue) => issue.status === status);
}

export const initialIssue: Issue = {
  id: '',
  title: '',
  status: 'backlog',
  description: '',
  variant: 'task',
};
