import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import { uploadVideo } from '../services/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Add({setUploadVideoServerResponce}) {

  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const getEmbedLink =(e)=>{
    const {value}= e.target
    if(value){
 const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
   
  }
  // console.log(video);
  const handleUpload=async()=>{
    const {id,caption,url,embedLink}=video

    if(!id || !caption || !url || !embedLink){
      toast.warning("Please fill the form completely")
    }else{
 // make api call upload video
 const response =  await uploadVideo(video)
//  console.log(response);
 if (response.status>=200 && response.status<300) {
  toast.success(`${response.data.caption} video uploaded succssesfully`)
  // set server responce
  setUploadVideoServerResponce(response.data)
  // modal close
  handleClose()
 } else {
 toast.error("Cannot perform the operation . Please try after sometimes")
 }
 
    }
   
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h4 style={{ color: 'white' }}>Upload New Vedio</h4>
        <button onClick={handleShow} className='btn fs-3'><i className="fa-solid fa-circle-plus"></i></button>
      </div>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Vedio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please Fill the following details </p>
            <Form className='border border-secondary rounded p-3'>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image " onChange={(e)=>setVideo({...video,url:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Video Link" onChange={getEmbedLink}/>
              </Form.Group>
            </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
    </>
  )
}

export default Add

// https://www.youtube.com/watch?v=OIBIXYLJjsI


// https://www.youtube.com/embed/OIBIXYLJjsI
