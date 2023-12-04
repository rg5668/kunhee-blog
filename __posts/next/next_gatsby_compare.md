---
id: 1
category: 'next'
title: 정적 블로그 Gatsby.js와 Next.js 간단 비교
author: 건희
date: '2023-12-05'
description: '정적 블로그 Gatsby.js와 Next.js 간단 비교'
coverImage: /post_images/next/kunhee-blog.png
---

### 블로그 개발 (목적)

- 1️⃣ 기존에는 Tistory를 통해 글을 써왔지만, Next.js(SSG)를 이용해 정적 블로그 개발
- 2️⃣ **개인 기술 블로그를 직접 운영하고 기술적인 경험과 지식을 기록을 위해서이다.**

### Gatsby 간략 소개

[Gatsby.js 공식 문서](https://www.gatsbyjs.com/docs/)

- React, GraphQl, react-router등을 결합하여 개발자가 직접 webpack 등의 개발환경을 설정할 필요없이 빠르게 웹 사이트를 구축하기 비교적 쉽습니다.
- Gatsby는 정적으로 유지되는 사이트를 구축하는데 많이 사용됩니다. (랜딩 페이지, 포토폴리오 등)

### Next.js 간략 소개

[Next.js 공식 문서](https://nextjs.org/docs/)

- Next.js는 SSR 주로 구축하는데 많이 사용됩니다. 또한 정적 페이지 생성도 지원합니다.
- 빌드 시 이미지를 자동으로 최적화 해줍니다.

### Gatsby VS Next

- Post가 많아질수록 빌드시간, 파일 사이즈는 기하급수적으로 늘어나게 되는데, Gatsby 블로그 개발하신분들을 찾아보니 약 10개 이상 게시글을 배포할때 파일 사이즈 약 2GB 기준으로 8분 ~ 10분 사이에 시간이 걸린다고 한다.
- 현재 현재 이 블로그는 SSG로 개발했지만 SSG도 마찬가지로 컨텐츠 양이 증가한다고 했을때, SSG 방식보다는 SSR 방식을 사용하는게 좋을거 같다.
