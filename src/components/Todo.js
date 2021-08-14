import {useState} from  "react";

import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props)
{   


    const [modalOpen, setModalOpen] = useState(false);
    const [itemTrue, setItemTrue] = useState(true);
    const {index,title} = props;

    function delectHandler(){
        setModalOpen(true);
    }

    function closeModalHaldlers(){
        setModalOpen(false);

    }
    function confirmlHaldlers(){
        setModalOpen(false);
        setItemTrue(false);
        props.onDelect(index);


    }
    return(<div>{itemTrue ? <div className="card"> 
    <h2>{title}</h2>
    <div className="actions">
        <p>description, some thin to do...</p>
      <button className="btn" onClick={delectHandler} >Delecte</button>
    </div>
    {modalOpen ? <Modal  onCancel={closeModalHaldlers}  onConfirm={confirmlHaldlers}   /> : null }
    {modalOpen ? <Backdrop onCancel={closeModalHaldlers}  /> : null }
  </div> : null } </div>);
}

export default Todo;