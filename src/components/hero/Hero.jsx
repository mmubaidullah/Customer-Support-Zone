import React from 'react';
import Container from '../container/Container';

const Hero = ({tasks, resolvedTasks}) => {
    return (
        <>
        <Container>
        <div className=' flex flex-wrap gap-5 justify-between items-center min-h-50 py-10 px-1 bg-[#F5F5F5]'>
            <div className="in-progress flex-1 hero-gradient-left rounded-lg text-center text-white ">
                <div className="info hero-bg-image py-10 px-16">
                    <h2 className='text-2xl'>In-Progress</h2>
                    <h3 className='font-semibold text-6xl'>{tasks.length}</h3>
                </div>
            </div>
            <div className="resolved flex-1 hero-gradient-right rounded-lg text-center text-white ">
                <div className="info hero-bg-image py-10 px-16">
                    <h2 className='text-2xl'>Resolved</h2>
                    <h3 className='font-semibold text-6xl'>{resolvedTasks.length}</h3>
                </div>
            </div>
        </div>
        </Container>
        </>
    );
};

export default Hero;