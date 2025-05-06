'use client';

import { Select as HeroSelect, SelectItem } from '@heroui/react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: { label: string; value: string }[];
  isRequired?: boolean;
}

export function Select({ label, value, onChange, items, isRequired }: Props) {
  return (
    <HeroSelect
      label={label}
      items={items}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      defaultSelectedKeys={[value]}
      isRequired={isRequired}
    >
      {items.map(({ label, value }) => (
        <SelectItem key={value}>{label}</SelectItem>
      ))}
    </HeroSelect>
  );
}
