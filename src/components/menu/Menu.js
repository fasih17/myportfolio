import React from 'react'
import './menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
          <li onClick={()=>setMenuOpen()}>
              <a href='#intro'>Home</a>
            </li>
          <li onClick={()=>setMenuOpen()}>
              <a href='#portfolio'>Portfolio</a>
            </li>
          <li onClick={()=>setMenuOpen()}>
              <a href='#work'>Works</a>
              </li>
          <li onClick={()=>setMenuOpen()}>
              <a href='#testimonials'>Testimonials</a>
              </li>
          <li onClick={()=>setMenuOpen()}>
              <a href='#contact'>Contact</a>
              </li>
      </ul>
    </div>
  )
}
