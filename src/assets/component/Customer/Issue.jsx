import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Issue = ({count,setCount,ticket,selected,setSelected,completed}) => {
    let completedMark = false;
        completed.map(item=>{
            if(item.id==ticket.id) completedMark = true; 
        })



    const colorPicker = (color) =>{
        if(color == "High Priority") return "text-red-500";
        if(color == "Medium Priority") return "text-[#FEBB0C]";
        if(color == "Low Priority") return "text-[#02A53B]";
    }
    const [clicked, setClicked] = useState(false);

    const toastShow = () =>{
        if(!completedMark ){
            if(!clicked){
            toast.info("In-progress")}
            else toast.warn("Already added to Task Status Section")
            return;
        }
    }

    const addTOTask = () =>{
        if(clicked) return;
        let tasks = [...selected,ticket]
        setSelected(tasks)
    }


    return (
        <div className="card bg-base-100 shadow-sm cursor-pointer" onClick={() =>
         {
            if(!clicked)setCount(count + 1);
            setClicked(true);
            addTOTask();
            toastShow()
            }}>
            <div className="card-body">
                <div className='flex justify-start md:justify-between gap-2 items-start md:items-center flex-col  md:flex-row'>
                    <h2 className="card-title">{ticket.title}</h2>
                    <div className={`${completedMark?"bg-[#b58dedab]": clicked? "bg-[#F8F3B9]" :"bg-[#B9F8CF]"} rounded-4xl px-2 py-1 flex justify-center items-center gap-2`}>
                        <span className={`${completedMark?"bg-[#9F62F2]":clicked? "bg-[#FEBB0C]" :" bg-[#02A53B]"} w-3 h-3 rounded-full flex items-center justify-center text-white`}></span><span className={`${completedMark?"text-[#934ef4ab]": clicked?"text-[#9C7700]" :"text-[#0B5E06]"}`}>{completedMark?"Completed":!clicked?"Open":"In-Progress" } </span>
                        </div>
                </div>
                <p className='text-[#627382]'>{ticket.description}</p>
                <div className='flex justify-between flex-wrap gap-2 items-center text-xs'>
                    <div className='flex gap-2'>
                        <span className='text-[#627382]'>{ticket.id}</span>
                        <span className={`${colorPicker(ticket.priority)}`}>{ticket.priority} </span>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <span className='text-[#627382]'>{ticket.assignee} </span>
                        <FontAwesomeIcon icon="fa-regular fa-calendar" />
                        <span className='text-[#627382]'>{ticket.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Issue;