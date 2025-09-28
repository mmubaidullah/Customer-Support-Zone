import { use } from 'react';
import Issue from './Issue';

const Issues = ({count,setCount,fetchPromise,selected,setSelected,completed}) => {
    const fetchedData = use(fetchPromise)
    const newData = fetchedData.filter(data => !completed.some(completedData => completedData.id === data.id))
    return (
        <div className='max-w-[1000px] mx-auto flex-1 md:flex-3'>
            <p className=' text-[#34485A] text-2xl font-medium mb-4'>Customer Tickets</p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {
                    newData.map(ticket=><Issue key={ticket.id} count={count} setCount={setCount} ticket={ticket} selected={selected} setSelected={setSelected} completed={completed} />)
                }           
            </div>
        </div>
    );
};

export default Issues;
