'use client';

import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as HeroCard,
} from '@heroui/react';

import type { Status, Variant } from '@types';

import { Bug, Chore } from './icons';
import { Text } from './typography';

interface Props {
  title: string;
  id: string;
  status: Status;
  onClick: () => void;
  description: string;
  variant: Variant;
  onDrag: () => void;
}

export function Card({
  title,
  id,
  onClick,
  status,
  description,
  variant,
  onDrag,
}: Props) {
  return (
    <HeroCard draggable onDragStart={onDrag} isPressable onClick={onClick}>
      <CardHeader>
        <Text>{title}</Text>
      </CardHeader>

      <CardBody>
        <p>{description}</p>
      </CardBody>

      <CardFooter>
        <div className="flex justify-between w-full">
          <p>Something</p>

          <div className="flex gap-2">
            {variant === 'bug' && <Bug size={24} />}
            {variant === 'chore' && <Chore size={24} />}

            <p className={status === 'done' ? ' line-through' : ''}>{id}</p>
          </div>
        </div>
      </CardFooter>
    </HeroCard>
  );
}
