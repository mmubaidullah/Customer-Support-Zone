// export default Status;
import React from 'react';
import '../../../App.css'
import Container from '../container/Container';

const Status = ({count,resolved}) => {
    return (
        <Container>
        <div className=' flex flex-wrap gap-5 justify-between items-center min-h-50 py-5 px-1 bg-[#F5F5F5]'>

            <div className="in-progress flex-1 hero-gradient-left rounded-lg text-center text-white ">
                <div className="info hero-bg-image py-10 px-16">
                    <h2 className='text-2xl'>In-Progress</h2>
                    <h3 className='font-semibold text-6xl'><span className='text-6xl'>{count}</span></h3>
                </div>
            </div>
            
            <div className="resolved flex-1 hero-gradient-right rounded-lg text-center text-white ">
                <div className="info hero-bg-image py-10 px-16">
                    <h2 className='text-2xl'>Resolved</h2>
                    <h3 className='font-semibold text-6xl'>{resolved}</h3>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Status;