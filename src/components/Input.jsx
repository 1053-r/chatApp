import React from 'react'
import attach from '../img/attach.png'
import img from '../img/img.png'

export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Your message goes here...'/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}