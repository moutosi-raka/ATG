import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {
    return (
        <div className='border-bottom'>
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
            <div>

            </div>
        </div>
    );
};

export default Category;