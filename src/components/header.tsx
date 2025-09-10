import Image from 'next/image';
import Link from 'next/link';

import { HeaderMobile } from '@/components/header-mobile';
import { Button } from '@/components/ui/button';
import { cn } from '@/library/utilities';

import { navigation } from '@/data/navigation.json';

export function Header() {
  return (
    <header
      className={cn('sticky top-0 z-50', 'w-full shadow-2xl/5', 'bg-white/90 backdrop-blur-lg', 'dark:bg-black/90')}
    >
      <div className="xl:container xl:mx-auto">
        <div className={cn('flex items-center justify-between w-full h-20')}>
          <div className="flex items-center shrink-0">
            <HeaderMobile />
            <Link href="/">
              <Image
                className={cn('hidden', 'sm:block', 'dark:hidden')}
                src="/static/designee-logo-light.svg"
                width={195}
                height={45}
                alt="Designee"
                draggable={false}
                priority
              />
              <Image
                className={cn('block', 'sm:hidden', 'dark:hidden')}
                src="/static/designee-icon-light.svg"
                width={45}
                height={45}
                alt="Designee"
                draggable={false}
                priority
              />
              <Image
                className={cn('hidden', 'dark:sm:block')}
                src="/static/designee-logo-dark.svg"
                width={195}
                height={45}
                alt="Designee"
                draggable={false}
                priority
              />
              <Image
                className={cn('hidden', 'dark:block', 'dark:sm:hidden')}
                src="/static/designee-icon-dark.svg"
                width={45}
                height={45}
                alt="Designee"
                draggable={false}
                priority
              />
            </Link>
          </div>
          <nav className={cn('flex gap-6', 'max-lg:mr-6')}>
            <div className={cn('flex items-center', 'max-xl:hidden')}>
              {navigation.map(({ slug, label }) => (
                <Button
                  className="font-bold uppercase whitespace-nowrap underline-offset-8"
                  variant="link"
                  key={slug}
                  asChild
                >
                  <Link href={`/#${slug}`}>{label}</Link>
                </Button>
              ))}
            </div>
            <Button
              className={cn('rounded-full', 'bg-theme-primary font-bold uppercase')}
              size="lg"
            >
              <Link href="/#contact">Book A Call</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
