import { faArrowRightFromBracket, faCircleInfo, faCircleUser, faEllipsisVertical, faGear, faHouse, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './StudentDashbord.css';

//IMG
import homework from './images/Homework1.png';
import syllabus from './images/Syllabus2.png';
import chat from './images/chat box 3.png';
import attendence from './images/Attendence4.png';
import feedback from './images/feedback8.png';
import calender from './images/Calender7.png';
import lecture from './images/video 5.png';
import paper from './images/Qpaper6.png';
import reports from './images/report9.png';
import results from './images/result10.png';

const StudentDashbord = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

  return (
    <div className="contene">
     <div className="bgimg">
        <div className="img-1"></div>
        <div className="Name">
          <span className="hiSaiChudhari">Hi, Sai Chudhari</span><br></br>
          <span className="rollNumber1">Roll Number : 01</span><br></br>
          <span className="class12Std">Class : 12 Std</span>
        </div>
        <nav className="navbar">
          <div className="max-width">
            <ul className={`menu ${isActive ? 'active' : ''}`}>
              <li><FontAwesomeIcon icon={faHouse} /><a href="#Home" className="menu-btn">Home</a></li>
              <li><FontAwesomeIcon icon={faCircleUser} /><Link to="/Profile" className="menu-btn">Profile</Link></li>
              <li><FontAwesomeIcon icon={faCircleInfo} /><a href="#About" className="menu-btn">About School</a></li>
              <li><FontAwesomeIcon icon={faGear} /><a href="#Setting" className="menu-btn">Setting</a></li>
              <li><FontAwesomeIcon icon={faArrowRightFromBracket} /><a href="#Logout" className="menu-btn">Logout</a></li>
            </ul>
            <div className="menu-btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
            </div>
          </div>
        </nav>          
     </div>
            <div className="con">
            <div className="contener">
                <div className="img">
                    <img src={homework} alt="Homework" />
                </div>
                <h1>Homework</h1>
            </div>
        <div className="contener">
            <div className="img">
                <img src={syllabus} alt="Syllabus" />
            </div>
            <h1>Syllabus</h1>
        </div>
        <div className="contener">
            <div className="img">
                <img src={chat} alt="Chat" />
            </div>
            <h1>Chat Option</h1>
        </div>    
        <div className="contener">
            <div className="img">
                <img src={attendence} alt="Attendence_Sheet" />
            </div>
            <h1>Attendence Sheet</h1>
        </div>
        <div className="contener">
            <div className="img">
                <img src={lecture} alt="Video_Lecture" />
            </div>
            <h1>Video Lecture</h1>
        </div>  
        <div className="contener">
            <div className="img">
                <img src={paper} alt="QPaper"/>
            </div>
            <h1>Previous Year Question Paper</h1>
        </div>
        <div className="contener">
            <div className="img">
                <img src={calender} alt="Calender"/>
            </div>
            <h1>Event Calender</h1>
        </div> 
        <div className="contener">
            <div className="img">
                <img src={feedback} alt="Feedback" />
            </div>
            <h1>Feedback of Teacher</h1>
        </div>
        <div className="contener">
            <div className="img">
                <img src={reports} alt="report" />
            </div>
            <h1>Reports</h1>
        </div>
        <div className="contener">
            <div className="img">
                <img src={results} alt="result"/>
            </div>
            <h1>Results</h1>
        </div>
        </div>
            </div>
  );
}
export default StudentDashbord;
