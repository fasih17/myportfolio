import React from 'react'
import './testimonials.scss'


export default function Testimonials() {
  const data=[
    {
      id:1,
      name:'Faiza Almani',
      img:'/assets/user2.png',
      icon:'/assets/opensource.png',
      title:'SALES MANAGER',
      desc:'Needed a custom webpage from a provided UI/UX design. When we discussed the project with Fasih, he listened to us carefully and promised to deliver what was wanted. Glad to say that he kept his promise. In addition to high-quality services, he provided us with a free landing page and promotion services. We are impressed with his work and may work with him again in the near future.',
      featured:true,
    },
    {
      id:2,
      name:'Mike Davis',
      img:'/assets/user1.png',
      icon:'/assets/opensource.png',
      title:'SPORTS AND TECH BLOGGER',
      desc:' Working with him was a pleasant experience. Two things in particular about his service is exceptional: his speed of response to proposals, he is always available to answer my questions and provide feedback as the project went along. Secondly he demonstrated a clear understanding of the scope and nature of the project and delivered accordingly.',
      featured:true,
    },
    {
      id:3,
      name:'Kate Michelle ',
      img:'/assets/user3.png',
      icon:'/assets/opensource.png',
      title:'DIGITAL MARKETING CONSULTAN',
      desc:' Fantastic work! I am just impressed by his service quality and working strategy. I hired him for the development of my online store and he has satisfied me to the full by delivering the exceptional solution. He has great expertise, is dedicated, attentive, talented and care much about the client needs. Highly recommended.',
      featured:true,
    },
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map(t=>(
        <div className={t.featured ? 'card featurd':'card'}>
          <div className='top'>
            <img className='left' src='assets/icon4.svg' alt=''/>
            <img className='user' src={t.img} alt=''/>
            <img className='right' src={t.icon} alt=''/>
          </div>
          <div className='center'>
            <p>{t.desc}</p>
          </div>
          <div className='bottom'>
            <h3>{t.name}</h3>
            <h4>{t.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
