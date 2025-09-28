import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '../container/Container';

const Footer = () => {
    return (
        <div className='bg-black text-white p-7'>
            <Container>
            <div className='flex flex-col gap-7 md:flex-row md:gap-0 p-5'>
                <div className='flex-2'>
                    <p className='text-xl font-bold mb-2'>CS — Ticket System</p>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex-1'>
                    <p className='text-xl font-bold mb-2'>Company</p>
                    <ul className='flex flex-col gap-3 text-[#A1A1AA]'>
                        <li>About us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <p className='text-xl font-bold mb-2'>Services</p>
                    <ul className='flex flex-col gap-3 text-[#A1A1AA]'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className='flex-1'>
                     <p className='text-xl font-bold mb-2'>Information</p>
                    <ul className='flex flex-col gap-3 text-[#A1A1AA]'>
                        <li>Privacy Policy</li>
                        <li>Ters & Conditons</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <p className='text-xl font-bold mb-2'>Social Links</p>
                    <ul className='flex flex-col gap-3 text-[#A1A1AA]'>
                        <li><span className='bg-white text-black rounded-full '><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></span> @CS-Ticket System</li>
                        <li><span className='rounded-full '><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span> @CS-Ticket System</li>
                        <li><span className='rounded-full '><FontAwesomeIcon icon="fa-brands fa-facebook" /></span> @CS-Ticket System</li>
                        <li><span className=' rounded-full '><FontAwesomeIcon icon="fa-solid fa-envelope" /></span> support@cst.com</li>
                    </ul> 
                </div>
            </div>
            </Container>
            <div className='text-[#FAFAFA] text-center py-5 border-t-1 border-gray-300'>© 2025 CS — Ticket System. All rights reserved.</div>
        </div>
    );
};

export default Footer;