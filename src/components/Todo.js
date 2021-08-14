import {useState} from  "react";

import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props)
{   
    
    const [modalOpen, setModalOpen] = useState(false);
    const {title} = props;

    function delectHandler(){
        setModalOpen(true);
    }

    function closeModalHaldlers(){
        setModalOpen(false);
    }
    return(<div className="card"> 
    <h2>{title}</h2>
    <div className="actions">
        <p>description, some thin to do...</p>
      <button className="btn" onClick={delectHandler} >Delecte</button>
    </div>
    {modalOpen ? <Modal  onCancel={closeModalHaldlers}  onConfirm={closeModalHaldlers}   /> : null }
    {modalOpen ? <Backdrop onCancel={closeModalHaldlers}  /> : null }
  </div>);
}

export default Todo;