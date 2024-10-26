import { useState, useEffect } from "react"
import { useGlobalContext } from '../context/Context';
import { MoreVerticalCircle01Icon, MessageAdd02Icon } from 'hugeicons-react';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const { mode } = useGlobalContext()

    useEffect(() => {
        const getTasks = async () => {
            try {
                const res = await fetch('https://dummyjson.com/todos')
                const data = await res.json()
                console.log(data)
                setTasks(data.todos)
            } catch (error) {
                console.log(`An error occurred: ${error.message}`)
            }
        }
        getTasks()
    }, [])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
            {tasks.map((task) => {
                return (
                    <div className={`${mode === 'light' ? 'bg-white' : 'bg-black text-[#8b939f]'} px-5 py-4 flex flex-col gap-2 rounded-lg`}>
                        <div className="flex items-center justify-between">
                            {task.completed === false ? (
                                <h2
                                    className="bg-[#ecf9f4] text-[#69b59b] text-sm font-light p-1 rounded-md"
                                >
                                    Completed
                                </h2>
                            ) : (
                                <h2
                                    className="bg-[#f6eee5] text-[#d38d4c] text-sm font-light p-1 rounded-md"
                                >
                                    Todo
                                </h2>
                            )}
                            <div>
                                <MoreVerticalCircle01Icon
                                    size={20}
                                    color={"#b2b8c0"}
                                    variant={"stroke"}
                                />
                            </div>
                        </div>
                        <h1>
                            {task.todo}
                        </h1>
                        <div className={`${mode === 'light' ? ' g-[#fafafb]' : 'bg-[#8b939f]'} w-full h-0.5`}></div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    src="/images/profile.jpg"
                                    alt="user-profile"
                                    className={`${mode === 'light' ? 'border-gray-200' : 'border-black'} object-cover w-8 h-8 rounded-[50%] border`} />
                                <img
                                    src="/images/profile2.jpg"
                                    alt="user-profile"
                                    className={`${mode === 'light' ? 'border-gray-200' : 'border-black'} object-cover w-8 h-8 rounded-[50%] border ml-[-10px]`} />
                                <img
                                    src="/images/profile3.jpg"
                                    alt="user-profile"
                                    className={`${mode === 'light' ? 'border-gray-200' : 'border-black'} object-cover w-8 h-8 rounded-[50%] border ml-[-10px]`} />
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <MessageAdd02Icon
                                        size={20}
                                        color={"#8b939f"}
                                        variant={"stroke"}
                                    />
                                </div>
                                <p className="text-[#8b939f]">3</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks