import React from 'react';
import { Button, Card } from 'react-bootstrap';
import meetUp from '../../assets/meet up/meet Up.png'
import rohan from '../../assets/meet up/Ronal Jones.png'
import { HiOutlineEllipsisHorizontal, HiOutlineEye } from "react-icons/hi2";
import { FaShareAlt } from 'react-icons/fa';
import { TbCalendarEvent,  TbMapPin} from "react-icons/tb";

const MeetUp = () => {
    return (
        <div className='my-3'>
        <Card>
            <Card.Img variant="top" src={meetUp}/>
            <Card.Body>
                <p className='m-0'>🗓️ Meetup</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6 className='fw-bold'>Finance & Investment Elite Social Mixer @Lujiazui</h6>
                  <p className='fs-4 fw-bold'><HiOutlineEllipsisHorizontal></HiOutlineEllipsisHorizontal></p>
                </div>
                
              <div>
                <div className='flex'>
                    <p className='flex me-5'> <TbCalendarEvent className='me-1'></TbCalendarEvent><span>Fri, 12 Oct, 2018</span></p>
                    <p className='flex me-5'><TbMapPin className='me-1'></TbMapPin>Ahmedabad, India</p>
                </div>
                <Button className='w-100 my-3' variant="outline-secondary" size="sm">
                Visit Website
      </Button>

              </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='flex'>
                        <img className='me-2' style={{width: '40px', height: '40px'}} src={rohan} alt=''/>
                        <p className='fw-bold mt-16'>Ronal Jones</p>
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

export default MeetUp;