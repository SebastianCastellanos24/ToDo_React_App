
export const NewTask = ({ task , setTask, deleteTask }) => {

    const {Title, Date, Description, id} = task;

    const handleDelete = (  ) => {
        const answer = confirm ("Do you want to DELETE this task?")
        if( answer){
            deleteTask(id);
        }
    }

    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
            <p className="font-bold mb-3 text-gray-700">Title:  
                <span className="font-normal"> {Title}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">Date:  
                <span className="font-normal"> {Date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">Description:  
                <span className="font-normal"> {Description}.</span>
            </p>

            <div className="flex justify-between">
                <button 
                    className="bg-green-600 hover:bg-green-700 mt-4 py-2 px-8 rounded-md text-white font-bold" 
                    type="button"
                    onClick={() => setTask(task)}
                >
                    Edit Task
                </button>
                <button 
                    className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-8 rounded-md text-white font-bold" 
                    type="button"
                    onClick={ handleDelete }
                >
                    Delete Task
                </button>
            </div>

        </div>
    )

}
