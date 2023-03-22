export const Task=(props)=>{
  return(
    <div className="task" style={{backgroundColor:props.completed?"green":"red"}}>
      <h1>{props.taskName}</h1>
      <div className="buttongrp">
      <button onClick={()=>props.completeTask(props.id)} className="button1">Complete</button>
      <button onClick={()=>props.deleteTask(props.id)} className="button2">X</button>
      </div>
    </div>
  )
}