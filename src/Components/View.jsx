import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VedioCard'
import { getAllVideos } from '../services/allAPIs'

function View({uploadVideoServerResponce}) {
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const [allVideos, setAllVideos] = useState([])
  const getAllUploadedvideo = async () => {
    // make api call
    const { data } = await getAllVideos()  //const responce
    setAllVideos(data);   //console.log(responce);


  }
  useEffect(() => {
    getAllUploadedvideo()
        setDeleteVideoStatus(false)
  }, [uploadVideoServerResponce,deleteVideoStatus])
  // console.log(allVideos);

  return (
    <>
      <Row>
        {
          allVideos.length>0?
          allVideos.map(video=>(
  <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col> 
          ))
        :
          <p>nothing to display</p>
        }

      </Row>

    </>
  )
}

export default View