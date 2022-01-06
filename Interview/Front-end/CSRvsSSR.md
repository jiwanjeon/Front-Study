# CSR VS SSR

1. Create React App(CRA) <- Only CSR

   - 아무런 초기 설정 없이도 CRA를 통해 React 기반의 SPA 사이트를 구현 가능
   - 문제점: 사이트가 검색이 잘 안됨(CRA로 build한 프로젝트는 Only CSR(Client Side Render)로 실행되기 때문)

2. SSR(Server Side Render)

   - 첫 페이지의 렌더링을 클라이언트 측이 아닌 "서버" 측에서 처리해주는 방식
   - 장점<br>
     a) UX 측면에서 유리: CSR에 비해 페이지를 구성하는 속도는 늦어질 수 있지만, 전체적으로 사용자엑게 보여주는 콘첸츠 구성이 완료되는 시점은 빨라진다.<br>
     b) 코드가 적으면 적을수록 웹사이트 로딩이 빠르다<br>
     c) SEO 유리
   - 단점<br>
     a) 모든 UI 렌더링 -> 페이지 렌더링이 느리다<br>
     b) 서버 요청 빈도숙가 높다.

   - When the page arrived on the Client-Side, it is fully rendered. It is because the server-side has fully rendered the page before it was sent by the server to the client.

   ![alt SSR](https://media.vlpt.us/images/vagabondms/post/e00b0e6c-c4f2-4f25-910c-4fe8dc8c254a/image.png)

3. CSR(Client Server Render)

   - 웹 페이지 랜더링이 클라이언트(브라우저)측에서 일어남
   - html,js,css 순으로 파일 다운로드
   - 최초로 불러온 html의 내용은 비어있음
   - 장점<br>
     a) 백엔드 호출 최소화(최초 호출/필요할 때만 데이터 요청)<br>
     b) 라우팅(새로운 페이지로 이동)을 하더라도 html 잧첵가 바뀌는 것이 아니라 JavaScript차원에서 새로운 화면을 그려내는것

![alt CSR](https://media.vlpt.us/images/vagabondms/post/a7676484-cc71-46af-9e4c-cdc522e2679d/image.png) 4. Main Difference

: The Main Difference between CSR and SSR is where the page is rendered. SSR renders the page on the server-side. CSR renders the page on the client-side. Client-Side manages the routing dynamically without refreshing the page every time the client requests a different route.
