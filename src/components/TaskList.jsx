import { NewTask } from "./NewTask"

export const TaskList = ({tasks ,setTask, deleteTask }) => {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-y-scroll">

            {tasks && tasks.length ? (
                <>
                <h2 className="font-black text-3xl text-center mb-10">My Task List</h2>

                {tasks.map((task) => {
                    return(
                        <NewTask
                            key = { task.id }
                            task = { task }
                            setTask = { setTask }
                            deleteTask = { deleteTask }
                        />
                    )
                })}
                </>
            ) : <h2 className="font-black text-3xl text-center mb-10">Without task yet</h2>
            }            

        </div>
    )
}