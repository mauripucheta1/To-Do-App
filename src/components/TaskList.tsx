import { Task } from "./Task"

type taskList = {

    taskList: string[]
    deleteTask: (index: number) => void


}

export const TaskList = ( {taskList, deleteTask}: taskList ) => {

    return (

        <div className="taskList overflow-y-auto max-h-[150px] md:max-h-[315px] h-[150px] md:h-[315px] md:mb-0 mb-8 relative border border-[#83CEEB] rounded-xl">

            {taskList.length === 0 ? (
                <p className="text-gray-500 italic absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg">No pending tasks</p>
            ) : (
                taskList.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
                ))
            )}
            
        </div>

    )

}