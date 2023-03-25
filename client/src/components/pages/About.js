import React from 'react';
import Link from 'react-router-dom/Link';

const About = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' className='btn btn-light'>
            Back to Home
          </Link>
        </li>
      </ul>
      <div className='text-center'>
        <h1 className='py-1'>About this App</h1>
        <p style={width}>
          Contact Keeper App Version 3.0.0, is a Web App used for keeping
          contacts
        </p>
        <p style={width}>It was built with HTML, CSS, and React</p>
        <p style={width}>
          It helps to store and keep important contacts securely
        </p>
      </div>
    </div>
  );
};

const width = {
  width: '100%',
  backgroundColor: '#fff',
  marginBottom: '2rem',
  padding: '1rem',
  borderRadius: '5px',
  color: '#000',
  fontWeight: 600,
};

export default About;
