import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import leave from '../../assets/leave.png'

const UserCate = () => {
    return (
        <div className='d-md-flex d-block justify-content-between align-items-center category mt-0'>
        <div>
            <ul className='nav'>
                <li className="nav-item">
                    <Link className="nav-link active" href="#">All Post(32)</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">Article</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">Event</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">Education</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">job</Link>
                </li>
            </ul>
        </div>
        <div className= 'mt-md-0 mt-3'>
        <button className='me-3 button bg-gray'>
        Write post <FaCaretDown className='d-inline'></FaCaretDown>
        </button>
        <Button variant="outline-secondary"><img className='me-1'  src={leave} alt='' />Leave Group </Button>
        </div>
    </div>
    );
};

export default UserCate;