import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
import './OutLineIcon.css'

const OutLineIcon = () => {
    const popover = (
        <Popover id="popover-basic">
          {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
          <Popover.Body>
           <ul className=' list-unstyled'>
            <li>Edit</li>
            <li>Report</li>
            <li>Option 3</li>
           </ul>
          </Popover.Body>
        </Popover>
      );
    return (
        <div>
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <p className='fs-4 fw-bold outLineIcon'><HiOutlineEllipsisHorizontal></HiOutlineEllipsisHorizontal></p>
            </OverlayTrigger>
            
        </div>
    );
};

export default OutLineIcon;