import React, { useState } from 'react';

 function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const pendingTasks = tasks.filter((task) => !task.completed);
  return (
    <>
      <h1 style={{paddingTop:10, position: 'sticky', top:0, backgroundColor: 'rgb(59, 53, 53)', width:'100%', textAlign: 'center'}}>Pending Tasks ({pendingTasks.length})</h1>
        {tasks.map((task, index) => (
          <li className='listItem'
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none', listStyleType :'none'}}
          >
            <div style={{fontSize:20, overflowWrap: 'break-word', inlineSize: 176}}>{task.text}</div>
            <div>
                <button onClick={() => handleComplete(index,task)}  className='btnDiv'>Complete</button>
            <button onClick={() => handleDelete(index)} className='btnDiv'>Delete</button>
            </div>
          </li>
        ))}
     <form onSubmit={handleSubmit} style={{position: 'sticky', bottom:0, backgroundColor: 'rgb(59, 53, 53)', width:'100%', textAlign: 'center'}}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button style={{margin : 10, padding:10, backgroundColor: 'peru', border:'none', borderRadius: 5, color: 'white'}} type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoList;