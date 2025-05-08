import { del, get, patch, post } from '@http';
import type { Issue } from '@types';

import { urls } from '../urls';

export function postIssue(issue: Issue): Promise<Issue> {
  return post({ url: urls.postIssue, body: issue });
}

export function getIssues(): Promise<Issue[]> {
  return get<Issue[]>({ url: urls.getIssues });
}

export function patchIssue(issue: Issue): Promise<{ message: string }> {
  return patch<{ message: string }>({ url: urls.patchIssue, body: issue });
}

export interface DeleteIssueParams {
  id: string;
}

export function deleteIssue({
  id,
}: DeleteIssueParams): Promise<{ message: string }> {
  return del({ url: urls.deleteIssue(id) });
}
