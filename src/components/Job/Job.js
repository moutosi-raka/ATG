import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Joseph from '../../assets/Joseph Gray.png'
import { HiOutlineEye } from "react-icons/hi2";
import { FaShareAlt } from 'react-icons/fa';
import { TbMapPin} from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import OutLineIcon from '../OutLineIcon/OutLineIcon';

const Job = () => {
    return (
        <div className='my-3'>
        <Card>
           
            <Card.Body>
                <p className='m-0'>💼️ Job</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6 className='fw-bold'>Software Developer</h6>
                  <OutLineIcon></OutLineIcon>
                </div>
                
              <div>
                <div className='flex'>
                    <p className='flex me-5'> <MdWorkOutline className='me-1'></MdWorkOutline><span>Innovaccer Analytics Private Ltd.</span></p>
                    <p className='flex me-5'><TbMapPin className='me-1'></TbMapPin>Noida, India</p>
                </div>
                <Button className='w-100 my-3' variant="outline-secondary" size="sm">
                Apply on Timesjobs
      </Button>

              </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='flex'>
                        <img className='me-2' style={{width: '40px', height: '40px'}} src={Joseph} alt=''/>
                        <p className='fw-bold mt-16'>Joseph Gray</p>
                    </div>
                    <div className='d-flex align-items-center'>
                      <div>
                      <p className='me-4 mt-16'><HiOutlineEye className='me-1'></HiOutlineEye>1.4k views</p>
                      </div>
                       <div> <button className='shared'><FaShareAlt></FaShareAlt></button></div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
};

export default Job;