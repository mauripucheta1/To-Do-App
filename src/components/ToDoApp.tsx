import { useState } from "react"
import { TaskList } from "./TaskList"

export const ToDoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])
    const handleAddTask = () => {

        if (newTask.trim() === '') return

        setTaskList(previousTasks => [...previousTasks, newTask])
        setNewTask('')

    }

    const handleDeleteTask = (index: number) => {

        setTaskList(tasks => tasks.filter((_, i) => i !== index))

    }

    return (

        <div>
            
            <h1 className="font-semibold text-4xl md:text-6xl text-[#83CEEB] mt-10">Task List ✍🏽</h1>

            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center text-center gap-5 mt-10 mb-6">

                <input type="text" value={newTask} onChange={ (e) => setNewTask(e.target.value) } placeholder="New task..." className="rounded-xl py-2 px-4 w-[100%] md:w-[50%] focus:outline-none border-2 focus:border-[#FBCF52]"/>

                <button onClick={handleAddTask} className="bg-[#83CEEB] text-white hover:bg-[#57899C] transition-all duration-300 ease-in font-medium w-[160px] py-2.5 rounded-xl focus:outline-none">
                    Add task
                </button>

            </div>

            <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>

        </div>

    )

}