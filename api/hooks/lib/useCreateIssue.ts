import type { TkError } from '@http';

import { useMutation } from '@tanstack/react-query';

import { postIssue } from '@api';
import type { Issue } from '@types';

interface Params {
  onSuccess: () => void;
}

export function useCreateIssue({ onSuccess }: Params) {
  return useMutation<Issue, TkError, Issue>({
    mutationFn: postIssue,
    onSuccess: () => {
      onSuccess();
    },
  });
}
