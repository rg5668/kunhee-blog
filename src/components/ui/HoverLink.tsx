'use client';

import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

type HoverLinkProps = {
  href: string;
  active?: boolean;
  animation?: boolean;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'Link'>;

export default function HoverLink({ active, animation = false, children, ...props }: HoverLinkProps) {
  let { className, ...rest } = props;
  return (
    <Link
      className={`${
        animation ? `hover-underline-animation` : ``
      } after:dark:bg-white after:bg-black hover:opacity-[1] ${
        active ? 'opacity-100 active' : 'opacity-[0.7]'
      } ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
