import { useState, useEffect } from "react"
import { AlertError } from "./AlertError";

export const Form = ({ tasks, setTasks, task, setTask }) => {

    const [Title, setTitle] = useState("");
    const [Date, setDate] = useState("");
    const [Description, setDescription] = useState("");

    const [Error, setError] = useState(false);
    
    useEffect( () => {
        if( Object.keys(task).length > 0 ){
            setTitle(task.Title);
            setDate(task.Date);
            setDescription(task.Description);
            
        }
    }, [ task ])

    const makeId = () => {
        const id = Math.random().toString(20).substr(4);
        return id;
    }
    
    // form validation
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([Title, Date, Description].includes('')){
            setError(true);
            return;
        }
        setError(false);
        
        // Tasks Object
        const tasksObject = {
            Title,
            Date,
            Description
        };

        if( task.id ){

            tasksObject.id = task.id;

            const updateTask = tasks.map( taskState => 
                taskState.id === task.id ? tasksObject: taskState 
            );
            
            setTasks(updateTask)
            // clean register
            setTask({}); 

        }else{
            tasksObject.id = makeId();
            setTasks([...tasks, tasksObject]);
        }

        // clean form
        setTitle("");
        setDate("");
        setDescription("");

    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">New task</h2>

            <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {Error && <AlertError>Please fill out all fields</AlertError>}

                <div className="mb-5">
                    <label htmlFor="title" className="block text-gray-700 font-bold">Title:</label>
                    <input 
                        id="title"
                        type="text"
                        placeholder="Type the task title"
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
                        value={ Title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 font-bold">Date:</label>
                    <input 
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
                        value={ Date }
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="description" className="block text-gray-700 font-bold">Description:</label>
                    <textarea 
                        id="description"
                        type="date"
                        placeholder="Type the task description"
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
                        value={ Description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                { ! task.id ? (
                    <input 
                        type="submit"
                        className="bg-blue-600 w-full p-3 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                        value="New Task"
                    />
                    ) : (
                    <input 
                        type="submit"
                        className="bg-cyan-500 w-full p-3 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer"
                        value="Update Task"
                    />
                    )    
                }
                
            </form>

        </div>
    )
}
