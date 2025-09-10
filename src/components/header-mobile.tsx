'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/library/utilities';

import { navigation } from '@/data/navigation.json';
import { useLayoutStore } from '@/stores/layout.stores';

export function HeaderMobile() {
  const { isMenuOpen, onToggleMenu, onCloseMenu } = useLayoutStore();

  useEffect(() => {
    const handleResize = () => {
      onCloseMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    onCloseMenu,
  ]);

  return (
    <>
      <Button
        className={cn(
          'relative z-50 ',
          'size-20',
          'cursor-pointer',
          'hover:bg-transparent',
          'xl:hidden',
          'dark:hover:bg-transparent',
        )}
        variant="ghost"
        size="icon"
        onClick={onToggleMenu}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isMenuOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="relative"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <X
              className="size-6"
              strokeWidth={3}
            />
          ) : (
            <Menu
              className="size-6"
              strokeWidth={3}
            />
          )}
          <span className="sr-only">{isMenuOpen ? 'Close' : 'Open'}</span>
        </motion.div>
      </Button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={cn(
              'absolute inset-0 z-10',
              'flex flex-col pt-20 w-full h-dvh',
              'bg-white/90 backdrop-blur-lg',
              'dark:bg-black/90',
            )}
          >
            {navigation.map(({ slug, label }, index) => (
              <motion.div
                key={slug}
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                }}
              >
                <Link
                  href={`/#${slug}`}
                  className={cn(
                    'block p-6',
                    'font-display font-extrabold text-4xl uppercase whitespace-nowrap',
                    'hover:text-theme-primary',
                  )}
                  onClick={onCloseMenu}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
