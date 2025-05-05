import { GithubIcon } from '@/components/icons';
import { Code } from '@heroui/code';
import { Link } from '@heroui/link';
import { Snippet } from '@heroui/snippet';
import { button as buttonStyles } from '@heroui/theme';

import { Header1, Text } from '@components';
import { siteConfig } from '@config';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Header1>Make&nbsp;</Header1>
        <br />
        <Header1>websites regardless of your design experience.</Header1>
        <Text>Beautiful, fast and modern React UI library.</Text>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
