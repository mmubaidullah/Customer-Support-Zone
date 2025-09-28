import React from 'react';
import { toast } from 'react-toastify';

const Pending = ({removeItem,item,count,setCount,resolved,setResolved,completed,setCompleted}) => {
    const completedTaks = (item) =>{
            let tasks = [...completed, item]
            setCompleted(tasks)

    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body font-medium text-[16px]">
                <p>{item.title}</p>
                <div className="mt-2">
                    <button className="btn btn-primary btn-block bg-[#02A53B] border-0 text-white" onClick={()=>
                        {
                            setCount(count - 1)
                            setResolved(resolved + 1)
                            completedTaks(item)
                            removeItem(item.id)
                            toast.success("Completed");
                        }}
                        >Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Pending;