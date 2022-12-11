import React from 'react';
import '../Sidebar/Sidebar.css'
import { TbMapPin} from "react-icons/tb";
import { MdClose, MdInfoOutline } from "react-icons/md";
import Leisure from '../../assets/Leisure.png'
import Activism from '../../assets/Activism.png'
import MBA from '../../assets/MBA.png'
import Philosophy from '../../assets/Philosophy.png'

import { FaRegThumbsUp } from "react-icons/fa";

const UserSidebar = () => {
    const follower =[
        {
            id: 1,
            name: 'Leisure',
            img: Leisure
        },
        {
            id: 2,
            name: 'Activism',
            img: Activism
        },
        {
            id: 3,
            name: 'MBA',
            img: MBA
        },
        {
            id: 4,
            name: 'Philosophy',
            img: Philosophy
        }

    ]
    return (
        <div>
        <div className='border-bottom flex justify-content-between'>
       <div>
        <TbMapPin className=''></TbMapPin>
       <input  className='input' placeholder='Enter your location' />
       </div>
       <div>
        <MdClose></MdClose>
       </div>
       </div>
       <div className='mt-4 d-flex'>
        <MdInfoOutline className='me-1 text-muted'></MdInfoOutline>
        <p className='sidebar-text'>Your location will help us serve better and extend a personalised experience.</p>
       </div>
       <div>
        <p className='follow-text'><FaRegThumbsUp className='me-2'></FaRegThumbsUp>REcommended Groups</p>
         {
            follower.map(fl =>  <div key={fl.id} className='flex justify-content-between'>
            <div className='flex'>
                            <img className='me-2' style={{width: '35px', height: '35px'}} src={fl.img} alt=''/>
                            <p className='mt-16'>{fl.name}</p>
                            {/* <FaCaretDown className='d-inline'></FaCaretDown> */}
    
            </div>
            <div><button className='follow'>follow</button></div>
            </div>)
         }
       </div>
       <p className='text-end text-primary my-5'>See More..</p>
    </div>
    );
};

export default UserSidebar;