export const urls = {
  postIssue: '/api/issue',
  getIssues: '/api/issues',
  patchIssue: '/api/issue',
  deleteIssue: (id: string) => `/api/issues/${id}`,
} as const;
