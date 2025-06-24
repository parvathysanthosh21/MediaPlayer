import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center '>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap" >
      <div className="website" style={{width:'400px'}}> 
        <h4 style={{color:'white'}}><i className="fa-solid fa-cloud "></i>{' '}Media Player</h4>
<h6 style={{color:'white'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6 style={{color:'white'}}>Code licensed MIT, docs CC BY 3.0.</h6>
<p style={{color:'white'}}>Currently v5.3.6.</p>    
    </div>
      <div className="links d-flex flex-column">
        <h4 style={{color:'white'}}>Links</h4>
        <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/home'}style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/watchhistory'}style={{textDecoration:'none',color:'white'}}>Watch HIstory</Link>

      </div>
      <div className="guide d-flex flex-column">
        <h4 style={{color:'white'}}>Guides</h4>
                <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
        <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'white'}}>Routing</Link>


      </div>
      <div className="contact">
        <div className="sub d-flex">
          <input type="text " className='form-control' placeholder='Enter Your E-mail' />
          <button className='btn btn-dark ms-3'>Subscribe</button>
        </div>
        <div className="icons fs-3 d-flex justify-content-evenly mt-3">
        <Link to={'/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
        <Link to={'/home'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></Link>
        <Link to={'/watchhistory'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></Link>
        <Link to={'/watchhistory'}style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-envelope"></i></Link>


        </div>
      </div>
      </div>
<p style={{color:'white'}}>© 2023 Copyright: MediaPlayer.com Build with react </p>
    </div>
  )
}

export default Footer