import React, {useState} from "react";

function App(){
  // Definir los estados
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Manejo del evento onChange
  function handleInputChange(event){
    setInputValue(event.target.value); //Actualiza el edo con el valor de un elemneto input
  }

  function addTask(){
    if(inputValue.trim()!== ""){
      setTasks([...tasks,{text: inputValue, completed:false}]);
      setInputValue(""); //
    }
  }

  //Crea una funcion ára marcar la tarea como completa
  function toggleCompleteTask(index){
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks);
  }

  //Eliminar tareas
  function deleteTask(index){
    const newTasks = tasks.filter((_,taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* input y boton para agregar nuevas tareas */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        placeholder="Agregar nueva tarea"
        />
        <button onClick={addTask}>Agregar</button>

        {/* Renderizar la lista de tareas */}
        <ul>
          {tasks.map((task, index)=>(
            <li key={index} >
              <span style={{textDecoration: task.completed? "line-through":"none"}}>
                {task.text}
              </span>
              <button onClick={()=> toggleCompleteTask(index)}>Completar</button>
              <button onClick={()=> deleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>

    </div>
    
  )

}

export default App;