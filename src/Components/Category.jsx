import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormLabel, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import VedioCard from './VedioCard';
import "react-toastify/dist/ReactToastify.css";
import { addCategory, deleteAllCategory, getAllCategory, getAVideo, updateCategory } from '../services/allAPIs';
function Category() {

  const [categoryName,setCategoryName]= useState("")
    const [allCategory,setAllCategory]= useState([])

  const handleAddCategory = async ()=>{
    if (categoryName) {
      let body={
        categoryName,allVedioss:[]
      }
      //make api
      const response = await addCategory(body)
      console.log(response);
      if (response.status>=200 && response.status<300) {
        //hide modal
        handleClose()
        //reset it
        setCategoryName("")
        //get category
        getCategory()
      }else{
        toast.error("Operation failed please try after some times")
      }
      
    } else {
            toast.warning("Please Provide Category Name")
      
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get all category when page load
  const getCategory = async()=>{
    //make api call
    const {data} = await getAllCategory()
   setAllCategory(data); //console.log(data)
    
  }
  console.log(allCategory);
  
  useEffect(()=>{
      getCategory()
  },[])

  //delete category 
  const handleDelete= async (id)=>{
    await deleteAllCategory(id)
    getCategory()
  }
// drag over
  const dragOver = (e)=>{
    console.log("video drag over category");
        e.preventDefault()

  }
  // drop vedio
  const videoDrop=async(e,categoryId)=>{
    // console.log("video drop inside category "+categoryId);
    const vedioId = e.dataTransfer.getData("videoId")
    // console.log("video card id : ",vedioId);
    // get vedio details
    const {data} = await getAVideo(vedioId)
    // console.log(data);

    // get category details
    const selectedCategory = allCategory?.find(item=>item.id===categoryId)
    selectedCategory.allVedioss.push(data)
    console.log(selectedCategory);
    
    //make api for update category
    await updateCategory(categoryId,selectedCategory)
    getCategory()
  }
  
  return (
    <>
      <div className='d-grid ms-3'>
       <button onClick={handleShow} className='btn btn-light mt-5'>Add New Category</button> 
      </div>
      { 
      allCategory.length>0?allCategory?.map(item=>(
 <div className="m-3 border border-secondary rounded" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex justify-content-between align-items center">
            <h6 style={{color:"white"}} className='p-3'>{item.categoryName}</h6>
            <button className='btn' onClick={()=>handleDelete(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          <Row>
            {
              item?.allVedioss &&
              item?.allVedioss.map(card=>(
                <Col sm={12}>
                <VedioCard displayData={card} insideCategory={true}/>
                </Col>
              ))
            }
          </Row>
        </div>
      )):
      <p>No Categories Added!!</p>
       
      }

       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form className='border border-secondary rounded p-3'>
             <FormLabel> Enter Category Name</FormLabel>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setCategoryName(e.target.value)}/>
              </Form.Group>
              
            </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
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

export default Category