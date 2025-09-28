import React from 'react';
import Pending from './Pending';
import Resolved from './Resolved';

const Task = ({selected,setSelected,count,setCount,resolved,setResolved,completed,setCompleted}) => {
    const removeItem = (id) => {
    setSelected((prev) => prev.filter((item) => item.id !== id));
    };
    return (
            <div className='max-w-5xl flex-1 md:pl-7'>
                    <div className=' mb-9'>
                        <h3 className='text-xl font-medium mb-3 text-[#34485A]'>Task Status</h3>{
                            count == 0?<p className='text-[#627382]'>Select a ticket to add to Task Status</p>: <div className='flex flex-col gap-3'>
                        {
                            selected.map(item=><Pending removeItem={removeItem} key={item.id} item={item} count={count} setCount={setCount} resolved={resolved} setResolved={setResolved} completed={completed} setCompleted={setCompleted}></Pending>)
                        }
                            
                       </div>
                        }
                        
                      
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-3 text-[#34485A]'>Resolved Task</h3>
                        {resolved == 0?<p className='text-[#627382]'>No resolved task yet</p>:
                        <div className='flex flex-col gap-3'>
                            {completed.map(resolved=><Resolved key={resolved.id} resolved={resolved}></Resolved>)}
                        </div>
                        
                        }
                    </div>
            </div>
    );
};

export default Task;