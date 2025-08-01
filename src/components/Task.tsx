type taskProps = {

    task: string
    deleteTask: () => void

}

export const Task = ( {task, deleteTask}: taskProps ) => {

    return (

        <div className="w-[90%] md:w-[70%] bg-[#83CEEB] mx-auto mt-3 rounded-xl p-3 flex flex-row justify-between items-center text-center">

            <span className="text-white font-medium md:ml-3 text-wrap">{task}</span>
            <button onClick={deleteTask} className="bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in text-white rounded-xl px-5 py-1.5">Borrar</button>

        </div>

    )

}