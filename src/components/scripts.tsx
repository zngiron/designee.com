'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

import { env } from '@/library/environment';

export function Scripts() {
  return (
    <>
      <GoogleAnalytics gaId={env.ANALYTICS} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Front-End Development',
          url: env.DOMAIN,
          image: `${env.DOMAIN}/static/frontend-dev-icon.png`,
        })}
      </script>
    </>
  );
}
