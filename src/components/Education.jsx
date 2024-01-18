import React from 'react';
import './Education.css';

const Education = () => {
  const tc = {
    backgroundColor: '#f0f0f0', // Set your desired background color
    height: '100vh',
    width: '100%',
    opacity: 0.9, // Adjust transparency
  };

  return (
    <div style={tc}>
      <h1 className='container text-danger text-center mt-5'>Education</h1>
      <table className="table table-secondary text-center container mt-5 table-bordered" >
        <thead className=''>
          <tr>
            <th scope="col">Qualification</th>
            <th scope="col">College</th>
            <th scope="col">Percentage</th>
            <th scope="col">Passout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">BCS</th>
            <td>TC College</td>
            <td>57.11</td>
            <td>2023</td>
          </tr>
          <tr>
            <th scope="row">HSC</th>
            <td>N.E.S Highschool & Jr College Nimsakhar</td>
            <td>69.85</td>
            <td>2020</td>
          </tr>
          <tr>
            <th scope="row">SSC</th>
            <td>N.E.S Highschool & Jr College Nimsakhar</td>
            <td>79.60</td>
            <td>2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
  