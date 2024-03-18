import PropTypes from 'prop-types'
import React, { useState } from "react";



export const TaskList = ({ x }) => {

    const [list_items,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    for(let i = 0; i < x.length; i++ ) {
        list_items.push(<li>{x[i]}</li>)
    }
    function handleInput(event){
        setNewTask(event.target.value)
    }


    
    return(
        <>
            <ul>
                {list_items}
            </ul>
                <input
                    type='text'
                    placeholder="Enter new task"
                    value={newTask}
                    onChange={handleInput}
                />
                <button onClick={setNewTask}>Add task</button>
                
        </>);
    
}

TaskList.propTypes = {
    x: PropTypes.array.isRequired,
};