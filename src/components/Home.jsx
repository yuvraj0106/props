import React from 'react';
import profile from '../resume/yuvraj_dp.jpg';
import resume from '../resume/Yuvraj.mht';
import backg from '../assets/v915-wit-008-l.jpg';


const Home = () => {
  const bg = {
    backgroundImage: `url(${backg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'white', // Set your desired background color
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const img = {
    height: '450px',
    width: '450px',
  };

  const pro = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px',
    marginTop: '-40px',
  };

  const imgdown = {
    marginTop: '-10px', // Adjust as needed
  };

  let wp_message = 'https://wa.me/918975189080?text=Hello';

  return (
<div style={{ ...backgroundStyle, ...bg }}>
      <div style={img}>
        <img src={profile} alt="" style={pro} />
      </div>
      <div style={imgdown}>
        <h1>
          Hii, I'm <span className='text-danger display-3 fw-bold'>Yuvraj</span> <br />I'm a UI/UX Designer
        </h1>

        <a href={wp_message} className='m-4'>
          Connect_Whatsapp
        </a>
        <a href={resume} className='m-1'>
          My_Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
