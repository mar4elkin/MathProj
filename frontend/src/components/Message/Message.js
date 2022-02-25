import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../redux/messageSlice';
import './Message.css';

export function Message() {
  
  const dispatch = useDispatch();

  const message = useSelector(state => state.message.message);
  const alertType = useSelector(state => state.message.type);

  let ref = React.createRef();

  let iconsPaths = {
    success: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z',
    warning: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
    danger: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
  } 

  /**
   * 
   * @param {string} alertType: success, warning, danger
   * @param {string} message 
   */
  function showAlertMessage() {
    ref.current.classList.remove('al-msg-hidden');
    ref.current.classList.add(`al-msg-${alertType}`);
  }

  function hideAlertMessage() {
    ref.current.classList.remove(`al-msg-${alertType}`);
    dispatch(clear())
    ref.current.classList.add('al-msg-hidden');
  }

  useEffect(() => {
    if (message != '' && message != undefined) {
      showAlertMessage()
    }
  }, [message]);


  return (
    <div className="alert-message al-msg-hidden" ref={ref}>
      <svg width="18" height="18" role="img">
        <path d={iconsPaths[alertType]} />
      </svg>
      {message}
    </div>
  );
}
