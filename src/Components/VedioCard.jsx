import React, { useState } from 'react'
import {Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPIs';

function VedioCard({displayData,setDeleteVideoStatus,insideCategory}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    // make api call to localhost//history
     const {caption,embedLink} = displayData
     let today = new Date()
   let timeStamp = new Intl.DateTimeFormat("en-US",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
   let vedioDetails ={
    caption,embedLink,timeStamp
   }
     await addToHistory(vedioDetails)
  }
// deleting a vedio
const removeVideo = async (id)=>{
  // api call
 const  response = deleteVideo(id)
 setDeleteVideoStatus(true)
}

const dragStarted = (e,id)=>{
  console.log("Drag Started : ",+ id);
  // console.log(e);
  e.dataTransfer.setData("videoId",id)
  
}
  return (
    <>
  <Card className='mb-3'  draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
<h6>{displayData?.caption}</h6>
{insideCategory?"":
  <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
}        </Card.Title>
      </Card.Body>
    </Card>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* embedlink */}
          <iframe width={"100%"} height="414" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
    
      </Modal>
    </>
  )
}

export default VedioCard