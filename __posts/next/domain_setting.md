---
id: 2
category: 'next'
title: Next.js 정적 블로그 도메인 설정하기
author: 건희
date: '2023-12-06'
description: 'Vercel을 통해 가비아에서 도메인 구입 후 Dmain 변경하기'
coverImage: /post_images/next/gabia.png
---

### 가비아 (Gabia)

[가비아 웹사이트](https://www.gabia.com/)

"다른 사이트, 무료 사이트들도 많았지만 가비아를 선택한 이유는 같은 도메인이여도 가격 차이가 나지 않았고 영어를 잘하지 못하는 나에겐 좋은 선택이었다 👍"

1️⃣ 내가 생각해둔 도메인을 검색하고 마음에 드는 도메인을 결제 한다.

![img](/post_images/next/gabia.png)

2️⃣ 결제 후 DNS 관리 페이지로 이동
홈 -> DNS 정보 -> DNS Button Click!

![img](/post_images/next/gabia-domain.png)

3️⃣ 가비아 등록 도메인 -> DNS 관리 -> 레코드 수정 Click!
타입 A, CNAME 설정을 넣어주면 된다. (설정값은 Vercel을 통한 배포라면 거의 비슷할거다.)

![img](/post_images/next/gabia-record.png)

### Vercel

[Vercel 웹사이트](https://vercel.com/)

"Vercel을 통해 배포를 했다면 하단 절차대로 진행 후 가비아 웹 사이트에 타입 A, CNAME 설정을 넣어주면 된다."

1️⃣ Vercel Overview에서 해당 프로젝트에 Settings를 Click!

![img](/post_images/next/vercel.png)

2️⃣ Domains가서 구입한 도메인을 붙여넣고 Add를 누르면 타입 A, CNAME 관련 정보가 나오는데, 이 데이터를 가비아 레코드 수정에서 추가 후 저장

![img](/post_images/next/vercel-setting.png)

잠시 후 해당 Domain으로 접속하면 잘 접속이 되는걸 확인할 수 있다!

![img](/post_images/next/url.png)
