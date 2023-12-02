'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProviders({ children, ...props }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <NextThemesProvider storageKey={'theme'} attribute='class' {...props}>
      {children}
    </NextThemesProvider>
  );
}
