# APARTE 웹사이트

## 📦 포함된 파일

- index.html - 메인 페이지 (Today's Offer 타이머, 제품 그리드)
- cart.html - 장바구니
- checkout.html - 결제 페이지 (Stripe UI 데모)
- admin.html - 관리자 대시보드
- supplement.html - 보충제 최저가 비교 (Scroll it!)
- collection.html - 헬스웨어 컬렉션
- styles.css - 전체 스타일
- script.js - JavaScript 기능
- images/ - 제품 이미지

## 🚀 GitHub Pages 업로드 방법

### 1. GitHub 접속
- github.com/0903sean06-code/aparte

### 2. 파일 업로드
- Add file → Upload files
- 모든 파일 드래그 & 드롭
- Commit changes

### 3. Settings → Pages
- Branch: main 선택
- Save

### 4. 완료!
- https://0903sean06-code.github.io/aparte

## ✨ 주요 기능

✅ Today's Offer (24시간 타이머, 매일 자동 변경)
✅ 상품 그리드 (LIFTBALM, BARDYMIST, FRABELL, 크레아틴, 헬스웨어)
✅ 장바구니 (로컬스토리지 저장)
✅ 결제 페이지 (Stripe UI 데모)
✅ 관리자 대시보드 (주문/통계 관리 UI)
✅ 보충제 최저가 비교 (쿠팡/네이버/아마존)
✅ 헬스웨어 컬렉션 (7개 의류 아이템)
✅ 회원가입/로그인 버튼 (비활성, Firebase 준비 중)
✅ 가격 알림 버튼 (비활성, 준비 중)

## 🔧 Stripe 실제 연동 (나중에)

현재는 UI 데모만 구현되어 있습니다.
실제 결제 연동을 위해서는:

1. Stripe 계정 생성 (stripe.com)
2. API 키 발급
3. 백엔드 서버 필요 (Node.js/Python)
4. Stripe Checkout 연동

자세한 가이드: https://stripe.com/docs

## 🔥 Firebase 회원 시스템 (나중에)

1. Firebase 프로젝트 생성
2. Authentication 활성화
3. Firestore Database 설정
4. Firebase SDK 추가

자세한 가이드: https://firebase.google.com/docs

## 💡 이미지 교체 방법

1. images 폴더에 제품 사진 추가
2. HTML에서 placeholder 부분을 실제 이미지로 교체:
   ```html
   <!-- 기존 -->
   <div class="product-ph"></div>
   
   <!-- 변경 -->
   <img src="images/liftbalm.png" alt="LIFTBALM">
   ```

## 📱 반응형 디자인

- 데스크톱: 1200px+
- 태블릿: 768px-1199px
- 모바일: ~767px

모든 페이지 반응형 지원!

## 🎨 색상 시스템

- Black: #0a0a0a
- White: #ffffff
- Pink: #ff006e (브랜드 컬러)
- Gray: #888888

## ⚡ 성능

- 미니파이된 CSS
- 최적화된 JavaScript
- 로컬스토리지 활용
- 빠른 로딩 속도

## 📞 문의

질문이 있으면 GitHub Issues에 남겨주세요!

---

© 2025 APARTE. All rights reserved.
