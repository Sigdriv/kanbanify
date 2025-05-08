'use client';

import { Button as HeroButton } from '@heroui/react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'solid' | 'light' | 'bordered';
  isLoading?: boolean;
  color?: 'default' | 'danger';
  isIconOnly?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'bordered',
  isLoading,
  color = 'default',
  isIconOnly = false,
}: Props) {
  return (
    <HeroButton
      onPress={onClick}
      variant={variant}
      className="m-2"
      isLoading={isLoading}
      color={color}
      isIconOnly={isIconOnly}
    >
      {children}
    </HeroButton>
  );
}
