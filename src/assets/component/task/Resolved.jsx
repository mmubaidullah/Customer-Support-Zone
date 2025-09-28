import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resolved = ({resolved}) => {
    const [deleteItem, setDeleteItem] = useState(false);
    return (
        <div className={`bg-[#E0E7FF] text-[#627382] rounded-sm shadow-md flex justify-between items-center ${deleteItem?"hidden":""}`}>
            <div className='my-4 ml-4'>
                 {resolved.title}
            </div>
            <div onClick={() => {setDeleteItem(true)}} className='cursor-pointer mr-4 p-2 hover:bg-[#ced9fdcc]'>
                <FontAwesomeIcon icon="fa-regular fa-trash-can" /></div>
        </div>
    );
};

export default Resolved;