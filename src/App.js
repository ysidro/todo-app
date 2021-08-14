import {useState} from "react";
import Todo from "./components/Todo"
function App() {

    const data = [
      {
 
        title:"Learn Other Languaje"
      },
      {

        title:"Learn ReactJs"
      },
      {

        title:"Create a Api"
      },
      {
   
        title:"Be a good programer"
      },
    ];

    const [todoData,setTodoData] = useState(data);

    const delectElment = (e) => {
        let tmData = todoData;
            tmData.splice(e,1);
            setTodoData(tmData);
    }


  return (
    <div className="App">
      <h1>My Todo</h1>
      {
        todoData.map((e, k )=> <Todo onDelect={delectElment} key={k + '-data'} index={k} title={e.title} />)
      }
      
      <button className="btn btn-add-new"> + </button>
   
    </div>
  );
}

export default App;
