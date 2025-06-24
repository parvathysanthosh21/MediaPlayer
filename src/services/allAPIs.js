import {commonAPI} from './commonAPI'
import { serverURL } from './serverURL'

// upload video 
export const uploadVideo= async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

// get all video 
export const getAllVideos= async()=>{
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video 
export const getAVideo= async(id)=>{
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a video 
export const deleteVideo= async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watchhistorys vedio history to json server, 
// make post http resquest to http://localhost:6173/history to add vedio history in json server and return responce to vediocard component

export const addToHistory = async(vedioDetails)=>{
    return await commonAPI("POST", `${serverURL}/history`,vedioDetails)
}

// get all watching vedio history from json server
// make get http resquest to http://localhost:6173/history to get vedio history from json server and return responce to watchhistory component

export const getAllHistory = async()=>{
    return await commonAPI("GET", `${serverURL}/history`,"")
}

// deleting watchhistorys vedio history from json server, 
// make delete http resquest to http://localhost:6173/history/id to delete vedio history in json server and return responce to vediocard component

export const deleteHistory = async(id)=>{
    return await commonAPI("DELETE", `${serverURL}/history/${id}`,{})
}

// add category to json server
// make post http resquest to http://localhost:6173/category to add category in json server and return responce to category component

export const addCategory= async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/category`,reqBody)
}

// get all category from json server
// make get http resquest to http://localhost:6173/category to get category from json server and return responce to category component

export const getAllCategory= async()=>{
    return await commonAPI("GET",`${serverURL}/category`,"")
}

// remove a cateogory 
// make delete http resquest to http://localhost:6173/category/id to delete particular category from json server and return responce to category component

export const deleteAllCategory= async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/category/${id}`,{})
}


//update category

// update a cateogory 
// make put http resquest to http://localhost:6173/category/id to update particular category from json server and return responce to category component

export const updateCategory= async(id,body)=>{
    return await commonAPI("PUT",`${serverURL}/category/${id}`,body)
}