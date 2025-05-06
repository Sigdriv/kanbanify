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
  createdAt?: string;
  updatedAt?: string;
};

export type Status = 'backlog' | 'inProgress' | 'done';

export type Variant = 'task' | 'bug' | 'chore';
