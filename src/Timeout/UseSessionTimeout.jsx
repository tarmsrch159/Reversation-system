import { useState, useEffect } from 'react';
import AuthService from '../context/Auth_2';
import Modal from 'react-modal';
import { FcHighPriority } from 'react-icons/fc';


const useSessionTimeout = (timeout) => {


  useEffect(() => {
    let displayTime = timeout / 60000; //Show Session Timeout as Minutes
    // console.log(displayTime)
    let timer = setTimeout(() => {
      // Logout function
      AuthService.logout();
      // location.reload()
      console.log('User has been logged out due to session timeout.');
      alert('หมดเวลาการเชื่อมต่อ')

    }, timeout);

    // Reset timer on user activity
    const resetTimer = () => {
      // console.log('Reset Time')
      clearTimeout(timer);
      timer = setTimeout(() => {
        // Logout function
        AuthService.logout();
        // location.reload()
        alert('หมดเวลาการเชื่อมต่อ')
      }, timeout);
    };

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('touchstart', resetTimer);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keypress', resetTimer);
      document.removeEventListener('touchstart', resetTimer);
    };
  }, [timeout]);

};

export default useSessionTimeout;