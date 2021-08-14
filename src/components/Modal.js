function Modal(props){
    // props.onClick


    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    return  <div className="modal">
                <p>Are you Sure?</p>
                <div className="controls">
                    <button className="btn btn-all" onClick={cancelHandler}>Cancel</button>
                    <button className="btn" onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
}
export default Modal;