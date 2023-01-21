import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">ClassChat</span>
    <div className="user">
      <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <span>Jassem</span>
      <button>logout</button>
    </div>
    </div>
  )
}
