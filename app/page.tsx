'use client';

import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import { GithubIcon } from '@components';
import { Header1, Text } from '@components';
import { siteConfig } from '@config';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Header1>Kanbanify</Header1>

      <Text>
        A simple Kanban board built with Next.js, TypeScript, and Tailwind CSS
        in the frontend, and Go in the backend.
      </Text>

      <div className="flex gap-2">
        <Link
          isExternal
          href={siteConfig.links.github}
          className={buttonStyles({ variant: 'bordered' })}
        >
          <GithubIcon className="mr-2" />
          GitHub
        </Link>

        <Link
          href={siteConfig.links.kanban}
          className={buttonStyles({ variant: 'solid' })}
        >
          Kanban board
        </Link>
      </div>
    </section>
  );
}
