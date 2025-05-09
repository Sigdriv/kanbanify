'use client';

import type { ReactNode } from 'react';

import { subtitle, title } from '..';

interface Props {
  children: ReactNode;
}

export function Header1({ children }: Props) {
  return (
    <div className="mb-2">
      <span className={title()}>{children}</span>
    </div>
  );
}

export function Text({ children }: Props) {
  return (
    <div className="mb-1">
      <div className={subtitle()}>{children}</div>
    </div>
  );
}
