import React, { useState } from 'react';
import axios from 'axios';
import './studentlogin.css';
import logo from './images/background 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import google from './images/google 1.png';
import { useNavigate } from 'react-router-dom';


function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.text();
      if (response.ok) {
        navigate('/student');
      } else {
        alert(data); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [selectedBox, setSelectedBox] = useState(null);
  const handleBoxClick = (boxName) => {
    setSelectedBox(boxName);
  };
  return (
    <div className='contener'>
      <div className='logoconten'>
        <img src={logo} className='logo' alt='logo'></img>
      </div>
      <div className='conteners'>
        <div className={`box ${selectedBox === 'Student' ? 'selected' : ''}`} onClick={() => handleBoxClick('Student')}>
          <div className='circle'>{selectedBox === 'Student' && <FontAwesomeIcon icon={faCheck} className='checkIcon' />}</div>
          <h1 className='boxname'>Student</h1>
        </div>
        <div className={`box ${selectedBox === 'Parent' ? 'selected' : ''}`} onClick={() => handleBoxClick('Parent')}>
          <div className='circle'> {selectedBox === 'Parent' && <FontAwesomeIcon icon={faCheck} className='checkIcon' />}</div>
          <h1 className='boxname'>Parent</h1>
        </div>
        <div className={`box ${selectedBox === 'Staff' ? 'selected' : ''}`} onClick={() => handleBoxClick('Staff')}>
          <div className='circle'> {selectedBox === 'Staff' && <FontAwesomeIcon icon={faCheck} className='checkIcon' />}</div>
          <h1 className='boxname'>Staff</h1>
        </div>
      </div>
      <div className='form'>
        <input
        className='user'
          type="text"
          placeholder="Username (Mobile/Email)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className='line'></div>
        <input
        className='user'
          type="password"
          placeholder="Password/OTP"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='line'></div>
        <h1 className='school'>Forget Password?</h1>
      </div>
      <div className='but'>
      <button className='but signin' onClick={handleSignIn}>SIGN IN</button>
      </div>
      <div className='or'>
        <div className='orline'></div>
        <h1 className='OR'>Or</h1>
        <div className='orline'></div>
      </div>
      <div className='google'>
        <img src={google} alt='Google'></img>
        <h2 className='login'>Login with Google</h2>
      </div>
      <h3 className='how'>HOW TO LOGIN?</h3>
      <div className='footer'>
        <h1 className='poweredby'>Powered by</h1>
        <h2 className='web'>DreamsGuider.com</h2>
        <h3 className='provide'>Software | Education | Advertising</h3>
      </div>
    </div>
  );
}

export default StudentLogin;