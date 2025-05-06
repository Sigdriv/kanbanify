import { post } from '@http';

import type { Issue } from '@types';

import { urls } from '../urls';

import { issuesMock } from './mockData';

export function postIssue(issue: Issue): Promise<Issue> {
  return post<Issue>({ url: urls.postIssue, body: issue });
}

// export function getIssues(): Promise<Issue[]> {
//   // return issuesMock;
//   return post<Issue[]>({ url: urls.getIssues });
// }

export function getIssues(): Issue[] {
  return issuesMock;
}
