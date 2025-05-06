'use client';

// import { ThemeSwitch } from '@/components/theme-switch';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { Link } from '@heroui/react';

import { GithubIcon } from '@components';
import { siteConfig } from '@config';

import { Text } from './typography';

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <Link className="flex justify-start items-center gap-1" href="/">
          <Text>Kanbanify</Text>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>

          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
