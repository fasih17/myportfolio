import './intro.scss';
import { init } from 'ityped';
import { useEffect , useRef } from 'react';

export default function Intro() {
  const textRef=useRef();

  useEffect(()=>{
    init(textRef.current,{ 
      showCursor: false,
      backDelay:1500,
      backSpeed:60,
      strings: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB' ], });

  },[]) ;

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/main2.png' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I am</h2>
          <h1>Fasih Ullah </h1>
          <div className='description'>
            <p>A progress focused Web Developer with a considerate standing background in
              working with latest technologies and to contribute my knowledge for the development community. </p>
          </div>
          <h3>Web Developer <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/arrow.png' alt=''/>
        </a>
      </div>
    </div>
  )
}
