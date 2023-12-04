'use client';

import { useEffect, useState } from 'react';
import { HiQueueList, HiXMark } from 'react-icons/hi2';
import dynamic from 'next/dynamic';
import TocContent from './TocContent';
import { getIntersectionObserver } from '@/utill/getIntersectionObserver';
const ReactResponsive = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export default function TableOfContents() {
  const [modal, setModal] = useState(false);
  const [headingEls, setHeadingEls] = useState<Element[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      const headingElements = Array.from(article.querySelectorAll('h2, h3, h4'));
      setHeadingEls(headingElements);
      setActiveId(headingElements[0].id);

      const observer = getIntersectionObserver(setActiveId);
      headingElements.map((element) => {
        observer.observe(element);
      });
    }
  }, []);

  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <ReactResponsive minWidth={768}>
        <section className='fixed w-48 px-4 py-6 transition -md:hidden scrollbar-hide top-20 right-10'>
          <TocContent headingEls={headingEls} activeId={activeId} />
        </section>
      </ReactResponsive>
      <ReactResponsive maxWidth={767}>
        <button
          onClick={toggleModal}
          className='fixed z-20 flex items-center justify-center p-1 transition border rounded-full shadow-lg right-3.5 hover:scale-105 bg-yellow border-slate bottom-14'
        >
          {!modal ? <HiQueueList className='w-5 h-5' /> : <HiXMark className='w-5 h-5' />}
        </button>
        {modal && (
          <>
            <div
              onClick={toggleModal}
              className='fixed top-0 bottom-0 left-0 right-0 z-20 w-full h-screen mx-auto overflow-hidden transition bg-black opacity-50'
            />
            <section className='bg-white overflow-scroll transition z-20 p-6 fixed inset-0 m-auto w-10/12 h-fit max-h-[75%] border-2 border-slate bg-bg rounded-xl'>
              <TocContent headingEls={headingEls} activeId={activeId} />
            </section>
          </>
        )}
      </ReactResponsive>
    </>
  );
}
