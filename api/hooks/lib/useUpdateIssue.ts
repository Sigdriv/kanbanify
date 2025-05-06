import type { TkError } from '@http';

import { useMutation } from '@tanstack/react-query';

import { patchIssue } from '@api';
import type { Issue } from '@types';

export function useUpdateIssue() {
  return useMutation<{ message: string }, TkError, Issue>({
    mutationFn: patchIssue,
    onSuccess: () => {},
  });
}
