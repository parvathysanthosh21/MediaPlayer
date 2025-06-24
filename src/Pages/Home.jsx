import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
    // state lifting 
  const [uploadVideoServerResponce,setUploadVideoServerResponce]=useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-video">
          {/* place selector of add vedio */}
          <Add  setUploadVideoServerResponce={setUploadVideoServerResponce}/>
        </div>
        <Link to={'/watch-history'}style={{textDecoration:'none',color:'white'}}>Watch History</Link>
      </div>

      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="all-video col-lg-9">
          <h2 style={{color:'white'}}>All Vedios</h2>
          {/* import view */}
<View uploadVideoServerResponce={uploadVideoServerResponce}/>
        </div>
        <div className="category col-lg-3">
<Category/>
        </div>
      </div>
    </>
  )
}

export default Home