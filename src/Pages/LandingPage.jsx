import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
      const navigateByUrl=  useNavigate()

  return (
    <>
    {/* row */}
      <Row className='mt-5 mb-5 align-items-center justify-content-center w-100'>
        <Col></Col>
        <Col lg={4}>
        <h2 style={{color:'white'}}>Welcome To <span className='text-warning'>MediaPlayer</span></h2>
        <p style={{textAlign:'justify',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint earum accusamus perferendis consectetur vero vel facere laborum eveniet sed, hic enim rem dignissimos, esse cupiditate totam commodi magnam natus!</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-dark'>Get Started  <i class="fa-regular fa-circle-play"></i></button>
        </Col>
        <Col></Col>
        <Col lg={6}>
        <img className='img-fluid w-75' src="https://i.gifer.com/origin/9d/9dc2aec2fb4b0948a9a2675606ff5f75_w200.gif" alt="mediaplayer" />
        </Col>
      </Row>
{/* card features*/}
      <div  className="container mt-5 mb-5 d-flex flex-column  justify-content-center align-items-center">
        <h3 style={{color:'white'}}>Features</h3>
        <div className="cards mt-5 mb-5 d-flex justify-content-between align-items-center w-100">
 <Card className='p-3' style={{ width: '20rem' ,backgroundColor:'black',color:'white'}}>
      <Card.Img variant="top" width={"300px"} height={"300px"} className='rounded' src="https://i.pinimg.com/736x/55/36/4d/55364dbe7efe7052c33df1e3a7a9614f.jpg" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3 ' style={{ width: '20rem',backgroundColor:'black',color:'white' }}>
      <Card.Img variant="top" width={"300px"} height={"300px"} className='rounded' src="https://i.pinimg.com/736x/1e/64/c1/1e64c1aaa17c7a942dae6b07a85d58dc.jpg" />
      <Card.Body>
        <Card.Title>Categories vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3 ' style={{ width: '20rem',backgroundColor:'black' ,color:'white'}}>
      <Card.Img variant="top" width={"300px"} height={"300px"} className='rounded' src="https://i.pinimg.com/736x/9e/d4/fa/9ed4fae382433eeb7fc57e57e23aac3a.jpg" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
        </div>
      </div>
      {/* last */}
 
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center w-100"> 
        <div className="content col-lg-6 ">
          <h3 style={{color:'white'}} className='mb-5 '>Simple , Fast , And Powerful</h3>
          <p style={{textAlign:'justify' ,width:'550px',fontSize:'18px'}}>
            Create playlists, save your favorites, and discover fresh tunes every day. With smooth navigation and a beautiful interface, your entertainment is just a click away. <br />
<h5 style={{color:'white'}} className='mt-4'>
  Start streaming now and experience the joy of media, made simple.
  
</h5>          </p>
        </div>
        <div className="vedioframe col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/U1JLtpJTe84?si=tKwdQtY2H9n1zu-l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage