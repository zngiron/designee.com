import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/library/utilities';

import { navigation } from '@/data/navigation.json';

export function Header() {
  return (
    <header
      className={cn('sticky top-0 z-50', 'w-full shadow-2xl/5', 'bg-white/90 backdrop-blur-lg', 'dark:bg-black/90')}
    >
      <div className={cn('container', 'px-6 mx-auto ')}>
        <div className="flex items-center justify-between w-full h-20">
          <Link href="/">
            <Image
              className={cn('hidden', 'md:block', 'dark:hidden')}
              src="/static/designee-logo-light.svg"
              width={195}
              height={45}
              alt="Designee"
              draggable={false}
              priority
            />
            <Image
              className={cn('block', 'md:hidden', 'dark:hidden')}
              src="/static/designee-icon-light.svg"
              width={45}
              height={45}
              alt="Designee"
              draggable={false}
              priority
            />
            <Image
              className={cn('hidden', 'dark:md:block')}
              src="/static/designee-logo-dark.svg"
              width={195}
              height={45}
              alt="Designee"
              draggable={false}
              priority
            />
            <Image
              className={cn('hidden', 'dark:block', 'dark:md:hidden')}
              src="/static/designee-icon-dark.svg"
              width={45}
              height={45}
              alt="Designee"
              draggable={false}
              priority
            />
          </Link>
          <nav className="flex gap-6">
            <div className="flex items-center">
              {navigation.map(({ slug, label }) => (
                <Button
                  className="font-bold whitespace-nowrap underline-offset-8"
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
