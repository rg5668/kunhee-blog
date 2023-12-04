import { meta } from '@/constant/meta';
import { getAllPosts, getPost } from '@/service/posts';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPosts(['slug']);

  const slugs = blogPosts.posts.map((v) => 'posts/' + v.slug);
  const urls = [...slugs, ...meta.url_all.map((v) => (v === '/' ? v.replace(v, '') : v))].map((url) => {
    return {
      url: `${meta.url}/${url}`,
    };
  });
  return urls;
}
