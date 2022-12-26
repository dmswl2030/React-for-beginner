## 1. 버튼으로 카운트 만들기 (바닐라 JS 버전)

- html: body에 button 태그를 생성
- js: button, count 텍스트 불러와서 버튼 누를때마다 html의 텍스트 수정되도록 함수 추가

## 2. 버튼으로 카운트 만들기 (react 맛보기 버전-1)

- react js, react-dom 을 import 해줌
  - react js: 어플리케이션이 interective하도록 만들어주는 library, 유저에게 보여질 내용을 컨트롤 할 수 있음
  - react-dom: React element를 HTML에 두는 역할
- React.createElement(html 태그, property, 태그의 내용)
- ReactDOM.render(btn, root) : React element를 가지고 HTML로 만들어 배치 (root안에 btn을 배치)
- property에서 event를 등록하여 addEventListener를 대체할 수 있음

## 3. 버튼으로 카운트 만들기 (JSX로 만들기)

- createElement로 작성하지 않고 html문법으로 대체할 수 있다
- 컴포넌트 안에 변수를 넣으려면 함수화 해주면 된다 (arrow function)
- 변수명 앞에 대문자로 만들어주기 (소문자면 html태그와 헷갈릴 수 있다)
- 변수를 JSX에 전달하기
- React.js는 UI에서 바뀐 부분만 업데이트 해준다
- 컴포넌트나 JSX에 변수를 추가하고 싶으면 {변수명}으로 작성
- 사용자에게 변화된 부분을 보여주고 싶으면 render함수를 호출

## 4. 자동으로 리렌더링 하는 방법

- 배열 요소를 꺼내서 변수명 지어주기 (구조분해 할당)
- 컴포넌트에서 클릭함수를 호출하면 새로운 데이터를 담아 자동으로 리렌더링 한다
- modifire 함수를 가지고 state를 변경할 때 컴포넌트가 재생성됨

## 5. converter 만들기

- useState 활용해서 현재 input의 value를 담아 업데이트 해준다
- 바뀌는 value 부분만 리렌더링 되는중
- Flip버튼으로 한쪽에서만 입력받도록 제어하기 (누르는 동시에 reset)
- 삼항연산자 활용해서 만약 flipped가 true이면 (Hours가 활성화 되어있다면) Minutes은 disable되고 변환 공식을 적어준다
- 리렌더링 조건
  1. props이 바뀔때
  2. state가 바뀔때
  3. 부모 컴포넌트가 리렌더링 될 때
- App는 컨버터를 select하는 함수 : useState의 index를 활용

## 6. props, memo, props types

- props = 부모 컴포넌트로부터 자식 컴포넌트에게 데이터를 전송하는 방식
- 부모에 props를 사용하면 자식 컴포넌트(함수)의 인자로 객체가 들어가게 됨
- 하나의 버튼을 만들어서 props를 이용해 버튼의 스타일을 관리해서 재사용 할 수 있게됨.
- memo = props가 변경되지 않는 선에서 불필요한 부분이 rerender 되지 않도록 해줌
- proptype = 어떤타입의 prop을 받고있는지 체크해줌
