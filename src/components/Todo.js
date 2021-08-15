import {useState} from  "react";

import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props)
{   

    const [modalOpen, setModalOpen] = useState(false);
    const [itemTrue, setItemTrue] = useState(true);
    
    // eslint-disable-next-line 
    const [todoData, setTodoData] = useState();
    const {index,title,description} = props;

    function delectHandler(){
        setModalOpen(true);
    }

    function closeModalHaldlers(){
        setModalOpen(false);
    }

    function confirmlHaldlers(){
        let tmData = props.setTodoData;
        tmData.splice(index,1);
        
        setModalOpen(false);
        setItemTrue(false);
        
        setTodoData(tmData);
    }
    return(<div>{itemTrue ? <div className="card"> 
    <h2>{title}</h2>
    <div className="actions">
        <p>{description}</p>
      <button className="btn" onClick={delectHandler} >Delecte</button>
    </div>
    
    {modalOpen ? <Modal  onCancel={closeModalHaldlers}  onConfirm={confirmlHaldlers}   /> : null }
    {modalOpen ? <Backdrop onCancel={closeModalHaldlers}  /> : null }
  </div> : null } </div>);
}

export default Todo;