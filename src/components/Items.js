

function Items(props){
    return (<> 
        <h2>{props.title}</h2>
        <div className="actions">
            <p>{props.description}</p>
          <button className="btn" onClick={delectHandler} >Delecte</button>
        </div>
    
      </>)
}

export default Items;