import React, { useEffect, useState } from 'react'
import{ Link }from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPIs'
function Watchhistory() {
  const [history,setHistory]= useState([])
  const handleHistory = async ()=>{
    // make api
    const {data}= await getAllHistory()
   setHistory(data);
    
  }
  // console.log(history);
  
  useEffect(()=>{
handleHistory()
  },[])

 const handleDeleteHistory = async(id)=>{
  // make api for delete and get remaining history call handleHistory()
  await deleteHistory(id)
  handleHistory()
 }
  return (
   <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h3 style={{color:'white'}}>Watch History</h3>
        <Link to={'/home'}  style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-arrow-left"></i> Back to home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption </th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       { history.length>0?history?.map((item,index)=>(
<tr  key={item?.id}>  {/* // math.random() index */}
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
          <td>{item.timeStamp}</td>
          <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
       )):
          <p>nothing to display</p>
        
        }
      </tbody>
      </table>
   </>
  )
}

export default Watchhistory