'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id='comments'
      repo={'rg5668/kunhee-blog'}
      repoId={'R_kgDOKpNAPA'}
      category='General'
      categoryId='DIC_kwDOKpNAPM4CbeRg'
      mapping='pathname'
      term='welcome'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='bottom'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang='ko'
    />
  );
}
