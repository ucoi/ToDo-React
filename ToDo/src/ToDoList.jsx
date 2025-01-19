import React , {useState} from 'react';
function Todo(){

    const[task , settask] = useState([
        'Eat foor' , 'Sleep' , 'Code'
    ]);
    const [newtask  , setnewtask] = useState('');

    function handlechange(e){
        setnewtask(e.target.value);
    }
    function addtask(){}
    function deletetask(index){}
    function movetaskup(index){}
    function movetaskdown(index){}

    return(
        <>
        <div className='todo'>
            <h1>To-Do-list</h1>
            <input type="text" 
            onChange={handlechange}
            placeholder='Enter a Task'
            value={newtask} />
            <button className='Add-button' onClick={addtask}>Add Task</button>
        
        <ol>
            {task.map((task , index) =>
            <li key={index}>
                <span className='text'>
                    {task}
                </span>
                <button 
                className='delete-button' 
                onClick={() => deletetask(index)}>
                Delete Task
                </button>
                <button 
                className='move-button' 
                onClick={() => movetaskup(index)}>
                Up
                </button>
                <button 
                className='down-button' 
                onClick={() => movetaskdown(index)}>
                Down
                </button>

            </li>
            )}
        </ol>
        </div>


        
        </>
    );

}

export default Todo