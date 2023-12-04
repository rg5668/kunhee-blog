import { meta } from '@/constant/meta';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${meta.url}/sitemap.xml`,
  };
}
