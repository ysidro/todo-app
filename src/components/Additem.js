import { useState} from "react"; 

function Additem(props){

    const [title, setTitle] = useState("");
    const [description, setDescrition] = useState("");

    const [todoData, setTodoData] = useState();

    function saveItem(){

        if(title === ""){
            alert("submit a title...");
            return;
        }
        if(description === ""){
            alert("submit some description...");
            return;
        }

        let tmpData =  props.setTodoData.push({title: title,description:description});
        setTodoData(tmpData);
        props.uptodoData(todoData);
       
      
    }

    return(
        <div className="modal">
            <h2>Add New task</h2>
            <label>Title
                <input defaultValue={title} onChange={ e => setTitle(e.target.value) } name="titleTask"   />
            </label>
            <label>Description
                <textarea name="description" defaultValue={description} onChange={ e => setDescrition(e.target.value) }></textarea>
            </label>
            <button className="btn" onClick={ saveItem } >Add taks</button>
        </div>
        );
}

export default Additem;