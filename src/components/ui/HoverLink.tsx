'use client';

import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type HoverLinkProps = {
  href?: string;
  active?: boolean;
  animation?: boolean;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'Link'> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function HoverLink({ active, animation = false, children, ...props }: HoverLinkProps) {
  const { className, ...rest } = props;
  const combineClassName = `
    ${animation ? 'hover-underline-animation' : ''}
    after:dark:bg-white after:bg-black 
    hover:opacity-[1] ${active ? 'opacity-100 active' : 'opacity-[0.7]'}
    ${className}
    `;

  return rest.href ? (
    <Link className={combineClassName} href={rest.href} {...rest}>
      {children}
    </Link>
  ) : (
    <button className={combineClassName} {...rest}>
      {children}
    </button>
  );
}
