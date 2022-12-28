## 1. ToDo List

1. input을 통해 작성한 toDo, toDo를 통해 받을 수 있는 배열 toDos
2. 처음 시작될때는 비어있는 배열을 가짐
3. 첫번째 toDo를 입력할 때 비어있는 currentArray를 받아옴
4. 새로운 toDos = 입력한 toDo + toDos의 element
5. toDos에 map으로 요소를 반복하면서 li에 item을 표시

## 2. Movie App

1. Home.js : 화면에 그려질 메인페이지
2. Detail.js : 페이지 이동시 보여질 페이지
3. App.js : react-router-dom의 컴포넌트를 가져와서 각 url을 바라보게 하는 Router 사용
  - 1) react-router-dom : 컴포넌트 모음집 (6버전 이상을 사용하니 Router 사용법이 업데이트 되어 영상이랑 다름)
  - 2) Router : 유저가 있는 url에 따라서 유저에게 보여주고 싶은 것 - home url, detail url
                동적 url도 지원
  - 3) Link : 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
