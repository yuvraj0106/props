import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {
    let {rno ,name, city} = props;

  return (
    <div className="card m-3" style={{width: "18rem"}}>
    <img src="https://plus.unsplash.com/premium_photo-1682088221071-ddd6d6de4191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..."/>
    <div className="card-img-top">
     <h5 className='card-title'>Roll No:{rno}</h5>
     <h5 className='card-title'>Name :{name}</h5>``
     <h5 className='card-title'>City :{city}</h5>

     
    </div>
   
  </div>
  ) 
}

Student.propTypes={

    rno:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired

}
Student.defaultProps = {
        rno: 111111,
        name: 'Enter Name Here',
        city: 'Enter City Here'
}

export default Student
