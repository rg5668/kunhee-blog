import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { cache } from 'react';
import { PostProps } from '@/types/post';
import { category } from '@/constant/post';

const postsDirectory = path.join(process.cwd(), '__posts');

export async function getPostSlugs() {
  const subdirectories = await fs.readdir(postsDirectory);

  const allFiles = await Promise.all(
    subdirectories.map(async (subdirectory) => {
      const files = await fs.readdir(path.join(postsDirectory, subdirectory));
      return files.map((file) => path.join(subdirectory, file));
    }),
  );

  const flattenedFiles = allFiles.flat();

  return {
    files: flattenedFiles,
  };
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const [subdirectory, fileName] = realSlug.split('/');
  const fullPath = path.join(postsDirectory, subdirectory, `${fileName}.md`);

  try {
    await fs.access(fullPath);

    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Record<string, string> = {};

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }
      if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });
    return items;
  } catch (error) {
    return {
      slug: '404',
    };
  }
}
export const getAllPosts = cache(async (fields: string[] = []) => {
  const { files } = await getPostSlugs();

  const posts = await Promise.all(
    files.map(async (filePath: string) => {
      const post = await getPostBySlug(filePath, fields);
      return post;
    }),
  );

  return {
    posts: posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
    category: category,
  };
});

export const getPost = async (slug: string) => {
  try {
    const allPosts = (await getAllPosts([
      'title',
      'slug',
      'description',
      'date',
      'lastmod',
      'weight',
      'content',
    ])) as unknown as PostProps;
    const { posts } = allPosts;
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error(`해당하는 포스트를 찾을 수 없습니다.`);

    const index = posts.indexOf(post);
    const prev = index > 0 ? posts[index - 1] : null;
    const next = index < posts.length ? posts[index + 1] : null;
    return { ...post, next, prev, totalLength: posts.length, currentIndex: index + 1 };
  } catch (error) {
    return {
      slug: '404',
    };
  }
};
