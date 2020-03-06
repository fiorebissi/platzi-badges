import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Home.css';
import Logo from '../images/platziconf-logo.svg';
import PlatziLogo  from '../images/astronauts.svg';


function Home(){
    return(
  <div className='Home'>
    <div className='container'>
    <div className='row'>
      <div className='Home__col col-12 col-md-4'>
          <img
          className='img-fluid mb-2'
          src={Logo}
          alt='Platzi Conf Logo'
          />

        <h1 className='pt-5'>PRINT YOUR BADGES</h1>
        <p>The easiest way to manage your conference</p>
        <Link to='/badges' className='btn btn-success'>Start now
        </Link>
      </div>
      <div className='Home__col d-none d-md-block col-md-8'>
          <img
          className='img-fluid p-4'
          src={PlatziLogo}
          alt='PlatziLogo'
          />
      </div>
    </div>
    </div>
  </div>
    )
}

export default Home;