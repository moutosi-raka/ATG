import React from 'react';
import './Sidebar.css'
import { TbMapPin} from "react-icons/tb";
import { MdModeEdit, MdInfoOutline } from "react-icons/md";


const Sidebar = () => {
    return (
        <div className=''>
            <div className='border-bottom flex justify-content-between'>
           <div>
            <TbMapPin className=''></TbMapPin>
           <input  className='input' value='Noida, India' />
           </div>
           <div>
            <MdModeEdit></MdModeEdit>
           </div>
           </div>
           <div className='mt-4 d-flex'>
            <MdInfoOutline className='me-1 text-muted'></MdInfoOutline>
            <p className='sidebar-text'>Your location will help us serve better and extend a personalised experience.</p>
           </div>
        </div>
    );
};

export default Sidebar;