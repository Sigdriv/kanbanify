'use client';

import { Button as HeroButton } from '@heroui/react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'solid' | 'light' | 'bordered';
}

export function Button({ onClick, children, variant = 'bordered' }: Props) {
  return (
    <HeroButton onPress={onClick} variant={variant} className=" m-2">
      {children}
    </HeroButton>
  );
}
