import React from 'react'
import './work.scss'
import { useState } from 'react';


export default function Work() {

  const[currentSlide,selectCurrentSlide]=useState(0);

  const data=[
    {
      id:1,
      icon:'assets/icon1.webp',
      title:'Laundary House',
      desc:' A Professional Dry Clean, Shirt Servicing and Tailoring Webiste for a business',
      img:'assets/main8.png'
    },
    {
      id:2,
      icon:'assets/icon1.webp',
      title:'Balance Sheet',
      desc:'A Statistical Dashboard for maintaining different balance sheets Website for a business ',
      img:'assets/main32.webp'
    },
    {
      id:3,
      icon:'assets/icon1.webp',
      title:'Cars Den',
      desc:' An online platform for Car Ethusiasts which provides features revolving cars Website for audiance',
      img:'assets/main33.png'
    },
    {
      id:4,
      icon:'assets/icon1.webp',
      title:'Pricing Table',
      desc:' A Pricing Table for showing estimated amount for a business. ',
      img:'assets/main34.png'
    }
  ]

  const handleClick=(direction)=>{
    direction === 'left'? selectCurrentSlide(currentSlide > 0 ? currentSlide-1: 3)
    : selectCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 :0)
  }

  return (
    <div className='work' id='work'>
      <div className='slider' style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map(d=>(
          <div className='container'>
              <div className='item'>
                <div className='left'>
                  <div className='leftContainer'>
                    <div className='imgContainer'>
                      <img src={d.icon} alt=''/>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    {/*<span>Projects</span>*/}
                  </div>
                </div>
                <div className='right'>
                  <img src={d.img} alt=''/>
                </div>
              </div>
          </div>
        ))
        }
      </div>
      <img src='assets/arrowLeft.png' alt='' className='arrow left' onClick={()=>handleClick('left')}/>
      <img src='assets/arrowLeft.png' alt='' className='arrow right' onClick={()=>handleClick()}/>
    </div>
  )
}
