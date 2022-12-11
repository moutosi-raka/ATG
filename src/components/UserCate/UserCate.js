import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import user from '../../assets/Vector.png'

const UserCate = () => {
    return (
        <div className='d-md-flex d-block justify-content-between align-items-center category mt-0'>
        <div>
            <ul className='nav'>
                <li class="nav-item">
                    <Link class="nav-link active" href="#">All Post(32)</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Article</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Event</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Education</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">job</Link>
                </li>
            </ul>
        </div>
        <div className= 'mt-md-0 mt-3'>
        <button className='me-3 button bg-gray'>
        Write post <FaCaretDown className='d-inline'></FaCaretDown>
        </button>
         <button className='button text-light bg-primary'><img className='me-1'  src={user} alt='' />Join Group </button>
        </div>
    </div>
    );
};

export default UserCate;