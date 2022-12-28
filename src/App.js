import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); //input을 통해 작성한 todo
  const [toDos, setToDos] = useState([]); //toDo를 받을 수 있는 배열
  const onChange = (event) => setToDo(event.target.value); //input의 value값이 바뀔때 적용할 onChange 함수
  const onSubmit = (event) => {
    event.preventDefault(); //submit 기본동작 막기
    if (toDo === "") {
      //아무것도 적지않으면 리턴
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //toDo와 현재 배열의 element가 같이 있게됨
    setToDo(""); //toDo의 값을 직접 공백으로 바꾸기
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map(
          (
            item,
            index //toDos배열에 map으로 반복하면서
          ) => (
            <li key={index}>{item}</li> //li태그에 index로 key값을 주고 item을 넣어준다
          )
        )}
      </ul>
    </div>
  );
}
export default App;
