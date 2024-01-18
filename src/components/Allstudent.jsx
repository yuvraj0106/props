import React from 'react'
import Student from './Student'

const Allstudent = () => {
  return (
      <div className='d-flex '>
     <Student rno={1} name="neha" city="Pune"/>

<Student rno={2} name="Aniket" city="Solapur"/>

<Student rno ={3} name="Tanvi" city="Pune"/>

<Student rno ={4} name="Yuvraj" city="Kothrud"/>

<Student rno ={5} name="Chaitnya" city="vadgoan"/>

<Student rno ={6} />

<Student rno ={7} />


    </div>
  )
}

export default Allstudent
