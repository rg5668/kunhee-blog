import NotFound from '@/app/not-found';
import { getPost } from '@/service/posts';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';
import { PostType } from '@/types/post';
import PostBox from '@/components/posts/PostBox';
import { Metadata } from 'next';
import { meta } from '@/constant/meta';
import GiscusComments from '@/components/posts/GiscusComments';
import ProgressBar from '@/components/posts/ProgressBar';
import TableOfContents from '@/components/posts/TableOfContents';

interface PostSlug {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params: { slug } }: PostSlug): Promise<Metadata> {
  const post = (await getPost(slug.join('/'))) as PostType;
  return {
    metadataBase: new URL(meta.url),
    title: post.title,
    description: post.description,
    openGraph: {
      title: {
        template: `${post.title}`,
        default: `${post.title}`,
      },
      description: `${post.description}`,
      url: `${meta.url}/${post.slug}`,
      siteName: `${post.title}`,
      images: [
        {
          url: `${post.coverImage}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: {
        template: `${post.title}`,
        default: `${post.title}`,
      },
      description: `${post.description}`,
      site: `${meta.url}/${post.slug}`,
      images: {
        url: `${post.coverImage}`,
        alt: '',
      },
    },
  };
}

export default async function Post({ params }: PostSlug) {
  const { slug } = params;
  const post = (await getPost(slug.join('/'))) as PostType;

  if (post.slug === '404') return <NotFound />;

  return (
    <>
      <ProgressBar />

      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={''}
          width={300}
          height={300}
          className='absolute top-[50px] w-full h-[140px] left-0 opacity-30 object-cover'
        />
      )}
      <article className='relative'>
        <h1 className='py-10 text-2xl font-bold text-center'>{post.title}</h1>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={{
            table: ({ children }) => <table className='px-10 mt-0 break-all rounded-md bg-bg'>{children}</table>,
            th: ({ children }) => <th className='p-2 text-indigo'>{children}</th>,
            tr: ({ children }) => <tr className='border-gray'>{children}</tr>,
            td: ({ children }) => <td className='p-2'>{children}</td>,
            pre: ({ children }) => <pre className='relative z-0 p-0 m-0 mb-2'>{children}</pre>,
            strong: ({ children }) => <strong className='font-bold text-teal'>{children}</strong>,
            img: (image) => (
              <Image
                className='object-cover w-full my-1 max-h-80'
                src={image.src || ''}
                alt={image.alt || ''}
                width={1000}
                height={1000}
              />
            ),
            h1: ({ children }) => (
              <>
                <BsStars className='w-5 h-5 mt-12 mb-1 text-light-yellow' />
                <h2
                  className='text-yellow mt-0 mb-2 text-[36px] border-b border-b-light-yellow pb-3'
                  id={String(children).replaceAll(' ', '-')}
                >
                  {children}
                </h2>
              </>
            ),
            h2: ({ children }) => (
              <>
                <BsStars className='w-4 h-4 mt-12 mb-1 text-light-yellow' />
                <h2
                  className='text-yellow mt-0 mb-2 text-[28px] border-b border-b-light-yellow pb-3'
                  id={String(children).replaceAll(' ', '-')}
                >
                  {children}
                </h2>
              </>
            ),
            h3: ({ node, children, ...props }) => (
              <>
                <BsStars className='w-3 h-3 mt-12 text-blue' />
                <h3
                  className='text-blue mt-0 mb-3 text-[22px] border-b border-b-blue pb-2'
                  {...props}
                  id={String(children).replaceAll(' ', '-')}
                >
                  {children}
                </h3>
              </>
            ),
            h4: ({ node, children, ...props }) => (
              <h4 className='mt-5 mb-0 text-base text-indigo' {...props} id={String(children).replaceAll(' ', '-')}>
                {children}
              </h4>
            ),
            p: ({ node, className, ...props }) => <p {...props} className='mt-1 mb-5' />,
            blockquote: ({ node, className, ...props }) => (
              <blockquote
                {...props}
                className='text-text bg-bg mt-1 py-3 border-l-4 rounded-r-md border-slate [&>p::before]:hidden [&>p]:my-0 [&>p]:not-italic'
              />
            ),
            input: ({ node, className, ...props }) => (
              <input className={`${className} my-0 mr-1 mt-1 w-4 h-4`} {...props} />
            ),
            a: ({ node, className, ...props }) => (
              <a className={`${className} text-slate font-light`} {...props} target='_blank' />
            ),
            del: ({ node, className, ...props }) => <del className={`${className} text-slate`} {...props} />,
            li: ({ children }) => <li className='marker:text-indigo marker:font-bold my-3 [&>p]:my-0'>{children}</li>,
            ol: ({ children, ...props }) => (
              <ol className='mt-2 mb-4 marker:text-indigo marker:font-bold' {...props}>
                {children}
              </ol>
            ),
            ul: ({ children }) => <ul className='pl-5 my-0'>{children}</ul>,
            hr: ({ children }) => <hr className='my-3 border-gray'>{children}</hr>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
      <TableOfContents />

      <div className='py-5'>
        <GiscusComments />
      </div>
      <div className='flex flex-col gap-2'>
        {post.prev && <PostBox post={post.prev} prev />}
        {post.next && <PostBox post={post.next} />}
      </div>
    </>
  );
}
