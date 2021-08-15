import {useEffect, useState} from "react";
import Todo from "./components/Todo"
import Backdrop from "./components/Backdrop"
import Additem from "./components/Additem"
function App() {

    const data = [
      {
 
        title:"Learn Other Languaje",
        description: "description, some thin to do..."
      },
      {

        title:"Learn ReactJs",
        description: "description, some thin to do..."
      },
      {

        title:"Create a Api",
        description: "description, some thin to do..."
      },
      {
   
        title:"Be a good programer",
        description: "description, some thin to do..."
      },
    ];

    const [todoData,setTodoData] = useState(data);
    const [modalOpen, setModalOpen] = useState(false);

 
    function openHandler(){
      setTodoData(todoData);
      setModalOpen(true);
  }
    const closeModalHaldlers = () => {
      setModalOpen(false);
    }

    function uptodoTodoData(e){
      console.log(":todoData",todoData);
      setTodoData(e);
    }

    function uptodoData(e){
      setModalOpen(false);
    }

    useEffect(() =>{
      console.log(":todoData",todoData);
    },[todoData])

  return (
    <div className="App">
      <h1>My Todo</h1>
      {
        todoData.map((e, k )=> <Todo uptodoTodoData={ uptodoTodoData} setTodoData={todoData}  key={k + '-data'} index={k} title={e.title} description={e.description} />)
      }
      
      <button className="btn btn-add-new" onClick={openHandler}> + </button>
   
      {modalOpen ? <Additem onCancel={closeModalHaldlers} uptodoData={uptodoData} setTodoData={todoData}  /> : null }
      {modalOpen ? <Backdrop onCancel={closeModalHaldlers}  /> : null }
    </div>
  );
}

export default App;
