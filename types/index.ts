import type { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Issue = {
  id: string;
  title: string;
  status: Status;
  description: string;
  variant: Variant;
};

export type Status = 'backlog' | 'inProgress' | 'done';

export type Variant = 'task' | 'bug' | 'chore';

export type DragIssue = {
  columnId: string;
  issue: Issue;
} | null;
