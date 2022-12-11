import React from 'react';
import './Sidebar.css'
import { TbMapPin} from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='border-bottom flex justify-content-between'>
           <div>
            <TbMapPin className=''></TbMapPin>
           <input  className='input' value='Noida, India' />
           </div>
           <div>
            <MdModeEdit></MdModeEdit>
           </div>
        </div>
    );
};

export default Sidebar;